//login button event handler
const loginBtn = document.getElementById('login');
    loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';

    const transaction = document.getElementById('transaction-area');
    transaction.style.display = 'block';
})


// deposit button event handler
const depositBtn = document.getElementById('deposit-btn');
    depositBtn.addEventListener('click', function (){
        const depositNum = getInputNum('depositAmount');

        updateSpanText('currentDeposit', depositNum);
        updateSpanText('currentBalance', depositNum);

        document.getElementById('depositAmount').value = null;
})


// withdraw button event handler
const withdrawBtn = document.getElementById('wdraw-btn');
    withdrawBtn.addEventListener('click', function (){
        const withdrawNum = getInputNum('withdrawAmount');

        updateSpanText('currentWithdraw', withdrawNum);
        updateSpanText('currentBalance', -1 * withdrawNum)

        document.getElementById('withdrawAmount').value = null;
    })

// for input number parseFloat   
function getInputNum(inputId) {
    const amount = document.getElementById(inputId).value;
    const amountNumber = +amount;
    return amountNumber;
}    

// to update the value of span
function updateSpanText(id, depositNum) {
    const current = document.getElementById(id).innerText;
    const currentNum = +current;
    const total = depositNum + currentNum;
    document.getElementById(id).innerText = total;
}
