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
                let option = document.createElement("option");
                option.value = data.name;
                option.innerHTML = data.name;
                select.appendChild(option);
            }
           
        })
}

function create() {
    const data = {
        key: key.value, 
        value: value.value, 
        even: even.value, 
        bank: bank.value
    }
    transactions.push(data);
}

function viewtransactions() {
    for (const transaction of transactions) {
        
    }
}
