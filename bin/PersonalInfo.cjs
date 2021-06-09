//-----------------------------------------------------------------------------
//Class used to keep track of user-entered information
module.exports.PersonalInfo = class PersonalInfo {
    constructor(name, ssn, momsCreditCardNumber){
        _name: name;
        _ssn: ssn;
        _momsCreditCardNumber: momsCreditCardNumber;
    }

    //Getters
    get_name(){
        return this._firstName;
    }

    get_ssn(){
        return this._ssn;
    }

    get_momsCreditCardNumber(){
        return this._momsCreditCardNumber;
    }

    //Setters
    set_name(name){
        this._firstName = name;
    }

    set_ssn(ssn){
        this._ssn = ssn;
    }

    set_momsCreditCardNumber(creditCardNumber){
        this._momsCreditCardNumber = creditCardNumber;
    }
}