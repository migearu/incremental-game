var CheckboxT1Autobuyer;
var CheckboxT2Autobuyer;
var CheckboxT3Autobuyer;
var CheckboxT4Autobuyer;
var CheckboxT5Autobuyer;
var CheckboxT6Autobuyer;
var CheckboxT7Autobuyer;
var CheckboxT8Autobuyer;
var CheckboxT9Autobuyer;
var CheckboxT10Autobuyer;
var AutobuyerIntervalT1;
var AutobuyerIntervalT2;
var AutobuyerIntervalT3;
var AutobuyerIntervalT4;
var AutobuyerIntervalT5;
var AutobuyerIntervalT6;
var AutobuyerIntervalT7;
var AutobuyerIntervalT8;
var AutobuyerIntervalT9;
var AutobuyerIntervalT10;
var prevmsecT1;
var prevmsecT2;
var prevmsecT3;
var prevmsecT4;
var prevmsecT5;
var prevmsecT6;
var prevmsecT7;
var prevmsecT8;
var prevmsecT9;
var prevmsecT10;
const upgAutobuyerMax = 45; // has to be rounded up, real value is about 43.7
function msec(base, amnt) {
    return amnt.lte("0") ? OmegaNum("1000") : new OmegaNum("1000").mul(base.pow(amnt.sub(new OmegaNum("1")))).round()
}
var BuyAutobuyer = {
    TimeTiers: {
        Tier1: function() {
            if ((gameData.TimeTiers.Autobuyer.Amount.Tier1.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier1, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier1)))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier1, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier1));
                gameData.TimeTiers.Autobuyer.Amount.Tier1 = gameData.TimeTiers.Autobuyer.Amount.Tier1.add(gameData.TimeTiers.Autobuyer.BuyAmount);
            }
        },
        Tier2: function() {
            if ((gameData.TimeTiers.Autobuyer.Amount.Tier2.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier2, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier2)))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier2, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier2));
                gameData.TimeTiers.Autobuyer.Amount.Tier2 = gameData.TimeTiers.Autobuyer.Amount.Tier2.add(gameData.TimeTiers.Autobuyer.BuyAmount);
            }
        },
        Tier3: function() {
            if ((gameData.TimeTiers.Autobuyer.Amount.Tier3.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier3, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier3)))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier3, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier3));
                gameData.TimeTiers.Autobuyer.Amount.Tier3 = gameData.TimeTiers.Autobuyer.Amount.Tier3.add(gameData.TimeTiers.Autobuyer.BuyAmount);
            }
        },
        Tier4: function() {
            if ((gameData.TimeTiers.Autobuyer.Amount.Tier4.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier4, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier4)))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier4, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier4));
                gameData.TimeTiers.Autobuyer.Amount.Tier4 = gameData.TimeTiers.Autobuyer.Amount.Tier4.add(gameData.TimeTiers.Autobuyer.BuyAmount);
            }
        },
        Tier5: function() {
            if ((gameData.TimeTiers.Autobuyer.Amount.Tier5.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier5, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier5)))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier5, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier5));
                gameData.TimeTiers.Autobuyer.Amount.Tier5 = gameData.TimeTiers.Autobuyer.Amount.Tier5.add(gameData.TimeTiers.Autobuyer.BuyAmount);
            }
        },
        Tier6: function() {
            if ((gameData.TimeTiers.Autobuyer.Amount.Tier6.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier6, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier6)))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier6, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier6));
                gameData.TimeTiers.Autobuyer.Amount.Tier6 = gameData.TimeTiers.Autobuyer.Amount.Tier6.add(gameData.TimeTiers.Autobuyer.BuyAmount);
            }
        },
        Tier7: function() {
            if ((gameData.TimeTiers.Autobuyer.Amount.Tier7.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier7, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier7)))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier7, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier7));
                gameData.TimeTiers.Autobuyer.Amount.Tier7 = gameData.TimeTiers.Autobuyer.Amount.Tier7.add(gameData.TimeTiers.Autobuyer.BuyAmount);
            }
        },
        Tier8: function() {
            if ((gameData.TimeTiers.Autobuyer.Amount.Tier8.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier8, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier8)))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier8, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier8));
                gameData.TimeTiers.Autobuyer.Amount.Tier8 = gameData.TimeTiers.Autobuyer.Amount.Tier8.add(gameData.TimeTiers.Autobuyer.BuyAmount);
            }
        },
        Tier9: function() {
            if ((gameData.TimeTiers.Autobuyer.Amount.Tier9.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier9, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier9)))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier9, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier9));
                gameData.TimeTiers.Autobuyer.Amount.Tier9 = gameData.TimeTiers.Autobuyer.Amount.Tier9.add(gameData.TimeTiers.Autobuyer.BuyAmount);
            }
        },
        Tier10: function() {
            if ((gameData.TimeTiers.Autobuyer.Amount.Tier10.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier10, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier10)))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier10, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier10));
                gameData.TimeTiers.Autobuyer.Amount.Tier10 = gameData.TimeTiers.Autobuyer.Amount.Tier10.add(gameData.TimeTiers.Autobuyer.BuyAmount);
            }
        }
    }
}
window.setInterval(function() {
    if (msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier1).toNumber() != prevmsecT1)
    {
        if (typeof AutobuyerIntervalT1 !== 'undefined') clearInterval(AutobuyerIntervalT1);
        AutobuyerIntervalT1 = window.setInterval(function() {
            if (document.getElementById("CheckboxT1Autobuyer") != null) CheckboxT1AutobuyerChecked = document.getElementById("CheckboxT1Autobuyer").checked;
            if (gameData.TimeTiers.Autobuyer.Amount.Tier1 != 0 && CheckboxT1AutobuyerChecked) BuyItem.TimeTiers.Tier1();
        }, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier1).toNumber());
    }

    if (msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier2).toNumber() != prevmsecT2)
    {
        if (typeof AutobuyerIntervalT3 !== 'undefined') clearInterval(AutobuyerIntervalT2);
        AutobuyerIntervalT2 = window.setInterval(function() {
            if (document.getElementById("CheckboxT2Autobuyer") != null) CheckboxT2AutobuyerChecked = document.getElementById("CheckboxT2Autobuyer").checked;
            if (gameData.TimeTiers.Autobuyer.Amount.Tier2 != 0 && CheckboxT2AutobuyerChecked) BuyItem.TimeTiers.Tier2();
        }, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier2).toNumber());
    }

    if (msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier3).toNumber() != prevmsecT3)
    {
        if (typeof AutobuyerIntervalT3 !== 'undefined') clearInterval(AutobuyerIntervalT3);
        AutobuyerIntervalT3 = window.setInterval(function() {
            if (document.getElementById("CheckboxT3Autobuyer") != null) CheckboxT3AutobuyerChecked = document.getElementById("CheckboxT3Autobuyer").checked;
            if (gameData.TimeTiers.Autobuyer.Amount.Tier3 != 0 && CheckboxT3AutobuyerChecked) BuyItem.TimeTiers.Tier3();
        }, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier3).toNumber());
    }
    
    if (msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier4).toNumber() != prevmsecT4)
    {
        if (typeof AutobuyerIntervalT4 !== 'undefined') clearInterval(AutobuyerIntervalT4);
        AutobuyerIntervalT4 = window.setInterval(function() {
            if (document.getElementById("CheckboxT4Autobuyer") != null) CheckboxT4AutobuyerChecked = document.getElementById("CheckboxT4Autobuyer").checked;
            if (gameData.TimeTiers.Autobuyer.Amount.Tier4 != 0 && CheckboxT4AutobuyerChecked) BuyItem.TimeTiers.Tier4();
        }, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier4).toNumber());
    }

    if (msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier5).toNumber() != prevmsecT5)
    {
        if (typeof AutobuyerIntervalT5 !== 'undefined') clearInterval(AutobuyerIntervalT5);
        AutobuyerIntervalT5 = window.setInterval(function() {
            if (document.getElementById("CheckboxT5Autobuyer") != null) CheckboxT5AutobuyerChecked = document.getElementById("CheckboxT5Autobuyer").checked;
            if (gameData.TimeTiers.Autobuyer.Amount.Tier5 != 0 && CheckboxT5AutobuyerChecked) BuyItem.TimeTiers.Tier5();
        }, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier5).toNumber());
    }

    if (msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier6).toNumber() != prevmsecT6)
    {
        if (typeof AutobuyerIntervalT6 !== 'undefined') clearInterval(AutobuyerIntervalT6);
        AutobuyerIntervalT6 = window.setInterval(function() {
            if (document.getElementById("CheckboxT6Autobuyer") != null) CheckboxT6AutobuyerChecked = document.getElementById("CheckboxT6Autobuyer").checked;
            if (gameData.TimeTiers.Autobuyer.Amount.Tier6 != 0 && CheckboxT6AutobuyerChecked) BuyItem.TimeTiers.Tier6();
        }, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier6).toNumber());
    }

    if (msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier7).toNumber() != prevmsecT7)
    {
        if (typeof AutobuyerIntervalT8 !== 'undefined') clearInterval(AutobuyerIntervalT7);
        AutobuyerIntervalT7 = window.setInterval(function() {
            if (document.getElementById("CheckboxT7Autobuyer") != null) CheckboxT7AutobuyerChecked = document.getElementById("CheckboxT7Autobuyer").checked;
            if (gameData.TimeTiers.Autobuyer.Amount.Tier7 != 0 && CheckboxT7AutobuyerChecked) BuyItem.TimeTiers.Tier7();
        }, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier7).toNumber());
    }

    if (msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier8).toNumber() != prevmsecT8)
    {
        if (typeof AutobuyerIntervalT8 !== 'undefined') clearInterval(AutobuyerIntervalT8);
        AutobuyerIntervalT8 = window.setInterval(function() {
            if (document.getElementById("CheckboxT8Autobuyer") != null) CheckboxT8AutobuyerChecked = document.getElementById("CheckboxT8Autobuyer").checked;
            if (gameData.TimeTiers.Autobuyer.Amount.Tier8 != 0 && CheckboxT8AutobuyerChecked) BuyItem.TimeTiers.Tier8();
        }, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier8).toNumber());
    }

    if (msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier9).toNumber() != prevmsecT9)
    {
        if (typeof AutobuyerIntervalT9 !== 'undefined') clearInterval(AutobuyerIntervalT9);
        AutobuyerIntervalT9 = window.setInterval(function() {
            if (document.getElementById("CheckboxT9Autobuyer") != null) CheckboxT9AutobuyerChecked = document.getElementById("CheckboxT9Autobuyer").checked;
            if (gameData.TimeTiers.Autobuyer.Amount.Tier9 != 0 && CheckboxT9AutobuyerChecked) BuyItem.TimeTiers.Tier9();
        }, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier9).toNumber());
    }

    if (msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier10).toNumber() != prevmsecT10)
    {
        if (typeof AutobuyerIntervalT10 !== 'undefined') clearInterval(AutobuyerIntervalT10);
        AutobuyerIntervalT10 = window.setInterval(function() {
            if (document.getElementById("CheckboxT10Autobuyer") != null) CheckboxT10AutobuyerChecked = document.getElementById("CheckboxT10Autobuyer").checked;
            if (gameData.TimeTiers.Autobuyer.Amount.Tier10 != 0 && CheckboxT10AutobuyerChecked) BuyItem.TimeTiers.Tier10();
        }, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier10).toNumber());
    }

    prevmsecT1 = msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier1).toNumber()
    prevmsecT2 = msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier2).toNumber()
    prevmsecT3 = msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier3).toNumber()
    prevmsecT4 = msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier4).toNumber()
    prevmsecT5 = msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier5).toNumber()
    prevmsecT6 = msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier6).toNumber()
    prevmsecT7 = msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier7).toNumber()
    prevmsecT8 = msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier8).toNumber()
    prevmsecT9 = msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier9).toNumber()
    prevmsecT10 = msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier10).toNumber()
}, 10)