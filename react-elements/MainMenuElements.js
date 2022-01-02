window.setInterval(function(){
    if (gameData.gameState === "MainMenu")
    {
        var importexport = React.createElement("div", {
            className: "CT"
        }, React.createElement("button", {
            className: "hover",
            onClick: Import
        }, React.createElement("p", {
            className: "nomargin"
        }, "Import")), React.createElement("button", {
            className: "hover",
            onClick: Export
        }, React.createElement("p", {
            className: "nomargin"
        }, "Export")))

        var textareas = React.createElement("div", {
            className: "CT"
        }, React.createElement("textarea", {
            id: "writeTo",
            defaultValue: "",
            rows: "5"
        }), React.createElement("textarea", {
            readOnly: true,
            id: "readFrom",
            defaultValue: "",
            rows: "5"
        }))

        var saveload = React.createElement("div", {
            className: "CT"
        }, React.createElement("button", {
            className: "hover",
            onClick: WriteToStorage
        }, React.createElement("p", {
            className: "nomargin"
        }, "Save")), React.createElement("button", {
            className: "hover",
            onClick: ReadFromStorage
        }, React.createElement("p", {
            className: "nomargin"
        }, "Load")))

        var element = React.createElement("div", null, React.createElement("div", {
            className: "CT"
        }, React.createElement("h1", {
            className: "fivemargin"
        }, "Main Menu")), importexport, textareas, saveload);
        
        ReactDOM.render(element, document.getElementById('main'));
    }
}, 25);