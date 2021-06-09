//-----------------------------------------------------------------------------
//Class used to keep track of user-entered information
class PersonalInfo {
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

//-----------------------------------------------------------------------------
//Personal information manager
console.log('Welcome to the personal information manager!');

//read from terminal
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let promptUser = true;
let currentUserInfo = new PersonalInfo();

//a recursive function that recalls itself if boolean parameter stays true
const obj = require('./queryInformation.cjs');
obj.queryInformation(r1, promptUser, currentUserInfo);