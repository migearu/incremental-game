function WriteToStorage(obj, storeTo)
{
    lzcJSON = LZString.compressToBase64(JSON.stringify(obj));
    localStorage.setItem(storeTo, lzcJSON);
}

function ReadFromStorage(obj)
{
    lzdJSON = LZString.decompressFromBase64(localStorage.getItem(obj));
    Load(lzdJSON)
}

function ReturnSave(str)
{
    return LZString.compressToBase64(JSON.stringify(str));
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
        if ('array' in obj[key] && 'sign' in obj[key]) {
            obj[key] = new OmegaNum(obj[key]);
        }
    });
}