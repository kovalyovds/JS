function userCard(nums) {
    let methods = {
        1: 'getCardOptions',
        2: 'putCredits',
        3: 'takeCredits',
        4: 'setTransactionLimit',
        5: 'transferCredits'
    };
    if (typeof nums === 'number' && nums > 0 && nums <= 3) {
        this.nums = nums;
        console.log(methods);
    } else {
        console.log('Введіть число від 1 до 3');
    }

    let historyLogs = [];
    function Logs(operationType, credits, operationTime) {
        this.operationType = operationType;
        this.credits = credits;
        this.operationTime = operationTime;
    }

    this.getCardOptions = function (balance = 100, transactionLimit = 100) {
        this.balance = balance;
        this.transactionLimit = transactionLimit;
        this.historyLogs = historyLogs;
        this.key = this.nums;
        let option = {
            balance: `${this.balance}`, transactionLimit: `${this.transactionLimit}`,
            historyLogs: `${this.historyLogs}`, key: `${this.key}`
        };
        console.log(option);
    }
    this.putCredits = function (credit) {

        let operationType = 'Received credits';
        let time = new Date();
        let operationTime = `${time.getDate()}/${time.getMonth()}/${time.getFullYear()}, ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
        historyLogs.push(`operationType: ${operationType}, credits: ${credit}, operationTime: ${operationTime}`)
        this.balance = credit;
        console.log(`balance: ${this.balance}`);
    }
    this.takeCredits = function (cash) {
        let operationTypeTake = 'Withdrawal of credits';
        let time = new Date();
        let operationTime = `${time.getDate()}/${time.getMonth()}/${time.getFullYear()}, ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
        historyLogs.push(`operationType: ${operationTypeTake}, credits: ${cash}, operationTime: ${operationTime}`)
        if ((this.balance - cash) >= 0) {
            this.cash = this.balance - cash;
        } else {
            console.log('Error "Недостатньо коштів"');
        }
    }
    this.setTransactionLimit = function (limit) {
        let operationTypeSet = 'Transaction limit change';
        let time = new Date();
        let operationTime = `${time.getDate()}/${time.getMonth()}/${time.getFullYear()}, ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
        historyLogs.push(`operationType: ${operationTypeSet}, credits: ${limit}, operationTime: ${operationTime}`)
        this.transactionLimit = limit;
    }
    this.transferCredits = function (credits, cardUser) {

    }
}

let card3 = new userCard(3);

console.log(card3);

card3.putCredits(150);

card3.takeCredits(100);

card3.setTransactionLimit(40)

card3.transferCredits()

card3.transferCredits()

card3.getCardOptions();




