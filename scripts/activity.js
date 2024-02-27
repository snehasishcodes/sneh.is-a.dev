function showSpotifyTab() {
    // display spotify tab
    document.getElementById("activity-spotify-tab").style.display = "block";

    // hide others
    document.getElementById("activity-discord-tab").style.display = "none";
    document.getElementById("activity-vscode-tab").style.display = "none";
}

function showDiscordTab() {
    // display discord tab
    document.getElementById("activity-discord-tab").style.display = "block";

    // hide others
    document.getElementById("activity-spotify-tab").style.display = "none";
    document.getElementById("activity-vscode-tab").style.display = "none";
}

function showVscodeTab() {
    // display vscode tab
    document.getElementById("activity-vscode-tab").style.display = "block";

    // hide others
    document.getElementById("activity-discord-tab").style.display = "none";
    document.getElementById("activity-spotify-tab").style.display = "none";
}