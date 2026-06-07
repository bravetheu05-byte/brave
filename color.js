function login(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById('password').value;

    if (username === "brave" && password === "1234"){

        localStorage.setItem("name","Brave theu");
        localStorage.setItem("course","Biomedical Engineering");
        window.location.href = "student.html";
    }
    else if(username === "beauty" && password === "2017"){
        localStorage.setItem("name","Beauty Kamanga");
        localStorage.setItem("course","Metallurgy and Materials Engineering");
        window.location.href = "student.html";
    }

    else {
        document.getElementById("error").textContent = "wrong input"
    }
}