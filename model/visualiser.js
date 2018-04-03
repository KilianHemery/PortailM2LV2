class salle {

    /** Constructeur*/
    /**
     *Instancie une nouvelle tache
     * @param {int} unid - id de la tache
     * @param {string} unLib  - libelle de la tache
     */
    constructor(unId, unLib, uneCapacite, uneCategorie) {
        this._id = unId;
        this._libelle = unLib;
        this._capacite = uneCapacite;
        this._categorie =  uneCategorie;
    }
    get libelle(){
        return this._libelle;
    }
    get capacite(){
        return this._capacite;
    }
    get categorie(){
        return this._categorie;
    }
    get id(){
        return this._id;
    }
}

class Categorie {

    /** Constructeur*/
    /**
     *Instancie une nouvelle tache
     * @param {int} unid - id de la tache
     * @param {string} unLib  - libelle de la tache
     */
    constructor(unIdCat, unLibCat, uneHeureOuverture, uneHeureFermeture, uneMinutesOuvertures, uneMinutesFermetures) {
        this._id = unIdCat;
        this._libellecat = unLibCat;
        this._heureouverture = uneHeureOuverture;
        this._heurefermeture =  uneHeureFermeture;
        this._minutesouvertures =  uneMinutesOuvertures;
        this._minutesfermetures =  uneMinutesFermetures;
    }
    get libellecat(){
        return this._libellecat;
    }
    get heureouverture(){
        return this._heureouverture;
    }
    get heurefermeture(){
        return this._heurefermeture;
    }
    get minutesouvertures(){
        return this._minutesouvertures;
    }
    get minutesfermetures(){
        return this._minutesfermetures;
    }
    get id(){
        return this._id;
    }
}

module.exports = salle;