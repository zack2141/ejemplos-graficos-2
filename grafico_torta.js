
// se debe de encerrar la configuracion del grafico en una función
function grafico_torta() {

    const ctx = document.getElementById('myChart2')
    const titulos = ['hidrica', 'solar', 'eolica']
    const valores = [25, 12, 30]
    const colores = ['#5975ff', '#fff94a', '#e6e5dc']
    const bordes = ['#ada799']

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: titulos,//titulos de cada porcion
            datasets: [{
                label: 'valores',// valores de cada porcion
                data: valores,
                backgroundColor: colores,// da color a las porciones
                borderColor: bordes,
            }],
            options: {
                responsive: 'true',
                maintainAspectRatio: 'false'
            }

        },

    })

}

// para iniciar el grafico desde la carga del proyecto lo invocamos

grafico_torta()
