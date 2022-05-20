document.addEventListener('DOMContentLoaded', ()=>{
    loadBanks();
})

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