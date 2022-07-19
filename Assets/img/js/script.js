let email = document.getElementById('email')

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf('@') == -1) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
    }
}