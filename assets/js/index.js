const btn = document.querySelector(".bCambiarFondo");
const body = document.querySelector("body");


const colores = [
    "radial-gradient(circle at 50% -3.03%, #ff9720 0, #ff8430 12.5%, #ff703a 25%, #ff5c42 37.5%, #f94646 50%, #e43148 62.5%, #d01c4b 75%, #be034d 87.5%, #ad0050 100%)",
    "radial-gradient(circle at 50% -3.03%, #005c7f 0, #005b85 5.56%, #005989 11.11%, #00578d 16.67%, #00558f 22.22%, #005390 27.78%, #005090 33.33%, #254d8f 38.89%, #3c4a8c 44.44%, #4c4688 50%, #594283 55.56%, #653e7d 61.11%, #6e3a76 66.67%, #76366f 72.22%, #7d3367 77.78%, #82305f 83.33%, #862e56 88.89%, #882d4d 94.44%, #892e45 100%)",
    "radial-gradient(circle at 50% -3.03%, #a07134 0, #987431 5.56%, #90782f 11.11%, #877b2f 16.67%, #7e7e31 22.22%, #748034 27.78%, #6a8339 33.33%, #5f853f 38.89%, #538646 44.44%, #46884e 50%, #378957 55.56%, #228a60 61.11%, #008b69 66.67%, #008c73 72.22%, #008c7d 77.78%, #008c87 83.33%, #008c90 88.89%, #008c9a 94.44%, #008ba2 100%)",
];


btn.addEventListener("click", cambiarFondo);


function cambiarFondo() {
    
    var indice = parseInt(Math.random() * colores.length);
    
    body.style.backgroundImage = colores[indice];
    
}



