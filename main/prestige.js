var BuyPrestige = {
    PrestigeTier1: function() {
        if (TimeCrystalGain(gameData.timeParticles).gte(new OmegaNum("1")))
        {
            var tempTC = gameData.timeCrystals.add(TimeCrystalGain(gameData.timeParticles));
            var tempGS = gameData.gameState.repeat(1);
            gameData = _.cloneDeep(StarterGameData);
            if (!gameData.Prestige.HasFirstTierPrestige) gameData.Prestige.HasFirstTierPrestige = true;
            gameData.timeCrystals = tempTC;
            gameData.gameState = tempGS;
        }
    }
}
function TimeCrystalGain(tp) {
    return (tp.div(OmegaNum("1e15"))).pow(OmegaNum("1").div(OmegaNum("3")));
}