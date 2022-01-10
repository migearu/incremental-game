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
            className: (gameData.TimeTiers.Autobuyer.Amount.Tier1.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier1, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier1)) ? "hover" : "hover disabled",
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
            className: (gameData.TimeTiers.Autobuyer.Amount.Tier2.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier2, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier2)) ? "hover" : "hover disabled",
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
            className: (gameData.TimeTiers.Autobuyer.Amount.Tier3.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier3, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier3)) ? "hover" : "hover disabled",
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
            className: (gameData.TimeTiers.Autobuyer.Amount.Tier4.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier4, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier4)) ? "hover" : "hover disabled",
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
            className: (gameData.TimeTiers.Autobuyer.Amount.Tier5.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier5, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier5)) ? "hover" : "hover disabled",
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
            className: (gameData.TimeTiers.Autobuyer.Amount.Tier6.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier6, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier6)) ? "hover" : "hover disabled",
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
            className: (gameData.TimeTiers.Autobuyer.Amount.Tier7.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier7, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier7)) ? "hover" : "hover disabled",
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
            className: (gameData.TimeTiers.Autobuyer.Amount.Tier8.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier8, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier8)) ? "hover" : "hover disabled",
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
            className: (gameData.TimeTiers.Autobuyer.Amount.Tier9.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier9, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier9)) ? "hover" : "hover disabled",
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
            className: (gameData.TimeTiers.Autobuyer.Amount.Tier10.add(gameData.TimeTiers.Autobuyer.BuyAmount)).lt(upgAutobuyerMax) && gameData.timeParticles.gte(OmegaNum.sumGeometricSeries(gameData.TimeTiers.Autobuyer.BuyAmount, gameData.TimeTiers.Autobuyer.Cost.Tier10, gameData.TimeTiers.Autobuyer.PriceRatio, gameData.TimeTiers.Autobuyer.Amount.Tier10)) ? "hover" : "hover disabled",
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
        }, React.createElement("label", {
            className: "switch matchbtnspacing"
        }, React.createElement("input", {
            type: "checkbox",
            defaultChecked: CheckboxT1AutobuyerChecked,
            id: "CheckboxT1Autobuyer"
        }), React.createElement("span", {
            className: "slider round "
        })), React.createElement("label", {
            className: "switch matchbtnspacing"
        }, React.createElement("input", {
            type: "checkbox",
            defaultChecked: CheckboxT2AutobuyerChecked,
            id: "CheckboxT2Autobuyer"
        }), React.createElement("span", {
            className: "slider round"
        })), React.createElement("label", {
            className: "switch matchbtnspacing"
        }, React.createElement("input", {
            type: "checkbox",
            defaultChecked: CheckboxT3AutobuyerChecked,
            id: "CheckboxT3Autobuyer"
        }), React.createElement("span", {
            className: "slider round"
        })), React.createElement("label", {
            className: "switch matchbtnspacing"
        }, React.createElement("input", {
            type: "checkbox",
            defaultChecked: CheckboxT4AutobuyerChecked,
            id: "CheckboxT4Autobuyer"
        }), React.createElement("span", {
            className: "slider round"
        })), React.createElement("label", {
            className: "switch matchbtnspacing"
        }, React.createElement("input", {
            type: "checkbox",
            defaultChecked: CheckboxT5AutobuyerChecked,
            id: "CheckboxT5Autobuyer"
        }), React.createElement("span", {
            className: "slider round"
        }))),
        React.createElement("div", {
            className: "CT"
        }, TimeTier6AutobuyerReactElement, TimeTier7AutobuyerReactElement, TimeTier8AutobuyerReactElement, TimeTier9AutobuyerReactElement, TimeTier10AutobuyerReactElement),
        React.createElement("div", {
            className: "CT"
        }, React.createElement("label", {
            className: "switch matchbtnspacing"
        }, React.createElement("input", {
            type: "checkbox",
            defaultChecked: CheckboxT6AutobuyerChecked,
            id: "CheckboxT6Autobuyer"
        }), React.createElement("span", {
            className: "slider round "
        })), React.createElement("label", {
            className: "switch matchbtnspacing"
        }, React.createElement("input", {
            type: "checkbox",
            defaultChecked: CheckboxT7AutobuyerChecked,
            id: "CheckboxT7Autobuyer"
        }), React.createElement("span", {
            className: "slider round"
        })), React.createElement("label", {
            className: "switch matchbtnspacing"
        }, React.createElement("input", {
            type: "checkbox",
            defaultChecked: CheckboxT8AutobuyerChecked,
            id: "CheckboxT8Autobuyer"
        }), React.createElement("span", {
            className: "slider round"
        })), React.createElement("label", {
            className: "switch matchbtnspacing"
        }, React.createElement("input", {
            type: "checkbox",
            defaultChecked: CheckboxT9AutobuyerChecked,
            id: "CheckboxT9Autobuyer"
        }), React.createElement("span", {
            className: "slider round"
        })), React.createElement("label", {
            className: "switch matchbtnspacing"
        }, React.createElement("input", {
            type: "checkbox",
            defaultChecked: CheckboxT10AutobuyerChecked,
            id: "CheckboxT10Autobuyer"
        }), React.createElement("span", {
            className: "slider round"
        }))));

        ReactDOM.render(element, document.getElementById('main'));
    }
}, 25)