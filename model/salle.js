class Salle {

    constructor(unId, unLibelle, uneCapacite){
        this._id = unId;
        this._libelle = unLibelle;
        this._capacite = uneCapacite;
    }

    get libelle(){
        return this._libelle
    }

    get capacite(){
        return this._capacite;
    }
}