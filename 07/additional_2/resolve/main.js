const userCard = (id) => {
    let balance = 100;
    let transactionLimit = 100;
    const historyLog = [];
    const key = id;

    const createLogMsg = (operationType, credits) => ({operationType, credits, operationTime: new Date()})

    const putCredits = (money) => {
        balance += money
        historyLog.push(createLogMsg('putCredits', money))
    }

    const takeCredits = (money) => {
        if (balance - money >= 0) {
            balance -= money
            historyLog.push(createLogMsg('takeCreditsError', money))
        } else {
            historyLog.push(createLogMsg('takeCredits', money))
            console.error('not enough money')
        }
    }

    const setTransactionLimit = (newLimit) => {
        transactionLimit = newLimit
        historyLog.push(createLogMsg('setTransactionLimit', newLimit))
    }

    const transferCredits = (money, toCard) => {
        const fee = money * 0.005
        if (money + fee > balance && transactionLimit < money) {
            historyLog.push(createLogMsg('transferCreditsError', money))
            console.error('not enough money')
        } else {
            toCard.putCredits(money)
            balance-=fee+money
            historyLog.push(createLogMsg('transferCredits', money))
        }
    }

    const getCardOptions = () => ({balance, historyLog, key, transactionLimit})

    return {
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits,
        getCardOptions
    }
}


class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = []
    }

    addCard() {
        if (this.cards.length === 3) {
            console.error('card count limit error')
            return
        }
        this.cards.push(userCard(this.cards.length + 1))
    }

    getCardById(id) {
        const card = this.cards[id - 1];
        if (!card) {
            console.error('not present with this id')
            return;
        }
        return card
    }
}

const user = new UserAccount('Max');

user.addCard()
user.addCard()
const card1 = user.getCardById(1);
const card2 = user.getCardById(2);

card1.putCredits(500)
card1.setTransactionLimit(800)
card1.transferCredits(300, card2)
card2.takeCredits(50)
console.log(card1.getCardOptions());
console.log('____________________________________________________________');
console.log(card2.getCardOptions());