class Categorie {

    constructor(unId, unLibelle, uneHeureOuverture, uneHeureFermeture, uneMinutesOuvertures, uneMinutesFermetures){
        this._id = unId;
        this._libelle = unLibelle;
        this._heureOuverture = uneHeureOuverture;
        this._heureFermeture = uneHeureFermeture;
        this._minutesOuvertures = uneMinutesOuvertures;
        this._minutesFermetures = uneMinutesFermetures;
    }

    get libelle(){
        return this._libelle;
    }

    get heureOuverture(){
        return this._heureOuverture;
    }

    get heureFermeture(){
        return this._heureFermeture;
    }

    get minutesOuvertures(){
        return this._minutesOuvertures;
    }

    get minutesFermetures(){
        return this._minutesFermetures;
    }
}