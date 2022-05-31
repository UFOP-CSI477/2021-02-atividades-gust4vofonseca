document.addEventListener('DOMContentLoaded', ()=>{
    carregarMoedas();
})

function carregarMoedas() {
    fetch("https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json")
        .then(response => response.json())
        .then(dataAll => {
            const select01 = document.getElementById('selectValue01');
            const select02 = document.getElementById('selectValue02');
            let index = 0;
            for (const data of dataAll.value) {
                const option = document.createElement("option");
                option.value = index;
                option.id = data.tipoMoeda;
                option.innerHTML = data.nomeFormatado;
                select01.appendChild(option);
                index++;
            }
            index = 0;
            for (const data of dataAll.value) {
                const option = document.createElement("option");
                option.value = index;
                option.innerHTML = data.nomeFormatado;
                option.id = data.tipoMoeda;
                select02.appendChild(option);
                index++;
            }
        })
}

async function valueCoin(coin, date) {
    await fetch("https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='" + coin + "'&@dataCotacao='" + date[1]+ "-" + date[2]+ "-"  + date[0] + "'&$top=100&$format=json&$select=paridadeCompra")
        .then(response => response.json())
        .then(dataAll => {
            console.log(dataAll);
    })
}

async function valorMoedas() {
    const value01 = document.getElementById('value01').value;
    const selectValue01 = document.getElementById('selectValue01');
    const selectValue02 = document.getElementById('selectValue02');
    const date = document.getElementById('date').value.split('-');

    const valueCoin01 = await valueCoin(selectValue01.value, date);
    const valueCoin02 = await valueCoin(selectValue02.value, date);

    let value = '';
    if (selectValue01.id == 'A' && valueCoin02.id == 'A') {
        value = (valueCoin02 / valueCoin01) * value01;
    } else if (selectValue01[1] == 'A' && valueCoin02.id == 'B') {
        value = ((1 / valueCoin02) / valueCoin01) * value01;
    } else if (selectValue01[1] == 'B' && valueCoin02.id == 'A') {
        value = (valueCoin02 / (1 / valueCoin01)) * value01;
    } else if (selectValue01[1] == 'B' && valueCoin02.id == 'B') {
        value = (valueCoin02 / valueCoin01) * value01;
    }

    const result = document.getElementById('result');
    result.innerHTML = 'O valor da moeda 01 em relação a moeda 2 e' + value;
}
