class User
{

    constructor(unId, unUsername, unPassword)
    {
        this._id = unId;
        this._username = unUsername;
        this._password = unPassword;
    }

    get username() {
        return this._username;
    }

    get password() {
        return this._password;
    }

    get id() {
        return this._id;
    }

}

module.exports = User;