setInterval(function() {
    if (gameData.gameState === "PrestigeMenu")
    {
        var gainText = React.createElement("p", {
            className: "nomargin"
        }, "Gain " + format(TimeCrystalGain(gameData.timeParticles), 5) + " Time Crystals on Time Condensation");

        var PrestigeButton1 = React.createElement("button", {
            className: TimeCrystalGain(gameData.timeParticles).gte(new OmegaNum("1")) ? "hover" : "hover disabled",
            onClick: BuyPrestige.PrestigeTier1
        }, React.createElement("p", {
            className: "nomargin"
        }, "Condense Time"));

        var ButtonsLayer1 = React.createElement("div", {
            className: "CT"
        }, PrestigeButton1);

        var TextLayer1 = React.createElement("div", {
            className: "CT"
        }, gainText);
         
        var element = React.createElement("div", {
        }, TextLayer1, React.createElement("br", null), ButtonsLayer1)
        
        ReactDOM.render(element, document.getElementById('main'));
    }
}, 25)