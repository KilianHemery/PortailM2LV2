class reservation {

    /** Constructeur*/
    /**
     *Instancie une nouvelle tache
     * @param {int} unid - id de la tache
     * @param {string} unLib  - libelle de la tache
     */
    constructor(unId, unJour, uneSalle, unNom, unEmail, unTel) {
        this._id = unId;
        this._jour = unJour;
        this._salle = uneSalle;
        this._nom =  unNom;
        this._email = unEmail;
        this._tel = unTel;
    }
    
}
module.exports = reservation;