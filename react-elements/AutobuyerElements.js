var TimeTier1AutobuyerReactElement;
var TimeTier2AutobuyerReactElement;
var TimeTier3AutobuyerReactElement;
var TimeTier4AutobuyerReactElement;
var TimeTier5AutobuyerReactElement;
var TimeTier6AutobuyerReactElement;
var TimeTier7AutobuyerReactElement;
var TimeTier8AutobuyerReactElement;
var TimeTier9AutobuyerReactElement;
var TimeTier10AutobuyerReactElement;
setInterval(function() {
    if (gameData.gameState === "AutobuyerMenu")
    {
        var TimeTier1AutobuyerReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyAutobuyer.TimeTiers.Tier1
        }, React.createElement("p", {
            className: "nomargin"
        }, "Autobuyer"), React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T1"), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT1Msec"
        }, "Freq: " + msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier1) + "ms"), React.createElement("p", {
            className: "nomargin",
            id: "TT1AutobuyerCost"
        }, "Cost: " + format(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier1, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier1), 5)));


        /*----------------------------------------SEPARATOR----------------------------------------*/


        var TimeTier2AutobuyerReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyAutobuyer.TimeTiers.Tier2
        }, React.createElement("p", {
            className: "nomargin"
        }, "Autobuyer"), React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T2"), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT1Msec"
        }, "Freq: " + msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier2) + "ms"), React.createElement("p", {
            className: "nomargin",
            id: "TT1AutobuyerCost"
        }, "Cost: " + format(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier2, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier2), 5)));


        /*----------------------------------------SEPARATOR----------------------------------------*/


        var TimeTier3AutobuyerReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyAutobuyer.TimeTiers.Tier3
        }, React.createElement("p", {
            className: "nomargin"
        }, "Autobuyer"), React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T3"), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT1Msec"
        }, "Freq: " + msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier3) + "ms"), React.createElement("p", {
            className: "nomargin",
            id: "TT1AutobuyerCost"
        }, "Cost: " + format(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier3, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier3), 5)));
        

        /*----------------------------------------SEPARATOR----------------------------------------*/


        var TimeTier4AutobuyerReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyAutobuyer.TimeTiers.Tier4
        }, React.createElement("p", {
            className: "nomargin"
        }, "Autobuyer"), React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T4"), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT1Msec"
        }, "Freq: " + msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier4) + "ms"), React.createElement("p", {
            className: "nomargin",
            id: "TT1AutobuyerCost"
        }, "Cost: " + format(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier4, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier4), 5)));


        /*----------------------------------------SEPARATOR----------------------------------------*/


        var TimeTier5AutobuyerReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyAutobuyer.TimeTiers.Tier5
        }, React.createElement("p", {
            className: "nomargin"
        }, "Autobuyer"), React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T5"), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT1Msec"
        }, "Freq: " + msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier5) + "ms"), React.createElement("p", {
            className: "nomargin",
            id: "TT1AutobuyerCost"
        }, "Cost: " + format(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier5, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier5), 5)));


        /*----------------------------------------SEPARATOR----------------------------------------*/


        var TimeTier6AutobuyerReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyAutobuyer.TimeTiers.Tier6
        }, React.createElement("p", {
            className: "nomargin"
        }, "Autobuyer"), React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T6"), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT1Msec"
        }, "Freq: " + msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier6) + "ms"), React.createElement("p", {
            className: "nomargin",
            id: "TT1AutobuyerCost"
        }, "Cost: " + format(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier6, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier6), 5)));


        /*----------------------------------------SEPARATOR----------------------------------------*/


        var TimeTier7AutobuyerReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyAutobuyer.TimeTiers.Tier7
        }, React.createElement("p", {
            className: "nomargin"
        }, "Autobuyer"), React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T7"), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT1Msec"
        }, "Freq: " + msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier7) + "ms"), React.createElement("p", {
            className: "nomargin",
            id: "TT1AutobuyerCost"
        }, "Cost: " + format(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier7, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier7), 5)));
        

        /*----------------------------------------SEPARATOR----------------------------------------*/


        var TimeTier8AutobuyerReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyAutobuyer.TimeTiers.Tier8
        }, React.createElement("p", {
            className: "nomargin"
        }, "Autobuyer"), React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T8"), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT1Msec"
        }, "Freq: " + msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier8) + "ms"), React.createElement("p", {
            className: "nomargin",
            id: "TT1AutobuyerCost"
        }, "Cost: " + format(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier8, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier8), 5)));
        

        /*----------------------------------------SEPARATOR----------------------------------------*/


        var TimeTier9AutobuyerReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyAutobuyer.TimeTiers.Tier9
        }, React.createElement("p", {
            className: "nomargin"
        }, "Autobuyer"), React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T9"), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT1Msec"
        }, "Freq: " + msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier9) + "ms"), React.createElement("p", {
            className: "nomargin",
            id: "TT1AutobuyerCost"
        }, "Cost: " + format(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier9, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier9), 5)));


        /*----------------------------------------SEPARATOR----------------------------------------*/


        var TimeTier10AutobuyerReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyAutobuyer.TimeTiers.Tier10
        }, React.createElement("p", {
            className: "nomargin"
        }, "Autobuyer"), React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T10"), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT1Msec"
        }, "Freq: " + msec(new OmegaNum(0.9), gameData.TimeTiers.Autobuyer.Amount.Tier10) + "ms"), React.createElement("p", {
            className: "nomargin",
            id: "TT1AutobuyerCost"
        }, "Cost: " + format(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier10, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier10), 5)));

        var element = React.createElement("div", null, 
        React.createElement("div", {
            className: "CT"
        }, TimeTier1AutobuyerReactElement, TimeTier2AutobuyerReactElement, TimeTier3AutobuyerReactElement, TimeTier4AutobuyerReactElement, TimeTier5AutobuyerReactElement),
        React.createElement("div", {
            className: "CT"
        }, TimeTier6AutobuyerReactElement, TimeTier7AutobuyerReactElement, TimeTier8AutobuyerReactElement, TimeTier9AutobuyerReactElement, TimeTier10AutobuyerReactElement));

        ReactDOM.render(element, document.getElementById('main'));
    }
}, 25)