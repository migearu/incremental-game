var gameData = {
    gameState: "TimeTierMenu",
    timeParticles: new OmegaNum("10"),
    timeCrystals: new OmegaNum("0"),
    BuyAmount: new OmegaNum("1"),
    Prestige: {
        HasFirstTierPrestige: false,
        TCLog: new OmegaNum("10")
    },
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
        Autobuyer: {
            PriceRatio: new OmegaNum("2"),
            BuyAmount: new OmegaNum("1"),
            Amount: {
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
            Cost: {
                Tier1: new OmegaNum("1e3"),
                Tier2: new OmegaNum("1e6"),
                Tier3: new OmegaNum("1e9"),
                Tier4: new OmegaNum("1e12"),
                Tier5: new OmegaNum("1e15"),
                Tier6: new OmegaNum("1e18"),
                Tier7: new OmegaNum("1e21"),
                Tier8: new OmegaNum("1e24"),
                Tier9: new OmegaNum("1e27"),
                Tier10: new OmegaNum("1e30")
            }
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
const StarterGameData = Object.assign({}, gameData);
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
var MenuSwitch = {
    Menu: function() {
        gameData.gameState = "MainMenu";
    },
    Time: function() {
        gameData.gameState = "TimeTierMenu";
    },
    Autobuyer: function() {
        gameData.gameState = "AutobuyerMenu";
    },
    Prestige: function() {
        gameData.gameState = "PrestigeMenu";
    },
    Song: function() {
        gameData.gameState = "SongMenu";
    }
}

// intialize some variables
var isOmegaNum = /^[-\+]*(Infinity|NaN|(10(\^+|\{[1-9]\d*\})|\(10(\^+|\{[1-9]\d*\})\)\^[1-9]\d* )*((\d+(\.\d*)?|\d*\.\d+)?([Ee][-\+]*))*(0|\d+(\.\d*)?|\d*\.\d+))$/;
var tte = gameData.TimeTiers.Effective;
var tta = gameData.TimeTiers.Actual;
var ttm = gameData.TimeTiers.Multiplier;
var ttc = gameData.TimeTiers.Cost;
var ts = new OmegaNum("100");
var lockedMessage = "Locked 🔒";
var TT1M;
var TT2M;
var TT3M;
var TT4M;
var TT5M;
var TT6M;
var TT7M;
var TT8M;
var TT9M;
var TT10M;
var TT1C;
var TT2C;
var TT3C;
var TT4C;
var TT5C;
var TT6C;
var TT7C;
var TT8C;
var TT9C;
var TT10C;

function TimeTierGameTick()
{
    tte = gameData.TimeTiers.Effective;
    tta = gameData.TimeTiers.Actual;
    ttm = gameData.TimeTiers.Multiplier;
    ttc = gameData.TimeTiers.Cost;
    TT1M = ttm.Tier1.mul(tta.Tier1.sqrt()).mul(OmegaNum.logarithm(gameData.timeCrystals.add(new OmegaNum(gameData.timeCrystals.gte(new OmegaNum(1)) ? "0" : "1")), OmegaNum("10")).add(new OmegaNum("1")));
    TT2M = ttm.Tier2.mul(tta.Tier2.sqrt()).mul(OmegaNum.logarithm(gameData.timeCrystals.add(new OmegaNum(gameData.timeCrystals.gte(new OmegaNum(1)) ? "0" : "1")), OmegaNum("10")).add(new OmegaNum("1")));
    TT3M = ttm.Tier3.mul(tta.Tier3.sqrt()).mul(OmegaNum.logarithm(gameData.timeCrystals.add(new OmegaNum(gameData.timeCrystals.gte(new OmegaNum(1)) ? "0" : "1")), OmegaNum("10")).add(new OmegaNum("1")));
    TT4M = ttm.Tier4.mul(tta.Tier4.sqrt()).mul(OmegaNum.logarithm(gameData.timeCrystals.add(new OmegaNum(gameData.timeCrystals.gte(new OmegaNum(1)) ? "0" : "1")), OmegaNum("10")).add(new OmegaNum("1")));
    TT5M = ttm.Tier5.mul(tta.Tier5.sqrt()).mul(OmegaNum.logarithm(gameData.timeCrystals.add(new OmegaNum(gameData.timeCrystals.gte(new OmegaNum(1)) ? "0" : "1")), OmegaNum("10")).add(new OmegaNum("1")));
    TT6M = ttm.Tier6.mul(tta.Tier6.sqrt()).mul(OmegaNum.logarithm(gameData.timeCrystals.add(new OmegaNum(gameData.timeCrystals.gte(new OmegaNum(1)) ? "0" : "1")), OmegaNum("10")).add(new OmegaNum("1")));
    TT7M = ttm.Tier7.mul(tta.Tier7.sqrt()).mul(OmegaNum.logarithm(gameData.timeCrystals.add(new OmegaNum(gameData.timeCrystals.gte(new OmegaNum(1)) ? "0" : "1")), OmegaNum("10")).add(new OmegaNum("1")));
    TT8M = ttm.Tier8.mul(tta.Tier8.sqrt()).mul(OmegaNum.logarithm(gameData.timeCrystals.add(new OmegaNum(gameData.timeCrystals.gte(new OmegaNum(1)) ? "0" : "1")), OmegaNum("10")).add(new OmegaNum("1")));
    TT9M = ttm.Tier9.mul(tta.Tier9.sqrt()).mul(OmegaNum.logarithm(gameData.timeCrystals.add(new OmegaNum(gameData.timeCrystals.gte(new OmegaNum(1)) ? "0" : "1")), OmegaNum("10")).add(new OmegaNum("1")));
    TT10M = ttm.Tier10.mul(tta.Tier10.sqrt()).mul(OmegaNum.logarithm(gameData.timeCrystals.add(new OmegaNum(gameData.timeCrystals.gte(new OmegaNum(1)) ? "0" : "1")), OmegaNum("10")).add(new OmegaNum("1")));
    tte.Tier9 = tte.Tier9.add(tte.Tier10.mul(TT10M).div(ts));
    tte.Tier8 = tte.Tier8.add(tte.Tier9.mul(TT9M).div(ts));
    tte.Tier7 = tte.Tier7.add(tte.Tier8.mul(TT8M).div(ts));
    tte.Tier6 = tte.Tier6.add(tte.Tier7.mul(TT7M).div(ts));
    tte.Tier5 = tte.Tier5.add(tte.Tier6.mul(TT6M).div(ts));
    tte.Tier4 = tte.Tier4.add(tte.Tier5.mul(TT5M).div(ts));
    tte.Tier3 = tte.Tier3.add(tte.Tier4.mul(TT4M).div(ts));
    tte.Tier2 = tte.Tier2.add(tte.Tier3.mul(TT3M).div(ts));
    tte.Tier1 = tte.Tier1.add(tte.Tier2.mul(TT2M).div(ts));
    gameData.timeParticles = gameData.timeParticles.add(tte.Tier1.mul(TT1M).div(ts));
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
    }
    TT1C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT1CAfford, gameData.TimeTiers.Cost.Tier1, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier1) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier1, gameData.TimeTiers.PriceRatio, tta.Tier1);
    TT2C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT2CAfford, gameData.TimeTiers.Cost.Tier2, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier2) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier2, gameData.TimeTiers.PriceRatio, tta.Tier2);
    TT3C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT3CAfford, gameData.TimeTiers.Cost.Tier3, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier3) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier3, gameData.TimeTiers.PriceRatio, tta.Tier3);
    TT4C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT4CAfford, gameData.TimeTiers.Cost.Tier4, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier4) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier4, gameData.TimeTiers.PriceRatio, tta.Tier4);
    TT5C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT5CAfford, gameData.TimeTiers.Cost.Tier5, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier5) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier5, gameData.TimeTiers.PriceRatio, tta.Tier5);
    TT6C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT6CAfford, gameData.TimeTiers.Cost.Tier6, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier6) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier6, gameData.TimeTiers.PriceRatio, tta.Tier6);
    TT7C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT7CAfford, gameData.TimeTiers.Cost.Tier7, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier7) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier7, gameData.TimeTiers.PriceRatio, tta.Tier7);
    TT8C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT8CAfford, gameData.TimeTiers.Cost.Tier8, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier8) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier8, gameData.TimeTiers.PriceRatio, tta.Tier8);
    TT9C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT9CAfford, gameData.TimeTiers.Cost.Tier9, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier9) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier9, gameData.TimeTiers.PriceRatio, tta.Tier9);
    TT10C = gameData.BuyAmount.lte(new OmegaNum("0")) ? OmegaNum.sumGeometricSeries(TT10CAfford, gameData.TimeTiers.Cost.Tier10, gameData.TimeTiers.PriceRatio, gameData.TimeTiers.Actual.Tier10) : OmegaNum.sumGeometricSeries(gameData.BuyAmount, ttc.Tier10, gameData.TimeTiers.PriceRatio, tta.Tier10);
}

function GameTick()
{
    TimeTierGameTick();
    if (document.getElementById("buyAmount") != null)
    {
        if (isOmegaNum.test(document.getElementById("buyAmount").value))
        {
            gameData.BuyAmount = new OmegaNum(document.getElementById("buyAmount").value)
        }
        else if (!isOmegaNum.test(document.getElementById("buyAmount").value) && /[e^]$/.test(document.getElementById("buyAmount").value))
        {
            gameData.BuyAmount = new OmegaNum("0")
        }
        else
        {
            document.getElementById("buyAmount").value = ""
            gameData.BuyAmount = new OmegaNum("0")
        }
    }
}

function UITick()
{
    TimeTierUITick()
}

window.setInterval(function(){
	GameTick();
}, 10);

window.setInterval(function(){
	UITick();
}, 25);