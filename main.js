var gameData = {
    timeParticles: new OmegaNum("100"),
    TPs: new OmegaNum("0"), // time particles per second
    BuyAmount: new OmegaNum("1"),
    TimeTiers: {
        PriceRatio: new OmegaNum("1.15"),
        Effective: {
            Tier1: new OmegaNum("0"),
            Tier2: new OmegaNum("0"),
            Tier3: new OmegaNum("0"),
            Tier4: new OmegaNum("0"),
            Tier5: new OmegaNum("0"),
            Tier6: new OmegaNum("0"),
            Tier7: new OmegaNum("0"),
            Tier8: new OmegaNum("0"),
            Tier9: new OmegaNum("0"),
            Tier10: new OmegaNum("0")
        },
        Actual: {
            Tier1: new OmegaNum("0"),
            Tier2: new OmegaNum("0"),
            Tier3: new OmegaNum("0"),
            Tier4: new OmegaNum("0"),
            Tier5: new OmegaNum("0"),
            Tier6: new OmegaNum("0"),
            Tier7: new OmegaNum("0"),
            Tier8: new OmegaNum("0"),
            Tier9: new OmegaNum("0"),
            Tier10: new OmegaNum("0")
        },
        Multiplier: {
            Tier1: new OmegaNum("1"),
            Tier2: new OmegaNum("1"),
            Tier3: new OmegaNum("1"),
            Tier4: new OmegaNum("1"),
            Tier5: new OmegaNum("1"),
            Tier6: new OmegaNum("1"),
            Tier7: new OmegaNum("1"),
            Tier8: new OmegaNum("1"),
            Tier9: new OmegaNum("1"),
            Tier10: new OmegaNum("1")
        },
        Cost: {
            Tier1: new OmegaNum("10"),
            Tier2: new OmegaNum("1e3"),
            Tier3: new OmegaNum("1e6"),
            Tier4: new OmegaNum("1e9"),
            Tier5: new OmegaNum("1e12"),
            Tier6: new OmegaNum("1e15"),
            Tier7: new OmegaNum("1e18"),
            Tier8: new OmegaNum("1e21"),
            Tier9: new OmegaNum("1e24"),
            Tier10: new OmegaNum("1e27")
        }
    }
}
var BuyItem = {
    TimeTiers: {
        Tier1: function() {
            if (gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier1, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier1)) && gameData.BuyAmount.gt(new OmegaNum("0")))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier1, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier1));
                gameData.TimeTiers.Actual.Tier1 = gameData.TimeTiers.Actual.Tier1.add(gameData.BuyAmount);
                gameData.TimeTiers.Effective.Tier1 = gameData.TimeTiers.Effective.Tier1.add(gameData.BuyAmount);
            }
        },
        Tier2: function() {
            if (gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier2, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier2)) && gameData.BuyAmount.gt(new OmegaNum("0")))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier2, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier2));
                gameData.TimeTiers.Actual.Tier2 = gameData.TimeTiers.Actual.Tier2.add(gameData.BuyAmount);
                gameData.TimeTiers.Effective.Tier2 = gameData.TimeTiers.Effective.Tier2.add(gameData.BuyAmount);
            }
        },
        Tier3: function() {
            if (gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier3, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier3)) && gameData.BuyAmount.gt(new OmegaNum("0")))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier3, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier3));
                gameData.TimeTiers.Actual.Tier3 = gameData.TimeTiers.Actual.Tier3.add(gameData.BuyAmount);
                gameData.TimeTiers.Effective.Tier3 = gameData.TimeTiers.Effective.Tier3.add(gameData.BuyAmount);
            }
        },
        Tier4: function() {
            if (gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier4, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier4)) && gameData.BuyAmount.gt(new OmegaNum("0")))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier4, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier4));
                gameData.TimeTiers.Actual.Tier4 = gameData.TimeTiers.Actual.Tier4.add(gameData.BuyAmount);
                gameData.TimeTiers.Effective.Tier4 = gameData.TimeTiers.Effective.Tier4.add(gameData.BuyAmount);
            }
        },
        Tier5: function() {
            if (gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier5, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier5)) && gameData.BuyAmount.gt(new OmegaNum("0")))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier5, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier5));
                gameData.TimeTiers.Actual.Tier5 = gameData.TimeTiers.Actual.Tier5.add(gameData.BuyAmount);
                gameData.TimeTiers.Effective.Tier5 = gameData.TimeTiers.Effective.Tier5.add(gameData.BuyAmount);
            }
        },
        Tier6: function() {
            if (gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier6, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier6)) && gameData.BuyAmount.gt(new OmegaNum("0")))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier6, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier6));
                gameData.TimeTiers.Actual.Tier6 = gameData.TimeTiers.Actual.Tier6.add(gameData.BuyAmount);
                gameData.TimeTiers.Effective.Tier6 = gameData.TimeTiers.Effective.Tier6.add(gameData.BuyAmount);
            }
        },
        Tier7: function() {
            if (gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier7, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier7)) && gameData.BuyAmount.gt(new OmegaNum("0")))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier7, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier7));
                gameData.TimeTiers.Actual.Tier7 = gameData.TimeTiers.Actual.Tier7.add(gameData.BuyAmount);
                gameData.TimeTiers.Effective.Tier7 = gameData.TimeTiers.Effective.Tier7.add(gameData.BuyAmount);
            }
        },
        Tier8: function() {
            if (gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier8, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier8)) && gameData.BuyAmount.gt(new OmegaNum("0")))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier8, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier8));
                gameData.TimeTiers.Actual.Tier8 = gameData.TimeTiers.Actual.Tier8.add(gameData.BuyAmount);
                gameData.TimeTiers.Effective.Tier8 = gameData.TimeTiers.Effective.Tier8.add(gameData.BuyAmount);
            }
        },
        Tier9: function() {
            if (gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier9, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier9)) && gameData.BuyAmount.gt(new OmegaNum("0")))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier9, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier9));
                gameData.TimeTiers.Actual.Tier9 = gameData.TimeTiers.Actual.Tier9.add(gameData.BuyAmount);
                gameData.TimeTiers.Effective.Tier9 = gameData.TimeTiers.Effective.Tier9.add(gameData.BuyAmount);
            }
        },
        Tier10: function() {
            if (gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier10, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier10)) && gameData.BuyAmount.gt(new OmegaNum("0")))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier10, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier10));
                gameData.TimeTiers.Actual.Tier10 = gameData.TimeTiers.Actual.Tier10.add(gameData.BuyAmount);
                gameData.TimeTiers.Effective.Tier10 = gameData.TimeTiers.Effective.Tier10.add(gameData.BuyAmount);
            }
        }
    }
}

