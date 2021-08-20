
// Get deposit js

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositeAmount = depositInput.value;

    // console.log(newDepositAmount)

    // update deposit value
    const depositTotal = document.getElementById('deposit-amount');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositeAmount);
    depositTotal.innerText = newDepositTotal;


    // update total value
    const currentAmount = document.getElementById('current-amount');
    const totalCurrentAmount = currentAmount.innerText;
    currentAmount.innerText = parseFloat(totalCurrentAmount) + parseFloat(newDepositeAmount);

    // clear
    depositInput.value = '';
});


// Get withdraw js

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;

    // console.log(inputWithdrawn)

    const withdrawAmount = document.getElementById('withdraw-amount');
    const previousWithdrawn = withdrawAmount.innerText;
    const newWithdrawn = parseFloat(previousWithdrawn) + parseFloat(withdrawText);
    withdrawAmount.innerText = newWithdrawn;


    const currentAmount = document.getElementById('current-amount');
    const totalCurrentAmount = currentAmount.innerText;
    currentAmount.innerText = parseFloat(totalCurrentAmount) - parseFloat(withdrawText);

    // clear
    withdrawInput.value = '';
});