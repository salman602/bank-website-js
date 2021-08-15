
// Get deposit js

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const inputDeposited = depositInput.value;

    console.log(inputDeposited)
    depositInput.value = '';
    const depositAmount = document.getElementById('deposit-amount');
    depositAmount.innerText = inputDeposited;


    const currentAmount = document.getElementById('current-amount');
    const totalCurrentAmount = currentAmount.innerText;
    currentAmount.innerText = parseFloat(totalCurrentAmount) + parseFloat(inputDeposited);
});


// Get withdraw js

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const inputWithdrawn = withdrawInput.value;

    console.log(inputWithdrawn)
    withdrawInput.value = '';
    const withdrawAmount = document.getElementById('withdraw-amount');
    withdrawAmount.innerText = inputWithdrawn;


    const currentAmount = document.getElementById('current-amount');
    const totalCurrentAmount = currentAmount.innerText;
    currentAmount.innerText = parseFloat(totalCurrentAmount) - parseFloat(inputWithdrawn);
});