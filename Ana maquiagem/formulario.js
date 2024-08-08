function validatePassword(password) {
    const minLength = 8;
    const lowerCase = /[a-z]/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < minLength) {
        //alert ("A senha deve ter pelo menos 8 caracteres.");
        return false
    }
    if (specialChar.test(password)) {
        // alert("A senha deve conter pelo menos um caractere especial.");
        return false
      }

      return true
    
      
}

function checkPassword(password, confirmPassword) {
    const passwordMessage = validatePassword(password);
    if (password !== confirmPassword) {
        return {
            passwordMessage,
            confirmMessage: "As senhas não coincidem.",
            isValid: false
        };
    }
   
    return {
        passwordMessage,
        confirmMessage: passwordMessage === "Senha válida." ? "" : "As senhas não coincidem.",
        isValid: passwordMessage === "Senha válida."
    };
    
    

}

function checkAge(idade) {
    const birthDate = new Date(idade);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1;
    }
    if(age<18){
        // document.getElementById("ageMessage").innerText = "Você deve ter pelo menos 18 anos.";
        return false;
    } else {
        // document.getElementById("ageMessage").innerText = "";
        return true;
    }

}


module.exports = { validatePassword, checkPassword, checkAge,};