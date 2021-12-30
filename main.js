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
            else if (OmegaNum.sumGeometricSeries(OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier1, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier1), gameData.TimeTiers.Cost.Tier1, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier1) && gameData.BuyAmount.lte(new OmegaNum("0")))
            {
                x = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier1, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier1);
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(x, gameData.TimeTiers.Cost.Tier1, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier1));
                gameData.TimeTiers.Actual.Tier1 = gameData.TimeTiers.Actual.Tier1.add(x)
                gameData.TimeTiers.Effective.Tier1 = gameData.TimeTiers.Effective.Tier1.add(x)
            }
        },
        Tier2: function() {
            if (gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier2, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier2)) && gameData.BuyAmount.gt(new OmegaNum("0")))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier2, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier2));
                gameData.TimeTiers.Actual.Tier2 = gameData.TimeTiers.Actual.Tier2.add(gameData.BuyAmount);
                gameData.TimeTiers.Effective.Tier2 = gameData.TimeTiers.Effective.Tier2.add(gameData.BuyAmount);
            }
            else if (OmegaNum.sumGeometricSeries(OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier2, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier2), gameData.TimeTiers.Cost.Tier2, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier2) && gameData.BuyAmount.lte(new OmegaNum("0")))
            {
                x = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier2, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier2);
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(x, gameData.TimeTiers.Cost.Tier2, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier2));
                gameData.TimeTiers.Actual.Tier2 = gameData.TimeTiers.Actual.Tier2.add(x)
                gameData.TimeTiers.Effective.Tier2 = gameData.TimeTiers.Effective.Tier2.add(x)
            }
        },
        Tier3: function() {
            if (gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier3, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier3)) && gameData.BuyAmount.gt(new OmegaNum("0")))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier3, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier3));
                gameData.TimeTiers.Actual.Tier3 = gameData.TimeTiers.Actual.Tier3.add(gameData.BuyAmount);
                gameData.TimeTiers.Effective.Tier3 = gameData.TimeTiers.Effective.Tier3.add(gameData.BuyAmount);
            }
            else if (OmegaNum.sumGeometricSeries(OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier3, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier3), gameData.TimeTiers.Cost.Tier3, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier3) && gameData.BuyAmount.lte(new OmegaNum("0")))
            {
                x = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier3, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier3);
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(x, gameData.TimeTiers.Cost.Tier3, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier3));
                gameData.TimeTiers.Actual.Tier3 = gameData.TimeTiers.Actual.Tier3.add(x)
                gameData.TimeTiers.Effective.Tier3 = gameData.TimeTiers.Effective.Tier3.add(x)
            }
        },
        Tier4: function() {
            if (gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier4, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier4)) && gameData.BuyAmount.gt(new OmegaNum("0")))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier4, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier4));
                gameData.TimeTiers.Actual.Tier4 = gameData.TimeTiers.Actual.Tier4.add(gameData.BuyAmount);
                gameData.TimeTiers.Effective.Tier4 = gameData.TimeTiers.Effective.Tier4.add(gameData.BuyAmount);
            }
            else if (OmegaNum.sumGeometricSeries(OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier4, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier4), gameData.TimeTiers.Cost.Tier4, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier4) && gameData.BuyAmount.lte(new OmegaNum("0")))
            {
                x = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier4, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier4);
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(x, gameData.TimeTiers.Cost.Tier4, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier4));
                gameData.TimeTiers.Actual.Tier4 = gameData.TimeTiers.Actual.Tier4.add(x)
                gameData.TimeTiers.Effective.Tier4 = gameData.TimeTiers.Effective.Tier4.add(x)
            }
        },
        Tier5: function() {
            if (gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier5, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier5)) && gameData.BuyAmount.gt(new OmegaNum("0")))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier5, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier5));
                gameData.TimeTiers.Actual.Tier5 = gameData.TimeTiers.Actual.Tier5.add(gameData.BuyAmount);
                gameData.TimeTiers.Effective.Tier5 = gameData.TimeTiers.Effective.Tier5.add(gameData.BuyAmount);
            }
            else if (OmegaNum.sumGeometricSeries(OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier5, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier5), gameData.TimeTiers.Cost.Tier5, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier5) && gameData.BuyAmount.lte(new OmegaNum("0")))
            {
                x = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier5, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier5);
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(x, gameData.TimeTiers.Cost.Tier5, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier5));
                gameData.TimeTiers.Actual.Tier5 = gameData.TimeTiers.Actual.Tier5.add(x)
                gameData.TimeTiers.Effective.Tier5 = gameData.TimeTiers.Effective.Tier5.add(x)
            }
        },
        Tier6: function() {
            if (gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier6, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier6)) && gameData.BuyAmount.gt(new OmegaNum("0")))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier6, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier6));
                gameData.TimeTiers.Actual.Tier6 = gameData.TimeTiers.Actual.Tier6.add(gameData.BuyAmount);
                gameData.TimeTiers.Effective.Tier6 = gameData.TimeTiers.Effective.Tier6.add(gameData.BuyAmount);
            }
            else if (OmegaNum.sumGeometricSeries(OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier6, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier6), gameData.TimeTiers.Cost.Tier6, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier6) && gameData.BuyAmount.lte(new OmegaNum("0")))
            {
                x = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier6, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier6);
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(x, gameData.TimeTiers.Cost.Tier6, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier6));
                gameData.TimeTiers.Actual.Tier6 = gameData.TimeTiers.Actual.Tier6.add(x)
                gameData.TimeTiers.Effective.Tier6 = gameData.TimeTiers.Effective.Tier6.add(x)
            }
        },
        Tier7: function() {
            if (gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier7, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier7)) && gameData.BuyAmount.gt(new OmegaNum("0")))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier7, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier7));
                gameData.TimeTiers.Actual.Tier7 = gameData.TimeTiers.Actual.Tier7.add(gameData.BuyAmount);
                gameData.TimeTiers.Effective.Tier7 = gameData.TimeTiers.Effective.Tier7.add(gameData.BuyAmount);
            }
            else if (OmegaNum.sumGeometricSeries(OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier7, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier7), gameData.TimeTiers.Cost.Tier7, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier7) && gameData.BuyAmount.lte(new OmegaNum("0")))
            {
                x = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier7, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier7);
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(x, gameData.TimeTiers.Cost.Tier7, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier7));
                gameData.TimeTiers.Actual.Tier7 = gameData.TimeTiers.Actual.Tier7.add(x)
                gameData.TimeTiers.Effective.Tier7 = gameData.TimeTiers.Effective.Tier7.add(x)
            }
        },
        Tier8: function() {
            if (gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier8, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier8)) && gameData.BuyAmount.gt(new OmegaNum("0")))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier8, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier8));
                gameData.TimeTiers.Actual.Tier8 = gameData.TimeTiers.Actual.Tier8.add(gameData.BuyAmount);
                gameData.TimeTiers.Effective.Tier8 = gameData.TimeTiers.Effective.Tier8.add(gameData.BuyAmount);
            }
            else if (OmegaNum.sumGeometricSeries(OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier8, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier8), gameData.TimeTiers.Cost.Tier8, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier8) && gameData.BuyAmount.lte(new OmegaNum("0")))
            {
                x = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier8, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier8);
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(x, gameData.TimeTiers.Cost.Tier8, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier8));
                gameData.TimeTiers.Actual.Tier8 = gameData.TimeTiers.Actual.Tier8.add(x)
                gameData.TimeTiers.Effective.Tier8 = gameData.TimeTiers.Effective.Tier8.add(x)
            }
        },
        Tier9: function() {
            if (gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier9, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier9)) && gameData.BuyAmount.gt(new OmegaNum("0")))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier9, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier9));
                gameData.TimeTiers.Actual.Tier9 = gameData.TimeTiers.Actual.Tier9.add(gameData.BuyAmount);
                gameData.TimeTiers.Effective.Tier9 = gameData.TimeTiers.Effective.Tier9.add(gameData.BuyAmount);
            }
            else if (OmegaNum.sumGeometricSeries(OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier9, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier9), gameData.TimeTiers.Cost.Tier9, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier9) && gameData.BuyAmount.lte(new OmegaNum("0")))
            {
                x = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier9, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier9);
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(x, gameData.TimeTiers.Cost.Tier9, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier9));
                gameData.TimeTiers.Actual.Tier9 = gameData.TimeTiers.Actual.Tier9.add(x)
                gameData.TimeTiers.Effective.Tier9 = gameData.TimeTiers.Effective.Tier9.add(x)
            }
        },
        Tier10: function() {
            if (gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier10, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier10)) && gameData.BuyAmount.gt(new OmegaNum("0")))
            {
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(gameData.BuyAmount, gameData.TimeTiers.Cost.Tier10, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier10));
                gameData.TimeTiers.Actual.Tier10 = gameData.TimeTiers.Actual.Tier10.add(gameData.BuyAmount);
                gameData.TimeTiers.Effective.Tier10 = gameData.TimeTiers.Effective.Tier10.add(gameData.BuyAmount);
            }
            else if (OmegaNum.sumGeometricSeries(OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier10, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier10), gameData.TimeTiers.Cost.Tier10, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier10) && gameData.BuyAmount.lte(new OmegaNum("0")))
            {
                x = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier10, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier10);
                gameData.timeParticles = gameData.timeParticles.sub(OmegaNum.sumGeometricSeries(x, gameData.TimeTiers.Cost.Tier10, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier10));
                gameData.TimeTiers.Actual.Tier10 = gameData.TimeTiers.Actual.Tier10.add(x)
                gameData.TimeTiers.Effective.Tier10 = gameData.TimeTiers.Effective.Tier10.add(x)
            }
        }
    }
}

