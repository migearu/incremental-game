var TimeTier1BasicReactElement;
var TimeTier2BasicReactElement;
var TimeTier3BasicReactElement;
var TimeTier4BasicReactElement;
var TimeTier5BasicReactElement;
var TimeTier6BasicReactElement;
var TimeTier7BasicReactElement;
var TimeTier8BasicReactElement;
var TimeTier9BasicReactElement;
var TimeTier10BasicReactElement;
window.setInterval(function(){
    if (gameData.gameState === "TimeTierMenu")
    {
        TimeTier1BasicReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyItem.TimeTiers.Tier1
        }, React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T1"), React.createElement("p", {
            className: "nomargin"
        }, "Powerhouse."), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT1Mult"
        }, "\xD7" + format2dcm(TT1M)), React.createElement("p", {
            className: "nomargin",
            id: "TT1Cost"
        }, "Cost: " + format(TT1C, 5)), React.createElement("p", {
            className: "nomargin",
            id: "TT1Amnt"
        }, "Amount: " + format(gameData.TimeTiers.Effective.Tier1, 5)));


        /*----------------------------------------SEPARATOR----------------------------------------*/


        TimeTier2BasicReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyItem.TimeTiers.Tier2
        }, React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T2"), React.createElement("p", {
            className: "nomargin"
        }, "This works?"), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT2Mult"
        }, "\xD7" + format2dcm(TT2M)), React.createElement("p", {
            className: "nomargin",
            id: "TT2Cost"
        }, "Cost: " + format(TT2C, 5)), React.createElement("p", {
            className: "nomargin",
            id: "TT2Amnt"
        }, "Amount: " + format(gameData.TimeTiers.Effective.Tier2, 5)));


        /*----------------------------------------SEPARATOR----------------------------------------*/


        TimeTier3BasicReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyItem.TimeTiers.Tier3
        }, React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T3"), React.createElement("p", {
            className: "nomargin"
        }, "There are more."), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT3Mult"
        }, "\xD7" + format2dcm(TT3M)), React.createElement("p", {
            className: "nomargin",
            id: "TT3Cost"
        }, "Cost: " + format(TT3C, 5)), React.createElement("p", {
            className: "nomargin",
            id: "TT3Amnt"
        }, "Amount: " + format(gameData.TimeTiers.Effective.Tier3, 5)));


        /*----------------------------------------SEPARATOR----------------------------------------*/


        TimeTier4BasicReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyItem.TimeTiers.Tier4
        }, React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T4"), React.createElement("p", {
            className: "nomargin"
        }, "4th Generator"), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT4Mult"
        }, "\xD7" + format2dcm(TT4M)), React.createElement("p", {
            className: "nomargin",
            id: "TT4Cost"
        }, "Cost: " + format(TT4C, 5)), React.createElement("p", {
            className: "nomargin",
            id: "TT4Amnt"
        }, "Amount: " + format(gameData.TimeTiers.Effective.Tier4, 5)));


        /*----------------------------------------SEPARATOR----------------------------------------*/


        TimeTier5BasicReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyItem.TimeTiers.Tier5
        }, React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T5"), React.createElement("p", {
            className: "nomargin"
        }, "1, 2, 3, 4, 5."), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT5Mult"
        }, "\xD7" + format2dcm(TT5M)), React.createElement("p", {
            className: "nomargin",
            id: "TT5Cost"
        }, "Cost: " + format(TT5C, 5)), React.createElement("p", {
            className: "nomargin",
            id: "TT5Amnt"
        }, "Amount: " + format(gameData.TimeTiers.Effective.Tier5, 5)));


        /*----------------------------------------SEPARATOR----------------------------------------*/


        TimeTier6BasicReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyItem.TimeTiers.Tier6
        }, React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T6"), React.createElement("p", {
            className: "nomargin"
        }, "Congrats, Tier 6."), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT6Mult"
        }, "\xD7" + format2dcm(TT6M)), React.createElement("p", {
            className: "nomargin",
            id: "TT6Cost"
        }, "Cost: " + format(TT6C, 5)), React.createElement("p", {
            className: "nomargin",
            id: "TT6Amnt"
        }, "Amount: " + format(gameData.TimeTiers.Effective.Tier6, 5)));


        /*----------------------------------------SEPARATOR----------------------------------------*/


        TimeTier7BasicReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyItem.TimeTiers.Tier7
        }, React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T7"), React.createElement("p", {
            className: "nomargin"
        }, "Lucky Number."), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT7Mult"
        }, "\xD7" + format2dcm(TT7M)), React.createElement("p", {
            className: "nomargin",
            id: "TT7Cost"
        }, "Cost: " + format(TT7C, 5)), React.createElement("p", {
            className: "nomargin",
            id: "TT7Amnt"
        }, "Amount: " + format(gameData.TimeTiers.Effective.Tier7, 5)));


        /*----------------------------------------SEPARATOR----------------------------------------*/


        TimeTier8BasicReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyItem.TimeTiers.Tier8
        }, React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T8"), React.createElement("p", {
            className: "nomargin"
        }, "101 105 103 104 116"), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT8Mult"
        }, "\xD7" + format2dcm(TT8M)), React.createElement("p", {
            className: "nomargin",
            id: "TT8Cost"
        }, "Cost: " + format(TT8C, 5)), React.createElement("p", {
            className: "nomargin",
            id: "TT8Amnt"
        }, "Amount: " + format(gameData.TimeTiers.Effective.Tier8, 5)));


        /*----------------------------------------SEPARATOR----------------------------------------*/


        TimeTier9BasicReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyItem.TimeTiers.Tier9
        }, React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T9"), React.createElement("p", {
            className: "nomargin"
        }, "999999999"), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT9Mult"
        }, "\xD7" + format2dcm(TT9M)), React.createElement("p", {
            className: "nomargin",
            id: "TT9Cost"
        }, "Cost: " + format(TT9C, 5)), React.createElement("p", {
            className: "nomargin",
            id: "TT9Amnt"
        }, "Amount: " + format(gameData.TimeTiers.Effective.Tier9, 5)));


        /*----------------------------------------SEPARATOR----------------------------------------*/


        TimeTier10BasicReactElement = React.createElement("button", {
            className: "hover",
            onClick: BuyItem.TimeTiers.Tier10
        }, React.createElement("p", {
            className: "nomargin"
        }, "Time Generator T10"), React.createElement("p", {
            className: "nomargin"
        }, "Super Generator."), React.createElement("br", null), React.createElement("p", {
            className: "nomargin",
            id: "TT10Mult"
        }, "\xD7" + format2dcm(TT10M)), React.createElement("p", {
            className: "nomargin",
            id: "TT10Cost"
        }, "Cost: " + format(TT10C, 5)), React.createElement("p", {
            className: "nomargin",
            id: "TT10Amnt"
        }, "Amount: " + format(gameData.TimeTiers.Effective.Tier10, 5)));
        

        /*----------------------------------------SEPARATOR----------------------------------------*/


        var element = 
        React.createElement("div", null, React.createElement("div", {
            className: "CT",
            id: "gen1to5"
        }, TimeTier1BasicReactElement, TimeTier2BasicReactElement, TimeTier3BasicReactElement, TimeTier4BasicReactElement, TimeTier5BasicReactElement),
        React.createElement("div", {
            className: "CT",
            id: "gen5to10"
        }, TimeTier6BasicReactElement, TimeTier7BasicReactElement, TimeTier8BasicReactElement, TimeTier9BasicReactElement, TimeTier10BasicReactElement),
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
}, 25);
