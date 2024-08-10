/* VARIABLEN UND KONSTANTEN */

// Spieler
let playersList = JSON.parse(localStorage.getItem('playersList')) || {};
let currentPlayer = JSON.parse(localStorage.getItem('currentPlayer')) || '';
let currentRandInt = 1;


/* KLASSEN */

//Spieler
class player {
    constructor(name) {
        this.name = name;
        this.hoheHausnummer = 0;
        this.niedrigeHausnummer = 0;
        this.schussInDieVollen = 0;
        this.plusMinusMal = 0;
        this.zahlNachDemKomma = 0;
        this.siebzehnUndVier = 0;
        this.highscore = 0;
        this.avatarNumber = currentRandInt;
    }
    toString() { return this.name; }

    getHoheHausnummer() { return this.hoheHausnummer; }
    getNiedrigeHausnummer() { return this.niedrigeHausnummer; }
    getSchussInDieVollen() { return this.schussInDieVollen; }
    getPlusMinusMal() { return this.plusMinusMal; }
    getZahlNachDemKomma() { return this.zahlNachDemKomma; }

    getHighscore() { return this.highscore; }
    getAvatarNumber() { return this.avatarNumber; }
}


/* FUNKTIONEN */

// Spieler hinzufügen
function addPlayer() {
    let newPlayersName = document.querySelector('#spielername').value;
    if(newPlayersName) {
        let newPlayer = new player(newPlayersName);
        playersList[newPlayersName]=newPlayer;
    }
    document.querySelector('#spielername').value = "";
    localStorage.setItem('playersList', JSON.stringify(playersList));
    location.reload();
}

function processHoheHausnummer() {
    let zug1 = document.querySelector('#zug1').value;
    let zug2 = document.querySelector('#zug2').value;
    let zug3 = document.querySelector('#zug3').value;
    if (zug1 == 10) {
        zug1 = '9';
    }
    if (zug2 == 10) {
        zug2 = '9';
    }
    if (zug3 == 10) {
        zug3 = '9';
    }
    let result = Math.round((zug1 + zug2 + zug3)/999*1000);
    let playersList = loadPlayers();
    playersList[currentPlayer].hoheHausnummer = result;
    playersList[currentPlayer].highscore += result;
    localStorage.setItem('playersList', JSON.stringify(playersList));
}

function processNiedrigeHausnummer() {
    let zug1 = document.querySelector('#zug1').value;
    let zug2 = document.querySelector('#zug2').value;
    let zug3 = document.querySelector('#zug3').value;
    if (zug1 == 10 || zug1 == 0) {
        zug1 = 9;
    }
    if (zug2 == 10 || zug2 == 0) {
        zug2 = 9;
    }
    if (zug3 == 10 || zug3 == 0) {
        zug3 = 9;
    }
    let result = Math.round((1000-(zug1 + zug2 + zug3))/889*1000);
    let playersList = loadPlayers();
    playersList[currentPlayer].niedrigeHausnummer = result;
    playersList[currentPlayer].highscore += result;
    localStorage.setItem('playersList', JSON.stringify(playersList));
}

function processSchussInDieVollen() {
    let zug1 = document.querySelector('#zug1').value;
    let zug2 = document.querySelector('#zug2').value;
    let zug3 = document.querySelector('#zug3').value;
    let zug4 = document.querySelector('#zug4').value;
    let zug5 = document.querySelector('#zug5').value;
    if (zug1 == 10 || zug1 == 7 || zug1 == 5) {
        zug1 = 0;
    }
    if (zug2 == 10 || zug2 == 7 || zug2 == 5) {
        zug2 = 0;
    }
    if (zug3 == 10 || zug3 == 7 || zug3 == 5) {
        zug3 = 0;
    }
    if (zug4 == 10 || zug4 == 7 || zug4 == 5) {
        zug4 = 0;
    }
    if (zug5 == 10 || zug5 == 7 || zug5 == 5) {
        zug5 = 0;
    }
    let result = Number.parseInt(zug1) + Number.parseInt(zug2) + Number.parseInt(zug3) + Number.parseInt(zug4) + Number.parseInt(zug5);
    result = Math.round(result/45*1000);
    let playersList = loadPlayers();
    playersList[currentPlayer].schussInDieVollen = result;
    playersList[currentPlayer].highscore += result;
    localStorage.setItem('playersList', JSON.stringify(playersList));
}

function processPlusMinusMal() {
    let zug1 = document.querySelector('#zug1').value;
    let zug2 = document.querySelector('#zug2').value;
    let zug3 = document.querySelector('#zug3').value;
    let zug4 = document.querySelector('#zug4').value;
    if (zug3 == 0) {
        zug3 = 9;
    }
    let result = ((Number.parseInt(zug1) + Number.parseInt(zug2) - Number.parseInt(zug3)) * Number.parseInt(zug4));
    result = Math.round(result/190*1000);
    let playersList = loadPlayers();
    playersList[currentPlayer].plusMinusMal = result;
    playersList[currentPlayer].highscore += result;
    localStorage.setItem('playersList', JSON.stringify(playersList));
}

