

function getDateLocale(sNameHTML){
    var oDate = new Date();

    var nAnnee = oDate.getFullYear();
    var nMois = oDate.getMonth();
    var aMois = new Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre')
    aMois[nMois];

    var nDateJour = oDate.getDate();
    var nJour = oDate.getDay();
    var aJours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
    aJours[nJour];

    var nHeures = oDate.getHours();
    if (nHeures < 10)
        nHeures = "0" + nHeures;

    var nMinutes = oDate.getMinutes();
    if (nMinutes < 10)
        nMinutes = "0" + nMinutes;

    var nSecondes = oDate.getSeconds();
    if (nSecondes < 10)
        nSecondes = "0" + nSecondes;

    var sTxtDate = aJours[nJour] + ' ' + nDateJour + ' ' + aMois[nMois] + ' ' + nAnnee + '<br>' + nHeures + ':' + nMinutes + ':' + nSecondes;
    document.getElementById('horloge').innerHTML = sTxtDate;

}