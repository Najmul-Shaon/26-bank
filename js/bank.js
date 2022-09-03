document.getElementById('deposite').addEventListener('click', function () {
    const depositeAmount = document.getElementById('deposite-amount');
    const amountString = depositeAmount.value;
    const amount = parseFloat(amountString);
    const depositGrandTotal = document.getElementById('deposit-grand-total');
    const newTotalAmountString = depositGrandTotal.innerText;
    const newTotalAmount = parseFloat(newTotalAmountString);
    const newDepositTotal = newTotalAmount + amount;
    depositGrandTotal.innerText = newDepositTotal;

    // set balance section

    const grandTotalBalance = document.getElementById('grand-total-balance');
    const grandTotalBalanceString = grandTotalBalance.innerText;
    const grandTotalBalanceNumber = parseFloat(grandTotalBalanceString);
    const newGrandTotalBalance = amount + grandTotalBalanceNumber;
    grandTotalBalance.innerText = newGrandTotalBalance;


    // button clear section 
    depositeAmount.value = '';

})

// withdrawn section 
document.getElementById('withdrawn').addEventListener('click', function () {
    const withdrawnAmount = document.getElementById('withdrawn-amount');
    const withdrawnAmountString = withdrawnAmount.value;
    const withdrawnAmountNumber = parseFloat(withdrawnAmountString);

    const grandTotalWithdraw = document.getElementById('grand-total-withdeaw');
    const grandTotalBalanceString = grandTotalWithdraw.innerText;
    const grandTotalWithdrawNumber = parseFloat(grandTotalBalanceString);
    const newGrandTotalWithdraw = grandTotalWithdrawNumber + withdrawnAmountNumber;
    grandTotalWithdraw.innerText = newGrandTotalWithdraw;

    // set balance section
    const previousGrandTotalBalance = document.getElementById('grand-total-balance');
    const previousGrandTotalBalanceString = previousGrandTotalBalance.innerText;
    const previousGrandTotalBalanceNumber = parseFloat(previousGrandTotalBalanceString);
    const newGrandTotalBalanceAfterWithdrawn = previousGrandTotalBalanceNumber - withdrawnAmountNumber;
    previousGrandTotalBalance.innerText = newGrandTotalBalanceAfterWithdrawn;

    // clear section 

    withdrawnAmount.value = '';
})