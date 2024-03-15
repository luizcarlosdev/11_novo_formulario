const fPassword = document.querySelector("#f_password");
const btnPassword = document.querySelector("#password-button");
const iconEye = document.querySelector("#icon-eye");

btnPassword.addEventListener("click", () => {
    btnPassword.classList.toggle("showPassword");
    if (btnPassword.classList.contains("showPassword")) {
        fPassword.type = "text";
        iconEye.className = "fa-regular fa-eye-slash";
    } else {
        fPassword.type = "password";
        iconEye.className = "fa-regular fa-eye";
    }
})