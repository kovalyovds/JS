function userCard(nums) {
    let methods = {1: 'getCardOptions', 2: 'putCredits', 3: 'takeCredits', 4: 'setTransactionLimit', 5: 'transferCredits'};
    if (typeof nums === 'number' && nums > 0 && nums <= 3) {
        this.nums = nums;
        console.log(methods);
    } else {
        console.log('Введіть число від 1 до 3');
    }
    this.getCardOptions = function (balance = 100, transactionLimit = 100) {
        this.balance = balance;
        this.transactionLimit = transactionLimit;
        this.historyLogs = [];
        this.key = this.nums;
        let option = {
            balance: `${this.balance}`, transactionLimit: `${this.transactionLimit}`,
            historyLogs: `${this.historyLogs}`, key: `${this.key}`
        };
        console.log(option);
    }
    this.putCredits = function (credit) {
        this.balance = credit;
        console.log(`balance: ${this.balance}`);
    }
    this.takeCredits = function (cash) {
        if ((this.balance - cash) >= 0) {
            this.cash = this.balance - cash;
        } else {
            console.log('Error "Недостатньо коштів"');
        }
    }
    this.setTransactionLimit = function (limit) {
        this.transactionLimit = limit;
    }
    this.transferCredits = function (credits, cardUser) {
        
    }
}

let card3 = new userCard(3);

console.log(card3);

card3.getCardOptions();

card3.putCredits(150);

card3.takeCredits(100);