function processZahlNachDemKomma() {
    let zug1 = document.querySelector('#zug1').value;
    let zug2 = document.querySelector('#zug2').value;
    let zug3 = document.querySelector('#zug3').value;
    let zug4 = document.querySelector('#zug4').value;
    let zug5 = document.querySelector('#zug5').value;
    let result = (Number.parseInt(zug1) + Number.parseInt(zug2) + Number.parseInt(zug3) + Number.parseInt(zug4) + Number.parseInt(zug5))/50*1000;
    result = Math.round(result);
    let playersList = loadPlayers();
    playersList[currentPlayer].zahlNachDemKomma = result;
    playersList[currentPlayer].highscore += result;
    localStorage.setItem('playersList', JSON.stringify(playersList));
}

function processSiebzehnUndVier() {
    let zug1 = document.querySelector('#zug1').value;
    let zug2 = document.querySelector('#zug2').value;
    let zug3 = document.querySelector('#zug3').value;
    let zug4 = document.querySelector('#zug4').value;
    let zug5 = document.querySelector('#zug5').value;
    if (!zug3) {
        zug3 = 0;
    }
    if (!zug4) {
        zug4 = 0;
    }
    if (!zug5) {
        zug5 = 0;
    }
    let result = (Number.parseInt(zug1) + Number.parseInt(zug2) + Number.parseInt(zug3) + Number.parseInt(zug4) + Number.parseInt(zug5));
    result = Math.round(result/21*1000);
    let playersList = loadPlayers();
    playersList[currentPlayer].siebzehnUndVier = result;
    playersList[currentPlayer].highscore += result;
    localStorage.setItem('playersList', JSON.stringify(playersList));
}

function resetAll() {
    let userResponse = confirm('Daten unwiderruflich löschen?');
    if (userResponse){
        localStorage.removeItem('playersList');
        localStorage.removeItem('currentPlayer');
        location.reload();
    }
}

/* HTML KOMPONENTEN GENERIEREN */

// Home
function setUpHome() {
    let players = JSON.parse(localStorage.getItem('playersList'));
    if(players) {
        // Neuen Spieler anlegen - Button
        document.querySelector('#neuenSpielerAnlegenButton').setAttribute('class', 'card-button button-secondary');
        document.querySelector('#neuenSpielerAnlegenButton > img').setAttribute('src', '../01_Assets//02_Icons/plus_dark.svg');
        // Spiel starten - Button
        document.querySelector('#spielStartenButton').setAttribute('class', 'card-button button-primary');
        document.querySelector('#spielStartenButton > img').setAttribute('src', '../01_Assets//02_Icons/arrow-right-short_light.svg');
        // Highscore - Button
        document.querySelector('#highscoreButton').setAttribute('class', 'card-button button-secondary');
        document.querySelector('#highscoreButton > img').setAttribute('src', '../01_Assets//02_Icons/person_dark.svg');
    } else {
        // Neuen Spieler anlegen - Button
        document.querySelector('#neuenSpielerAnlegenButton').setAttribute('class', 'card-button button-primary');
        document.querySelector('#neuenSpielerAnlegenButton > img').setAttribute('src', '../01_Assets//02_Icons/plus_light.svg');
        // Spiel starten - Button
        document.querySelector('#spielStartenButton').setAttribute('class', 'card-button button-disabled');
        document.querySelector('#spielStartenButton > img').setAttribute('src', '../01_Assets//02_Icons/arrow-right-short_disabled.svg');
        // Highscore - Button
        document.querySelector('#highscoreButton').setAttribute('class', 'card-button button-disabled');
        document.querySelector('#highscoreButton > img').setAttribute('src', '../01_Assets//02_Icons/person_disabled.svg');
    }
}

// Spieler hinzufuegen
function setUpAddPlayer(){
    currentRandInt = getRandomInt();
    document.querySelector('#avatarImg').setAttribute('src', `../01_Assets/01_Avatare/${currentRandInt}.png`);
}

// Spiel starten
function setUpSpielStarten() {
    let players = JSON.parse(localStorage.getItem('playersList'));
    if(!players) {
        document.querySelector('#overviewSpiele').innerHTML = `  <div class="card game-card">
                                                    <a href="./neuerSpieler.html">
                                                        <h3>Neue Spieler anlegen</h3>
                                                    </a>
                                                    <img src="../01_Assets//02_Icons/chevron-right.svg" alt="chevron right">
                                                </div>`;
    }
}

// Highscore
function setUpHighscore() {
    playersList = loadPlayers();
    let allPlayers = Object.keys(playersList);
    if(allPlayers.length!=0) {
        let result = ``;
        for (let key of allPlayers) {
            let player = playersList[key];
            result += ` <div class="players-card card">
                            <img src="../01_Assets/01_Avatare/${player.getAvatarNumber()}.png" alt="Avatar" width="50">
                            <div class="players-copy">
                                <h3>${player.toString()}</h3>
                                <p>${player.getHighscore()} Pkt.</p>
                            </div>
                        </div>`;
        }
        document.querySelector('#highscoreOverview').innerHTML = result;
    }
}

