class Bank {
    balance: number[]
    constructor(balance: number[]) {
        this.balance = balance
    }
    not_statisfy(account: number): boolean {
        let index = account - 1
        if (index < 0 || index > this.balance.length) {
            return true
        }
        return false
    }

    transfer(account1: number, account2: number, money: number): boolean {
        if (this.balance[account1 - 1] < money) {
            return false
        }
        if (this.not_statisfy(account1) || this.not_statisfy(account2)) {
            return false
        }
        this.balance[account1 - 1] -= money
        this.balance[account2 - 1] += money
        return true
    }

    deposit(account: number, money: number): boolean {
        if (this.not_statisfy(account)) {
            return false
        }
        this.balance[account - 1] += money
        return true
    }

    withdraw(account: number, money: number): boolean {
        let rest = this.balance[account - 1]
        if (rest < money || this.not_statisfy(account)) {
            return false
        }
        this.balance[account - 1] = rest - money
        return true
    }
}


var obj = new Bank([10, 100, 20, 50, 30])
var param_1 = obj.withdraw(3, 10)
var param_2 = obj.transfer(5, 1, 20)
var param_3 = obj.deposit(5, 20)
var param_2 = obj.transfer(5, 1, 20)
var param_2 = obj.withdraw(10, 50)
