let notas;
let promedio;
let suma = 0;

let notass = parseInt(prompt("escriba la cantidad de notas a promediar "));

for (i = 0; i < notass; i++){
    let notas = parseInt(prompt("escriba la nota " + i));
suma = suma + notas;
}
promedio = suma / notass;


alert("el resultado es " + promedio);


if (promedio == 10){
    alert ("Aprobaste con el mayor promedio")
}
else if(promedio >=7 && promedio <10){
    alert("aprobaste con el promedio general")
}
else if (promedio <=6 && promedio >0){
    alert("promedio desaprobado")
}
else{
    alert("el promedio es incorrecto, repite bien las notas")
}

