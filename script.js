function setEmail(){
    const email=document.getElementById("email").value
    
    if (email) {
        localStorage.setItem(email, email);
        alert("Email Cadastrado!");
        document.getElementById("email").value="";
    }   
}