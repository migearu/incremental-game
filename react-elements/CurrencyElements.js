setInterval(function() {
    var TimeParticleRender = React.createElement("div", null, React.createElement("h1", {
        className: "CT fivemargin",
        id: "TPObject"
    }, format(gameData.timeParticles, 5)), React.createElement("p", {
        className: "CT fivemargin"
    }, "Time Particles"));

    var TimeCrystalRender = gameData.Prestige.HasFirstTierPrestige ?
    React.createElement("div", null, React.createElement("h1", {
        className: "CT fivemargin",
        id: "TPObject"
    }, format(gameData.timeCrystals, 5)), React.createElement("p", {
        className: "CT fivemargin"
    }, "Time Crystals")) : React.createElement("div", null);

    ReactDOM.render(TimeParticleRender, document.getElementById('FullTPObject'));
    ReactDOM.render(TimeCrystalRender, document.getElementById('FullTCObject'));
}, 25)