// intialize some variables
var tte = gameData.TimeTiers.Effective;
var tta = gameData.TimeTiers.Actual;
var ttm = gameData.TimeTiers.Multiplier;
var ts = 100;

function TimeTierGameTick()
{
    tte.Tier9 = tte.Tier9.add(tte.Tier10.mul(ttm.Tier10).div(ts));
    tte.Tier8 = tte.Tier8.add(tte.Tier9.mul(ttm.Tier9).div(ts));
    tte.Tier7 = tte.Tier7.add(tte.Tier8.mul(ttm.Tier8).div(ts));
    tte.Tier6 = tte.Tier6.add(tte.Tier7.mul(ttm.Tier7).div(ts));
    tte.Tier5 = tte.Tier5.add(tte.Tier6.mul(ttm.Tier6).div(ts));
    tte.Tier4 = tte.Tier4.add(tte.Tier5.mul(ttm.Tier5).div(ts));
    tte.Tier3 = tte.Tier3.add(tte.Tier4.mul(ttm.Tier4).div(ts));
    tte.Tier2 = tte.Tier2.add(tte.Tier3.mul(ttm.Tier3).div(ts));
    tte.Tier1 = tte.Tier1.add(tte.Tier2.mul(ttm.Tier2).div(ts));
}

function GameTick()
{
    TimeTierGameTick();
    gameData.TPs = gameData.TPs.add(tte.Tier1.mul(ttm.Tier1).div(ts));
    gameData.timeParticles = gameData.timeParticles.add(gameData.TPs.div(ts)); // div by 100 for TPs actually equal to gain in one second
}

function UITick()
{
    var TT1C = OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier1, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier1);
    var TT2C = OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier2, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier2);
    var TT3C = OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier3, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier3);
    var TT4C = OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier4, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier4);
    var TT5C = OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier5, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier5);
    var TT6C = OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier6, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier6);
    var TT7C = OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier7, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier7);
    var TT8C = OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier8, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier8);
    var TT9C = OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier9, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier9);
    var TT10C = OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier10, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier10);
    document.getElementById("TPObject").textContent = format(gameData.timeParticles, 5);
    document.getElementById("TT1Cost").textContent = "Cost: " + format(TT1C, 5);
    document.getElementById("TT1Amnt").textContent = "Amount: " + format(gameData.TimeTiers.Effective.Tier1, 5);
    document.getElementById("TT2Cost").textContent = "Cost: " + format(TT2C, 5);
    document.getElementById("TT2Amnt").textContent = "Amount: " + format(gameData.TimeTiers.Effective.Tier2, 5);
    document.getElementById("TT3Cost").textContent = "Cost: " + format(TT3C, 5);
    document.getElementById("TT3Amnt").textContent = "Amount: " + format(gameData.TimeTiers.Effective.Tier3, 5);
    document.getElementById("TT4Cost").textContent = "Cost: " + format(TT4C, 5);
    document.getElementById("TT4Amnt").textContent = "Amount: " + format(gameData.TimeTiers.Effective.Tier4, 5);
    document.getElementById("TT5Cost").textContent = "Cost: " + format(TT5C, 5);
    document.getElementById("TT5Amnt").textContent = "Amount: " + format(gameData.TimeTiers.Effective.Tier5, 5);
    document.getElementById("TT6Cost").textContent = "Cost: " + format(TT6C, 5);
    document.getElementById("TT6Amnt").textContent = "Amount: " + format(gameData.TimeTiers.Effective.Tier6, 5);
    document.getElementById("TT7Cost").textContent = "Cost: " + format(TT7C, 5);
    document.getElementById("TT7Amnt").textContent = "Amount: " + format(gameData.TimeTiers.Effective.Tier7, 5);
    document.getElementById("TT8Cost").textContent = "Cost: " + format(TT8C, 5);
    document.getElementById("TT8Amnt").textContent = "Amount: " + format(gameData.TimeTiers.Effective.Tier8, 5);
    document.getElementById("TT9Cost").textContent = "Cost: " + format(TT9C, 5);
    document.getElementById("TT9Amnt").textContent = "Amount: " + format(gameData.TimeTiers.Effective.Tier9, 5);
    document.getElementById("TT10Cost").textContent = "Cost: " + format(TT10C, 5);
    document.getElementById("TT10Amnt").textContent = "Amount: " + format(gameData.TimeTiers.Effective.Tier10, 5);
}

window.setInterval(function(){
	GameTick();
}, 10);

window.setInterval(function(){
	UITick();
}, 25);