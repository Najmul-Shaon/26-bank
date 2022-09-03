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