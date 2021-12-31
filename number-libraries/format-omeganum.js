// format-omeganum.js by cloudytheconqueror
// Code snippets from NumberFormating.js of ducdat0507's The Communitree,
// which is based on The Modding Tree by Acamaeda (and ported to OmegaNum by upvoid),
// in turn based on The Prestige Tree by Jacorb and Aarex

// Set to 1 to print debug information to console
let FORMAT_DEBUG = 0

// Maximum number of times you can apply 1+log10(x) to number < 10 until the result is
// indistinguishable from 1. I calculated it myself and got 45, though I set it to 48 to be safe.
// Reducing this will speed up formatting, but may lead to inaccurate results.
let MAX_LOGP1_REPEATS = 48

function commaFormat(num, precision) {
    if (num === null || num === undefined) return "NaN"
    let zeroCheck = num.array ? num.array[0] : num
    if (zeroCheck < 0.001) return (0).toFixed(precision)
    let init = num.toString()
    let portions = init.split(".")
    portions[0] = portions[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    return portions[0]
}

function regularFormat(num, precision) {
    if (isNaN(num)) return "NaN"
    let zeroCheck = num.array ? num.array[0] : num
    if (zeroCheck < 0.001) return (0).toFixed(precision)
    let fmt = num.toString()
    let f = fmt.split(".")
    if (precision == 0) return commaFormat(num.floor ? num.floor() : Math.floor(num))
    else if (f.length == 1) return fmt + "." + "0".repeat(precision)
    else if (f[1].length < precision) return fmt + "0".repeat(precision - f[1].length)
    else return f[0] + "." + f[1].substring(0, precision)
}

// Basically does the opposite of what standardize in OmegaNum does
// Set smallTop to true to force the top value in the result below 10
function polarize(array, smallTop=false) {
    if (FORMAT_DEBUG >= 1) console.log("Begin polarize: "+JSON.stringify(array)+", smallTop "+smallTop)
    if (array.length == 0) array = [0]
    
    let bottom = array[0], top = 0, height = 0
    if (!Number.isFinite(array[0])) {}
    else if (array.length <= 1) {
        while (smallTop && bottom >= 10) {
            bottom = Math.log10(bottom)
            top += 1
            height = 1
        }
    }
    else {
        top = array[1]
        height = 1
        while (bottom >= 10 || height < array.length-1 || (smallTop && top >= 10)) {
            if (bottom >= 10) { // Bottom mode: the bottom number "climbs" to the top
                if (height == 1) {
                    // Apply one increment
                    bottom = Math.log10(bottom)
                    if (bottom >= 10) { // Apply increment again if necessary
                        bottom = Math.log10(bottom)
                        top += 1
                    }
                }
                else if (height < MAX_LOGP1_REPEATS) {
                    // Apply the first two increments (one or two logs on first, one log on second)
                    if (bottom >= 1e10) bottom = Math.log10(Math.log10(Math.log10(bottom))) + 2
                    else bottom = Math.log10(Math.log10(bottom)) + 1
                    // Apply the remaining increments
                    for (i=2;i<height;i++) bottom = Math.log10(bottom) + 1
                }
                else bottom = 1 // The increment result is indistinguishable from 1
                
                top += 1
                if (FORMAT_DEBUG >= 1) console.log("Bottom mode: bottom "+bottom+", top "+top+", height "+height)
            }
            else { // Top mode: height is increased by one
                bottom = Math.log10(bottom) + top
                height += 1
                top = (array[height]||0) + 1
                if (FORMAT_DEBUG >= 1) console.log("Top mode: bottom "+bottom+", top "+top+", height "+height)
            }
        }
    }
    
    if (FORMAT_DEBUG >= 1) console.log("Polarize result: bottom "+bottom+", top "+top+", height "+height)
    return {bottom: bottom, top: top, height: height}
}

function format(num, precision=2, small=false) {
    if (OmegaNum.isNaN(num)) return "NaN"
    let precision2 = Math.max(3, precision) // for e
    let precision3 = Math.max(4, precision) // for F, G, H
    let precision4 = Math.max(6, precision) // for J
    num = new OmegaNum(num)
    let array = num.array
    //if (num.abs().lt(1e-308)) return (0).toFixed(precision)
    if (num.sign < 0) return "-" + format(num.neg(), precision)
    if (num.isInfinite()) return "Infinity"
    //if (num.lt("0.0001")) { return format(num.rec(), precision) + "⁻¹" }
    //else if (num.lt(1)) return regularFormat(num, precision + (small ? 2 : 0))
    //else if (num.lt(1000)) return regularFormat(num, 0)
    else if (num.lt(1e9)) return commaFormat(num)
    else if (num.lt("10^^5")) { // 1e9 ~ 1F5
        let rep = (array[1]||0)-1
        if (array[0] >= 1e9) {
            array[0] = Math.log10(array[0])
            rep += 1
        }
        let m = 10**(array[0]-Math.floor(array[0]))
        let e = Math.floor(array[0])
        let p = array[0] < 1000 ? precision2 : 0
        return "e".repeat(rep) + regularFormat(m, p) + "e" + commaFormat(e)
    }
    else if (num.lt("10^^1000000")) { // 1F5 ~ F1,000,000
        let pol = polarize(array)
        return regularFormat(pol.bottom, precision3) + "F" + commaFormat(pol.top)
    }
    else if (num.lt("10^^^5")) { // F1,000,000 ~ 1G5
        if ((array[2]||0) >= 1) {
            let rep = array[2]
            array[2] = 0
            return "F".repeat(rep) + format(array, precision)
        }
        let n = array[1] + 1
        if (num.gte("10^^" + (n + 1))) n += 1
        return "F" + format(n, precision)
    }
    else if (num.lt("10^^^1000000")) { // 1G5 ~ G1,000,000
        let pol = polarize(array)
        return regularFormat(pol.bottom, precision3) + "G" + commaFormat(pol.top)
    }
    else if (num.lt("10^^^^5")) { // G1,000,000 ~ 1H5
        if ((array[3]||0) >= 1) {
            let rep = array[3]
            array[3] = 0
            return "G".repeat(rep) + format(array, precision)
        }
        let n = array[2] + 1
        if (num.gte("10^^^" + (n + 1))) n += 1
        return "G" + format(n, precision)
    }
    else if (num.lt("10^^^^1000000")) { // 1H5 ~ H1,000,000
        let pol = polarize(array)
        return regularFormat(pol.bottom, precision3) + "H" + commaFormat(pol.top)
    }
    else if (num.lt("10^^^^^5")) { // H1,000,000 ~ 5J4
        if ((array[4]||0) >= 1) {
            let rep = array[4]
            array[4] = 0
            return "H".repeat(rep) + format(array, precision)
        }
        let n = array[3] + 1
        if (num.gte("10^^^^" + (n + 1))) n += 1
        return "H" + format(n, precision)
    }
    // 5J4 and beyond
    let pol = polarize(array, true)
    return regularFormat(Math.log10(pol.bottom) + pol.top, precision4) + "J" + commaFormat(pol.height)
}

function format2dcm(num, precision=2, small=false) {
    if (OmegaNum.isNaN(num)) return "NaN"
    let precision2 = Math.max(3, precision) // for e
    let precision3 = Math.max(4, precision) // for F, G, H
    let precision4 = Math.max(6, precision) // for J
    num = new OmegaNum(num)
    let array = num.array
    //if (num.abs().lt(1e-308)) return (0).toFixed(precision)
    if (num.sign < 0) return "-" + format(num.neg(), precision)
    if (num.isInfinite()) return "Infinity"
    //if (num.lt("0.0001")) { return format(num.rec(), precision) + "⁻¹" }
    //else if (num.lt(1)) return regularFormat(num, precision + (small ? 2 : 0))
    else if (num.lt(1000)) return regularFormat(num, 2)
    else if (num.lt(1e9)) return commaFormat(num)
    else if (num.lt("10^^5")) { // 1e9 ~ 1F5
        let rep = (array[1]||0)-1
        if (array[0] >= 1e9) {
            array[0] = Math.log10(array[0])
            rep += 1
        }
        let m = 10**(array[0]-Math.floor(array[0]))
        let e = Math.floor(array[0])
        let p = array[0] < 1000 ? precision2 : 0
        return "e".repeat(rep) + regularFormat(m, p) + "e" + commaFormat(e)
    }
    else if (num.lt("10^^1000000")) { // 1F5 ~ F1,000,000
        let pol = polarize(array)
        return regularFormat(pol.bottom, precision3) + "F" + commaFormat(pol.top)
    }
    else if (num.lt("10^^^5")) { // F1,000,000 ~ 1G5
        if ((array[2]||0) >= 1) {
            let rep = array[2]
            array[2] = 0
            return "F".repeat(rep) + format(array, precision)
        }
        let n = array[1] + 1
        if (num.gte("10^^" + (n + 1))) n += 1
        return "F" + format(n, precision)
    }
    else if (num.lt("10^^^1000000")) { // 1G5 ~ G1,000,000
        let pol = polarize(array)
        return regularFormat(pol.bottom, precision3) + "G" + commaFormat(pol.top)
    }
    else if (num.lt("10^^^^5")) { // G1,000,000 ~ 1H5
        if ((array[3]||0) >= 1) {
            let rep = array[3]
            array[3] = 0
            return "G".repeat(rep) + format(array, precision)
        }
        let n = array[2] + 1
        if (num.gte("10^^^" + (n + 1))) n += 1
        return "G" + format(n, precision)
    }
    else if (num.lt("10^^^^1000000")) { // 1H5 ~ H1,000,000
        let pol = polarize(array)
        return regularFormat(pol.bottom, precision3) + "H" + commaFormat(pol.top)
    }
    else if (num.lt("10^^^^^5")) { // H1,000,000 ~ 5J4
        if ((array[4]||0) >= 1) {
            let rep = array[4]
            array[4] = 0
            return "H".repeat(rep) + format(array, precision)
        }
        let n = array[3] + 1
        if (num.gte("10^^^^" + (n + 1))) n += 1
        return "H" + format(n, precision)
    }
    // 5J4 and beyond
    let pol = polarize(array, true)
    return regularFormat(Math.log10(pol.bottom) + pol.top, precision4) + "J" + commaFormat(pol.height)
}

function formatWhole(num) {
    return format(num, 0)
}

function formatSmall(num, precision=2) { 
    return format(num, precision, true)    
}