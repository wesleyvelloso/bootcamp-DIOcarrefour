// Exercise - https://github.com/stebsnusch/basecamp-javascript/tree/main/orientacao-a-objetos

class BankAccount {
    constructor(id, branch, type) {
        this.id = id;
        this.branch = branch;
        this.type = type;
        this._balance = 0;
    }

    get balance() {
        "Current balance: " + this._balance;;
    }

    set balance(value) {
        this._balance = value;
    }

    toWithdraw(value) {
        if (value > this._balance) return "Denied Operation -> Insufficient balance!"
        this._balance -= value;
        return "Current balance: " + this._balance;;
    }

    toDeposit(value) {
        this._balance += value;
        return "Current balance: " + this._balance;
    }
}

class CheckingAccount extends BankAccount {
    constructor(id, branch, creditCard) {
        super(id, branch);
        this.type = "Checking Account";
        this._creditCard = creditCard;
    }

    get creditCard() {
        return "Credit card number: " + this._creditCard;
    }

    set creditCard(number) {
        this._creditCard = number;
    }
}

class SavingsAccount extends BankAccount {
    constructor(id, branch) {
        super(id, branch);
        this.type = "Savings Account";
    }
}

class UniversityAccount extends BankAccount {
    constructor(id, branch) {
        super(id, branch);
        this.type = "University Account";
    }

    toWithdraw(value) {
        if (value <= 500) super.toWithdraw(value);
        else return "Denied Operation -> Exceeded 500 withdrawal limit!";
    }

}