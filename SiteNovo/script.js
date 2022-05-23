/*
    var = Serve Escopo Global
    let = Serve Escopo Local
    const = Serve Escopo Global, mas não muda o seu valor
*/

/* var nome = "Turma 49"
function hello(){
    alert(nome + " está aprendendo JS")
} 
*/

let nome = window.document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.getElementsByName('assunto')

// ou ||

function verifica(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("Não abandone a vila")
        return false
    }
    return true
}

function enviar(){
    if(verifica()){
        alert("Olá " + nome.value + " esse é seu jeito ninja de ser.")
    }
}