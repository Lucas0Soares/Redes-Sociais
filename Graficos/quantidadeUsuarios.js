import  { getCSS } from "./common.js"
async function quantidadeUsuariosPorRede() {
    const url ='https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
    const data = [
        {
           x : nomeDasRedes,
           y : quantidadeUsuarios,
           type: 'bar', 
           maker: {
            color: getCSS('--primary-color')
           }
        }
    ]
    const grafico = document.createElement('div')
        grafico.className = 'grafico'
        document.getElementById('graficos-container').appendChild(graficos)
        Plotly.newPlot(grafico, data)
    
    console.log(dados)
    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color')
    }
}
quantidadeUsuarios()