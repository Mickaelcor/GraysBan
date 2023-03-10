//Changement de fond en vert au passage de la souris sur la collection homme

document.getElementById("homme").addEventListener("mouseover",changeColor);
function changeColor (obj){
    document.getElementById("homme").style.backgroundColor ="darkslategrey";
}

document.getElementById("homme").addEventListener("mouseout",changeColor1);
function changeColor1 (obj){
    document.getElementById("homme").style.backgroundColor ="white";
}


//Changement de fond en vert au passage de la souris sur la collection femme

document.getElementById("femme").addEventListener("mouseover",changeColor2);
function changeColor2 (obj){
    document.getElementById("femme").style.backgroundColor ="darkslategrey";
}

document.getElementById("femme").addEventListener("mouseout",changeColor3);
function changeColor3 (obj){
    document.getElementById("femme").style.backgroundColor ="white";
}



//Rotation de 5 degres au clique sur chaque type de lunette

document.getElementById("lunette1").addEventListener("click",rotation1);
function rotation1 (event){
    document.getElementById("lunette1").style.rotate ="5deg";
}
document.getElementById("lunette2").addEventListener("click",rotation2);
function rotation2 (event){
    document.getElementById("lunette2").style.rotate ="5deg";
}
document.getElementById("lunette3").addEventListener("click",rotation3);
function rotation3 (event){
    document.getElementById("lunette3").style.rotate ="5deg";
}
document.getElementById("lunette4").addEventListener("click",rotation4);
function rotation4 (event){
    document.getElementById("lunette4").style.rotate ="5deg";
}