window.onload = function() {
document.getElementById("SettingsOpenButton").onclick = function(){
    document.getElementById("Settings").style = "display: block; width: 75vw; height: 75vh; position: absolute; top: 12.5vh; left: 12.5vw; background-color: #eeeeee; padding: min(1vw,1vh); z-index: 9999;"
}

document.getElementById("SettingsCloseButton").onclick = function(){
    document.getElementById("Settings").style = "display: none;"
}

document.getElementById("SettingsSaveButton").onclick = function(){
    document.getElementById("Title").innerText = document.getElementById("SettingsTitle").value;
    document.getElementById("Favicon").href = document.getElementById("SettingsFavicon").value;
}

document.getElementById("ToolHTMLRenderer").onclick = function(){
document.getElementById("Tool").src = "tools/HTMLRenderer.html";};};
