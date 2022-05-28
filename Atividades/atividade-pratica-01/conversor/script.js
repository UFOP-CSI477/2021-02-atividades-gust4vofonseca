document.addEventListener('DOMContentLoaded', ()=>{
    carregarMoedas();
})


function carregarMoedas() {
    fetch("https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json")
        .then(response => response.json())
        .then(dataAll => {
            console.log(dataAll);
        })
    fetch(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='${moeda_id}'&@dataCotacao='${mes}-${dia}-${ano}'&$top=100&$format=json&$select=cotacaoCompra`)
        .then(response => response.json())
        .then(dataAll => {
            console.log(dataAll);
        })
}