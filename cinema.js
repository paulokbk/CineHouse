const fs = require('fs');
let cinema = 'Cinemark';
console.log(`\n${cinema}\n`)

let catalogo = require('./database/catalogo.json')

function adicionarFilme(codigo, titulo, duracao, atores, ano, cartaz) {
    catalogo.push({
        codigo: codigo,
        titulo: titulo,
        duracao: duracao,
        atores: atores,
        anoDeLancamento: ano,
        emCartaz: cartaz
    })
    const json = JSON.stringify(catalogo);
fs.writeFileSync('./database/catalogo.json' , json);
}

function buscarFilme(codigo) {
    let response = 'Não Encontrado'
    for (let i = 0; i < catalogo.length; i++) {
        if (catalogo[i].codigo == codigo) {
            response = `Filme: ${catalogo[i].titulo}\nDuração: ${catalogo[i].duracao} horas\nAtores:  ${catalogo[i].atores}\nLançamento:  ${catalogo[i].anoDeLancamento}\nEstá em cartaz? ${catalogo[i].emCartaz}  \n`
        }
    }
    return response
}

function alterarStatusEmCartaz(codigo) {
    for (let i = 0; i < catalogo.length; i++) {
        catalogo[i].codigo == codigo ? catalogo[i].emCartaz = !catalogo[i].emCartaz : 0
    }
    const json = JSON.stringify(catalogo);
    fs.writeFileSync('./database/catalogo.json' , json);
}

function listarTodosOsFilmes(){
    console.log(`Esses são todos os filmes:\n`)
    for (let i = 0; i < catalogo.length; i++){
         console.log(`${i+1}:\nCodigo: ${catalogo[i].codigo}\nFilme: ${catalogo[i].titulo}\nDuração: ${catalogo[i].duracao} horas\nAtores:  ${catalogo[i].atores}\nLançamento:  ${catalogo[i].anoDeLancamento}\nEstá em cartaz? ${catalogo[i].emCartaz}  \n`)
    }
} 


function listarFilmesEmCartaz(){
    console.log(`Esses são os filmes em cartaz:\n`)
    let cont = 1
    for (let i = 0; i < catalogo.length; i++){
        if(catalogo[i].emCartaz){
         console.log(`${cont}:\nCodigo: ${catalogo[i].codigo}\nFilme: ${catalogo[i].titulo}\nDuração: ${catalogo[i].duracao} horas\nAtores:  ${catalogo[i].atores}\nLançamento:  ${catalogo[i].anoDeLancamento} \n`)
         cont ++
    }
}
}


