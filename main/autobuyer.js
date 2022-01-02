const upgAutobuyerMax = 45; // has to be rounded up, real value is about 43.7
function msec(base, amnt) {
    return amnt.lte("0") ? OmegaNum("1000") : new OmegaNum("1000").mul(base.pow(amnt-new OmegaNum("1"))).round()
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

window.setInterval(function(){
    if (gameData.TimeTiers.Autobuyer.Amount.Tier1 != 0) BuyItem.TimeTiers.Tier1();
}, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier1).toNumber());

window.setInterval(function(){
    if (gameData.TimeTiers.Autobuyer.Amount.Tier2 != 0) BuyItem.TimeTiers.Tier2();
}, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier2).toNumber());

window.setInterval(function(){
    if (gameData.TimeTiers.Autobuyer.Amount.Tier3 != 0) BuyItem.TimeTiers.Tier3();
}, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier3).toNumber());

window.setInterval(function(){
    if (gameData.TimeTiers.Autobuyer.Amount.Tier4 != 0) BuyItem.TimeTiers.Tier4();
}, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier4).toNumber());

window.setInterval(function(){
    if (gameData.TimeTiers.Autobuyer.Amount.Tier5 != 0) BuyItem.TimeTiers.Tier5();
}, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier5).toNumber());

window.setInterval(function(){
    if (gameData.TimeTiers.Autobuyer.Amount.Tier6 != 0) BuyItem.TimeTiers.Tier6();
}, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier6).toNumber());

window.setInterval(function(){
    if (gameData.TimeTiers.Autobuyer.Amount.Tier7 != 0) BuyItem.TimeTiers.Tier7();
}, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier7).toNumber());

window.setInterval(function(){
    if (gameData.TimeTiers.Autobuyer.Amount.Tier8 != 0) BuyItem.TimeTiers.Tier8();
}, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier8).toNumber());

window.setInterval(function(){
    if (gameData.TimeTiers.Autobuyer.Amount.Tier9 != 0) BuyItem.TimeTiers.Tier9();
}, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier9).toNumber());

window.setInterval(function(){
    if (gameData.TimeTiers.Autobuyer.Amount.Tier10 != 0) BuyItem.TimeTiers.Tier10();
}, msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier10).toNumber());