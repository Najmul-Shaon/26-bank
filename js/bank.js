document.getElementById('deposite').addEventListener('click', function () {
    const depositeAmount = document.getElementById('deposite-amount');
    const amount = depositeAmount.value;
    const depositGrandTotal = document.getElementById('deposit-grand-total');
    depositGrandTotal.innerText = amount;
    depositeAmount.value = '';
})