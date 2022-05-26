document.addEventListener('DOMContentLoaded', ()=>{
    loadBanks();
})

const transactions = [];

const key = document.getElementById("key");
const value = document.getElementById("value");
const even = document.getElementById("event");
const bank = document.getElementById("bank");
const transactionsDiv = document.getElementById("transactions"); 

function loadBanks() {
    fetch("https://brasilapi.com.br/api/banks/v1")
        .then(response => response.json())
        .then(dataAll => {
            const select = document.getElementById('bank');
            for (const data of dataAll) {
                const option = document.createElement("option");
                option.value = data.name;
                option.innerHTML = data.name;
                select.appendChild(option);
            }
           
        })
}

function create() {
    let valueData = parseFloat(value.value);
    valueData = valueData.toFixed(2);
    console.log(valueData);
    const data = {
        key: key.value, 
        value: valueData, 
        even: even.value, 
        bank: bank.value
    }
    transactions.push(data);

    viewtransactions();
    calculateBalance();
}

function calculateBalance() {
    let send = 0;
    let received = 0;
    for (const transaction of transactions) {
        if (transaction.even === 'send') {
            send = send + parseFloat(transaction.value);
        } else {
            received = received + parseFloat(transaction.value);
        }
    }

    const totalValue = received - send;

    const totalBalance = document.getElementById('totalBalance');
    const totalSend = document.getElementById('totalSend');
    const totalReceived = document.getElementById('totalReceived');

    totalBalance.innerHTML = 'R$ ' + totalValue.toFixed(2);
    totalSend.innerHTML = 'R$ ' + send.toFixed(2);
    totalReceived.innerHTML = 'R$ ' + received.toFixed(2);
}

function viewtransactions() {
    const transactionsDiv = document.getElementById('transactions');
    transactionsDiv.innerHTML = '<h2>Historico</h2>';

    for (const transaction of transactions) {
        const valueData = parseFloat(transaction.value);
        const event = transaction.even === 'send' ? 'Enviou para' : 'Recebeu de';
        const paragraph = document.createElement('p');
        const spanKey = document.createElement('span');
        const spanValue = document.createElement('span');
        const spanBank = document.createElement('span');
        spanKey.innerHTML = event + ': ' + transaction.key;
        paragraph.append(spanKey);
        spanValue.innerHTML = 'Valor: ' + 'R$ ' + valueData.toFixed(2);
        paragraph.append(spanValue);
        spanBank.innerHTML = 'Banco: ' + transaction.bank;
        paragraph.append(spanBank);
        transactionsDiv.appendChild(paragraph);
    }
}
