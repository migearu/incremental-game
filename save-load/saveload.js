function WriteToStorage()
{
    lzcJSON = LZString.compressToBase64(JSON.stringify(gameData));
    localStorage.setItem("chronostasis-save", lzcJSON);
}

function ReadFromStorage()
{
    lzdJSON = LZString.decompressFromBase64(localStorage.getItem("chronostasis-save"));
    Load(lzdJSON)
}

function Load(str) {
    var stg = JSON.parse(str);
    if (stg != null)
    {
        LoadHelper(stg);
        gameData = stg;
    };
}

function LoadHelper(obj)
{
    Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] === 'object' && !('array' in obj[key] && 'sign' in obj[key])) {
            return LoadHelper(obj[key]);
        }
        if (typeof obj[key] === 'object' && 'array' in obj[key] && 'sign' in obj[key]) {
            obj[key] = new OmegaNum(obj[key]);
        }
    });
}

function Import()
{
    obj = document.getElementById("writeTo").value
    lzdJSON = LZString.decompressFromBase64(obj);
    try {
        Load(lzdJSON)
        alert("Save has been imported!");
    } catch (e) {
        alert("Save may be corrupted.");
    }
}

function Export()
{
    document.getElementById("readFrom").value = LZString.compressToBase64(JSON.stringify(gameData));
    alert("Save has been exported!");
}

setInterval(() => {
    WriteToStorage(gameData);
}, 30000);