// intialize some variables
var tte = gameData.TimeTiers.Effective;
var tta = gameData.TimeTiers.Actual;
var ttm = gameData.TimeTiers.Multiplier;
var ttc = gameData.TimeTiers.Cost;
var ts = 100;

function TimeTierGameTick()
{
    tte = gameData.TimeTiers.Effective;
    tta = gameData.TimeTiers.Actual;
    ttm = gameData.TimeTiers.Multiplier;
    ttc = gameData.TimeTiers.Cost;
    tte.Tier9 = tte.Tier9.add(tte.Tier10.mul(ttm.Tier10).div(ts));
    tte.Tier8 = tte.Tier8.add(tte.Tier9.mul(ttm.Tier9).div(ts));
    tte.Tier7 = tte.Tier7.add(tte.Tier8.mul(ttm.Tier8).div(ts));
    tte.Tier6 = tte.Tier6.add(tte.Tier7.mul(ttm.Tier7).div(ts));
    tte.Tier5 = tte.Tier5.add(tte.Tier6.mul(ttm.Tier6).div(ts));
    tte.Tier4 = tte.Tier4.add(tte.Tier5.mul(ttm.Tier5).div(ts));
    tte.Tier3 = tte.Tier3.add(tte.Tier4.mul(ttm.Tier4).div(ts));
    tte.Tier2 = tte.Tier2.add(tte.Tier3.mul(ttm.Tier3).div(ts));
    tte.Tier1 = tte.Tier1.add(tte.Tier2.mul(ttm.Tier2).div(ts));
    gameData.TPs = gameData.TPs.add(tte.Tier1.mul(ttm.Tier1).div(ts));
}
function TimeTierUITick()
{
    if (gameData.BuyAmount.lte(new OmegaNum("0")))
    {
        var TT1CAfford = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier1, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier1)
        var TT2CAfford = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier2, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier2)
        var TT3CAfford = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier3, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier3)
        var TT4CAfford = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier4, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier4)
        var TT5CAfford = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier5, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier5)
        var TT6CAfford = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier6, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier6)
        var TT7CAfford = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier7, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier7)
        var TT8CAfford = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier8, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier8)
        var TT9CAfford = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier9, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier9)
        var TT10CAfford = OmegaNum.affordGeometricSeries(gameData.timeParticles, gameData.TimeTiers.Cost.Tier10, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier10)
        TT1CAfford = TT1CAfford.add(TT1CAfford.lte(new OmegaNum("0")) ? new OmegaNum("1") : new OmegaNum("0"));
        TT2CAfford = TT2CAfford.add(TT2CAfford.lte(new OmegaNum("0")) ? new OmegaNum("1") : new OmegaNum("0"));
        TT3CAfford = TT3CAfford.add(TT3CAfford.lte(new OmegaNum("0")) ? new OmegaNum("1") : new OmegaNum("0"));
        TT4CAfford = TT4CAfford.add(TT4CAfford.lte(new OmegaNum("0")) ? new OmegaNum("1") : new OmegaNum("0"));
        TT5CAfford = TT5CAfford.add(TT5CAfford.lte(new OmegaNum("0")) ? new OmegaNum("1") : new OmegaNum("0"));
        TT6CAfford = TT6CAfford.add(TT6CAfford.lte(new OmegaNum("0")) ? new OmegaNum("1") : new OmegaNum("0"));
        TT7CAfford = TT7CAfford.add(TT7CAfford.lte(new OmegaNum("0")) ? new OmegaNum("1") : new OmegaNum("0"));
        TT8CAfford = TT8CAfford.add(TT8CAfford.lte(new OmegaNum("0")) ? new OmegaNum("1") : new OmegaNum("0"));
        TT9CAfford = TT9CAfford.add(TT9CAfford.lte(new OmegaNum("0")) ? new OmegaNum("1") : new OmegaNum("0"));
        TT10CAfford = TT10CAfford.add(TT10CAfford.lte(new OmegaNum("0")) ? new OmegaNum("1") : new OmegaNum("0"));
        console.log(TT1CAfford)
    }
    var TT1C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT1CAfford, gameData.TimeTiers.Cost.Tier1, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier1) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier1, gameData.TimeTiers.PriceRatio, tta.Tier1);
    var TT2C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT2CAfford, gameData.TimeTiers.Cost.Tier2, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier2) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier2, gameData.TimeTiers.PriceRatio, tta.Tier2);
    var TT3C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT3CAfford, gameData.TimeTiers.Cost.Tier3, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier3) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier3, gameData.TimeTiers.PriceRatio, tta.Tier3);
    var TT4C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT4CAfford, gameData.TimeTiers.Cost.Tier4, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier4) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier4, gameData.TimeTiers.PriceRatio, tta.Tier4);
    var TT5C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT5CAfford, gameData.TimeTiers.Cost.Tier5, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier5) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier5, gameData.TimeTiers.PriceRatio, tta.Tier5);
    var TT6C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT6CAfford, gameData.TimeTiers.Cost.Tier6, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier6) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier6, gameData.TimeTiers.PriceRatio, tta.Tier6);
    var TT7C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT7CAfford, gameData.TimeTiers.Cost.Tier7, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier7) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier7, gameData.TimeTiers.PriceRatio, tta.Tier7);
    var TT8C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT8CAfford, gameData.TimeTiers.Cost.Tier8, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier8) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier8, gameData.TimeTiers.PriceRatio, tta.Tier8);
    var TT9C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT9CAfford, gameData.TimeTiers.Cost.Tier9, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier9) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier9, gameData.TimeTiers.PriceRatio, tta.Tier9);
    var TT10C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT10CAfford, gameData.TimeTiers.Cost.Tier10, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier10) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier10, gameData.TimeTiers.PriceRatio, tta.Tier10);
    document.getElementById("TPObject").textContent = format(gameData.timeParticles, 5);
    var element = 
    React.createElement("div", null, React.createElement("div", {
        className: "CT",
        id: "gen1to5"
    }, React.createElement("button", {
        onClick: BuyItem.TimeTiers.Tier1
    }, React.createElement("p", {
        className: "nomargin"
    }, "Time Generator T1"), React.createElement("p", {
        className: "nomargin"
    }, "Powerhouse."), React.createElement("br", null), React.createElement("p", {
        className: "nomargin",
        id: "TT1Mult"
    }, "\xD71"), React.createElement("p", {
        className: "nomargin",
        id: "TT1Cost"
    }, "Cost: " + format(TT1C, 5)), React.createElement("p", {
        className: "nomargin",
        id: "TT1Amnt"
    }, "Amount: " + format(gameData.TimeTiers.Effective.Tier1, 5))), React.createElement("button", {
        onClick: BuyItem.TimeTiers.Tier2
    }, React.createElement("p", {
        className: "nomargin"
    }, "Time Generator T2"), React.createElement("p", {
        className: "nomargin"
    }, "This works?"), React.createElement("br", null), React.createElement("p", {
        className: "nomargin",
        id: "TT2Mult"
    }, "\xD71"), React.createElement("p", {
        className: "nomargin",
        id: "TT2Cost"
    }, "Cost: " + format(TT2C, 5)), React.createElement("p", {
        className: "nomargin",
        id: "TT2Amnt"
    }, "Amount: " + format(gameData.TimeTiers.Effective.Tier2, 5))), React.createElement("button", {
        onClick: BuyItem.TimeTiers.Tier3
    }, React.createElement("p", {
        className: "nomargin"
    }, "Time Generator T3"), React.createElement("p", {
        className: "nomargin"
    }, "There are more."), React.createElement("br", null), React.createElement("p", {
        className: "nomargin",
        id: "TT3Mult"
    }, "\xD71"), React.createElement("p", {
        className: "nomargin",
        id: "TT3Cost"
    }, "Cost: " + format(TT3C, 5)), React.createElement("p", {
        className: "nomargin",
        id: "TT3Amnt"
    }, "Amount: " + format(gameData.TimeTiers.Effective.Tier3, 5))), React.createElement("button", {
        onClick: BuyItem.TimeTiers.Tier4
    }, React.createElement("p", {
        className: "nomargin"
    }, "Time Generator T4"), React.createElement("p", {
        className: "nomargin"
    }, "4th Generator"), React.createElement("br", null), React.createElement("p", {
        className: "nomargin",
        id: "TT4Mult"
    }, "\xD71"), React.createElement("p", {
        className: "nomargin",
        id: "TT4Cost"
    }, "Cost: " + format(TT4C, 5)), React.createElement("p", {
        className: "nomargin",
        id: "TT4Amnt"
    }, "Amount: " + format(gameData.TimeTiers.Effective.Tier4, 5))), React.createElement("button", {
        onClick: BuyItem.TimeTiers.Tier5
    }, React.createElement("p", {
        className: "nomargin"
    }, "Time Generator T5"), React.createElement("p", {
        className: "nomargin"
    }, "1, 2, 3, 4, 5."), React.createElement("br", null), React.createElement("p", {
        className: "nomargin",
        id: "TT5Mult"
    }, "\xD71"), React.createElement("p", {
        className: "nomargin",
        id: "TT5Cost"
    }, "Cost: " + format(TT5C, 5)), React.createElement("p", {
        className: "nomargin",
        id: "TT5Amnt"
    }, "Amount: " + format(gameData.TimeTiers.Effective.Tier5, 5)))), React.createElement("div", {
        className: "CT",
        id: "gen5to10"
    }, React.createElement("button", {
        onClick: BuyItem.TimeTiers.Tier6
    }, React.createElement("p", {
        className: "nomargin"
    }, "Time Generator T6"), React.createElement("p", {
        className: "nomargin"
    }, "Congrats, Tier 6."), React.createElement("br", null), React.createElement("p", {
        className: "nomargin",
        id: "TT6Mult"
    }, "\xD71"), React.createElement("p", {
        className: "nomargin",
        id: "TT6Cost"
    }, "Cost: " + format(TT6C, 5)), React.createElement("p", {
        className: "nomargin",
        id: "TT6Amnt"
    }, "Amount: " + format(gameData.TimeTiers.Effective.Tier6, 5))), React.createElement("button", {
        onClick: BuyItem.TimeTiers.Tier7
    }, React.createElement("p", {
        className: "nomargin"
    }, "Time Generator T7"), React.createElement("p", {
        className: "nomargin"
    }, "Lucky Number."), React.createElement("br", null), React.createElement("p", {
        className: "nomargin",
        id: "TT7Mult"
    }, "\xD71"), React.createElement("p", {
        className: "nomargin",
        id: "TT7Cost"
    }, "Cost: " + format(TT7C, 5)), React.createElement("p", {
        className: "nomargin",
        id: "TT7Amnt"
    }, "Amount: " + format(gameData.TimeTiers.Effective.Tier7, 5))), React.createElement("button", {
        onClick: BuyItem.TimeTiers.Tier8
    }, React.createElement("p", {
        className: "nomargin"
    }, "Time Generator T8"), React.createElement("p", {
        className: "nomargin"
    }, "101 105 103 104 116"), React.createElement("br", null), React.createElement("p", {
        className: "nomargin",
        id: "TT8Mult"
    }, "\xD71"), React.createElement("p", {
        className: "nomargin",
        id: "TT8Cost"
    }, "Cost: " + format(TT8C, 5)), React.createElement("p", {
        className: "nomargin",
        id: "TT8Amnt"
    }, "Amount: " + format(gameData.TimeTiers.Effective.Tier8, 5))), React.createElement("button", {
        onClick: BuyItem.TimeTiers.Tier9
    }, React.createElement("p", {
        className: "nomargin"
    }, "Time Generator T9"), React.createElement("p", {
        className: "nomargin"
    }, "999999999"), React.createElement("br", null), React.createElement("p", {
        className: "nomargin",
        id: "TT9Mult"
    }, "\xD71"), React.createElement("p", {
        className: "nomargin",
        id: "TT9Cost"
    }, "Cost: " + format(TT9C, 5)), React.createElement("p", {
        className: "nomargin",
        id: "TT9Amnt"
    }, "Amount: " + format(gameData.TimeTiers.Effective.Tier9, 5))), React.createElement("button", {
        onClick: BuyItem.TimeTiers.Tier10
    }, React.createElement("p", {
        className: "nomargin"
    }, "Time Generator T10"), React.createElement("p", {
        className: "nomargin"
    }, "Super Generator."), React.createElement("br", null), React.createElement("p", {
        className: "nomargin",
        id: "TT10Mult"
    }, "\xD71"), React.createElement("p", {
        className: "nomargin",
        id: "TT10Cost"
    }, "Cost: " + format(TT10C, 5)), React.createElement("p", {
        className: "nomargin",
        id: "TT10Amnt"
    }, "Amount: " + format(gameData.TimeTiers.Effective.Tier10, 5)))),
    React.createElement("br", null),
    React.createElement("div", null, React.createElement("div", {
        className: "CT"
      }, React.createElement("textarea", {
        id: "buyAmount",
        defaultValue: "1",
        rows: "1"
      })),
      React.createElement("div", {
        className: "CT"
      }, React.createElement("p", {
        className: "fivemargin"
    }, "Buy Amount"))));
      
    ReactDOM.render(element, document.getElementById('main'));
}

function GameTick()
{
    TimeTierGameTick();
    gameData.timeParticles = gameData.timeParticles.add(gameData.TPs.div(ts)); // div by 100 for TPs actually equal to gain in one second
    try {
        gameData.BuyAmount = new OmegaNum(document.getElementById("buyAmount").value);
    } catch (e) {
        gameData.BuyAmount = new OmegaNum(1);
    }
}

function UITick()
{
    TimeTierUITick()
}
function TestInvalidNum()
{
    return /[0-9e^]/i.test(event.key)
}

window.setInterval(function(){
	GameTick();
}, 10);

window.setInterval(function(){
	UITick();
}, 25);