// Wahl der Spieler
function setUpPlayersZahlNachDemKomma() {
    playersList = loadPlayers();
    let allPlayers = Object.keys(playersList);
    let result = ``;
    for (let key of allPlayers) {
        let player = playersList[key];
        result += ` <a href="../../Spiele/zahlNachDemKomma.html" class="card game-card" onclick="setCurrentPlayer('${player.toString()}')">
                        <h3>${player.toString()}</h3>
                        <img src="../../../01_Assets/02_Icons/chevron-right.svg" alt="chevron right">
                    </a>`;
    }
    document.querySelector('#playersOverview').innerHTML = result;
}

function setUpPlayersHoheHausnummer() {
    playersList = loadPlayers();
    let allPlayers = Object.keys(playersList);
    let result = ``;
    for (let key of allPlayers) {
        let player = playersList[key];
        result += ` <a href="../hoheHausnummer.html" class="card game-card" onclick="setCurrentPlayer('${player.toString()}')">
                        <h3>${player.toString()}</h3>
                        <img src="../../../01_Assets/02_Icons/chevron-right.svg" alt="chevron right">
                    </a>`;
    }
    document.querySelector('#playersOverview').innerHTML = result;
}

function setUpPlayersNiedrigeHausnummer() {
    playersList = loadPlayers();
    let allPlayers = Object.keys(playersList);
    let result = ``;
    for (let key of allPlayers) {
        let player = playersList[key];
        result += ` <a href="../niedrigeHausnummer.html" class="card game-card" onclick="setCurrentPlayer('${player.toString()}')">
                        <h3>${player.toString()}</h3>
                        <img src="../../../01_Assets/02_Icons/chevron-right.svg" alt="chevron right">
                    </a>`;
    }
    document.querySelector('#playersOverview').innerHTML = result;
}

function setUpPlayersSchussInDieVollen() {
    playersList = loadPlayers();
    let allPlayers = Object.keys(playersList);
    let result = ``;
    for (let key of allPlayers) {
        let player = playersList[key];
        result += ` <a href="../../Spiele/fuenfSchussInDieVollen.html" class="card game-card" onclick="setCurrentPlayer('${player.toString()}')">
                        <h3>${player.toString()}</h3>
                        <img src="../../../01_Assets/02_Icons/chevron-right.svg" alt="chevron right">
                    </a>`;
    }
    document.querySelector('#playersOverview').innerHTML = result;
}

function setUpPlayersPlusMinusMal() {
    playersList = loadPlayers();
    let allPlayers = Object.keys(playersList);
    let result = ``;
    for (let key of allPlayers) {
        let player = playersList[key];
        result += ` <a href="../../Spiele/plusMinusMal.html" class="card game-card" onclick="setCurrentPlayer('${player.toString()}')">
                        <h3>${player.toString()}</h3>
                        <img src="../../../01_Assets/02_Icons/chevron-right.svg" alt="chevron right">
                    </a>`;
    }
    document.querySelector('#playersOverview').innerHTML = result;
}

function setUpPlayersSiebzehnUndVier() {
    playersList = loadPlayers();
    let allPlayers = Object.keys(playersList);
    let result = ``;
    for (let key of allPlayers) {
        let player = playersList[key];
        result += ` <a href="../../Spiele/siebzehnUndVier.html" class="card game-card" onclick="setCurrentPlayer('${player.toString()}')">
                        <h3>${player.toString()}</h3>
                        <img src="../../../01_Assets/02_Icons/chevron-right.svg" alt="chevron right">
                    </a>`;
    }
    document.querySelector('#playersOverview').innerHTML = result;
}

// Spielzüge eintragen
function inputScores() {
    playersList = loadPlayers();
    let player = playersList[currentPlayer];
    document.querySelector('#individualAvatar').setAttribute('src', `../../01_Assets/01_Avatare/${player.getAvatarNumber()}.png`);
    document.querySelector('#playersName').innerHTML = currentPlayer;
}


/* SONSTIGE HILFSFUNKTIONEN */

// Player laden und in Instanzen wandeln
function loadPlayers() {
    let storedPlayers = JSON.parse(localStorage.getItem('playersList')) || {};
    let playersList = {};
    for (let key in storedPlayers) {
        let playerData = storedPlayers[key];
        playersList[key] = Object.assign(new player(), playerData);
    }
    return playersList;
}

// Zustandsbehaftung Spielerwahl
function setCurrentPlayer(name) {
    currentPlayer = name;
    localStorage.setItem('currentPlayer', JSON.stringify(currentPlayer));
}

// Zufallszahl 
function getRandomInt(){
    let min = 1;
    let max = 20;
    return Math.floor(Math.random() * ((max+1)-min)+min);
}