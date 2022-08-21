document.getElementById("switch").addEventListener("click", changeTheme)
document.getElementById("switchBlue").addEventListener("click", bluetheme);
document.getElementById("switchBack").addEventListener("click", resetTheme);

function changeTheme(){
    document.documentElement.style.setProperty("--primary", "black");
    document.documentElement.style.setProperty("--secondry-dark", "black");
}
function resetTheme(){
    document.documentElement.style.setProperty("--primary", "rgb(209, 208, 208)");
    document.documentElement.style.setProperty("--secondry-dark", "rgb(66, 113, 79)");
}

function bluetheme (){
    document.documentElement.style.setProperty("--secondry-dark", "#1d9bf0")
    // document.documentElement.style.setProperty("--secondry-dark", "#1d9bf0")
}

// --black: #000;
// --secondry: rgb(106, 180, 127);
// --secondry-dark: rgb(66, 113, 79);
// --white: #fff;
// --primary: rgb(209, 208, 208);
// --blue:  #1d9bf0;

// HOT COLOR