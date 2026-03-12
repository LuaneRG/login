function logar() {
    var username = document.getElementById("name").value;
    var keypass = document.getElementById("keypass").value;

    if (username == "User1" && keypass == "12345") {
        location.href = "product.html";
    } else if (username == "" || keypass == "") {
        alert("Preencha o(s) campo(s) vazio(s)");
    } else {
        alert("Usuário ou senha incorreto");
    }
}

function senha() {
    let keypass = document.querySelector("#keypass");
    let icon = document.querySelector("#icon");

    if (keypass.getAttribute("type") === "password") {
        keypass.setAttribute("type", "text");
        icon.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    } else {
        keypass.setAttribute("type", "password");
        icon.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    }
}
