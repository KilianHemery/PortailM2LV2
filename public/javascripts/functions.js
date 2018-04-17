

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

function validateForm(){
    var nom = document.forms["form"]["nom"].value;
    var err = 0;
    var errNom = document.getElementById('errNom');

    // Nom : Entre 2 et 20 caractères
    if ( nom.length < 2 || nom.length >  20 ){
        err+=1;
        errNom.textContent = 'Le nom doit être compris entre 2 et 20 caractères.';
        errNom.style.color ='red';
        
    }

    // Nom : Pas de chiffres
    var exp = /^[a-zA-Z\s][^!?*_=+%£#§]+$/;
    //https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_r%C3%A9guli%C3%A8res
    //http://regexpstudio.com/fr/regexp_syntax.html

    var errNom2 = document.getElementById('errNom2');

    if (!nom.match(exp)){
        err+=1;
        errNom2.textContent = 'Le nom ne doit pas comporter des chiffres ou certains caractères spéciaux tel que ! ? # * £ .';
        errNom2.style.color ='red';
    }

    var tel = document.forms["form"]["tel"].value;
/*
    //Tel : Composé de 10 chiffres.
    if ( tel.length != 10 ){
        var errTel = document.getElementById('errTel');
        err+=1;
        errTel.textContent = 'Le numero doit être composé de 10 chiffres.';
        errTel.style.color ='red';
    }
*/
    // Tel : Uniquement en chiffre
    var exp2 = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;

    //isNaN(tel) == true
    if (!tel.match(exp2)){
        err+=1;
        //alert(isNaN(tel));
        var errTel2 = document.getElementById('errTel2');
        errTel2.textContent = 'Le numero doit être composé de 10 chiffres (ou de 11 si il commence par +33).';
        errTel2.style.color ='red';
    }

    // Date :
    var datedebut = document.forms["form"]["datedebut"].value;
    var datefin = document.forms["form"]["datefin"].value;

    var var1 = new Boolean(false);
    // Datedebut situé après la date de fin
    if ( datedebut > datefin){
        err+=1;
        var var1 = true;
        var errDate = document.getElementById('errDate');
        errDate.textContent = 'La date de fin ne peut pas être avant la date de début.';
        errDate.style.color ='red';
    }

    // Date :
    var dateToday =  new Date();
    var dateYear = dateToday.getFullYear();
    var dateMonth = (dateToday.getMonth())+1;
    var dateDay = dateToday.getDate();

    if(dateMonth < 10){

        dateMonth = '0'+dateMonth;
    }
    if(dateDay < 10){

        dateDay = '0'+dateDay;
    }

    dateToday =  dateYear+"-"+dateMonth+"-"+dateDay;

    if(datedebut < dateToday || datefin < dateToday){
        err+=1;
        //alert(datedebut);
        //alert(datefin);
        var errDate2 = document.getElementById('errDate2');
        if(var1 == true){
            var1 == false;
        }
        else{
            errDate2.textContent = 'La réservation ne peut pas être effectué à une date antérieur à aujourdhui.';
            errDate2.style.color ='red';
        }

        //alert(dateToday);

    }

    var1==false;

    if(err != 0){
        return false;

    }
}
function ResetPage(){
    //Efface les messages d'erreurs en appuant sur le bouton 'Annuler'

    var errNom = document.getElementById('errNom');
    var errNom2 = document.getElementById('errNom2');
    var errTel = document.getElementById('errTel');
    var errTel2 = document.getElementById('errTel2');
    var errDate = document.getElementById('errDate');
    var errDate2 = document.getElementById('errDate2');

    errNom.textContent = '';
    errNom2.textContent = '';
    errTel.textContent = '';
    errTel2.textContent = '';
    errDate.textContent = '';
    errDate2.textContent = '';


}