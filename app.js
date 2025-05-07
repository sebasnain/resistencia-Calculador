
let seleccionador1 = document.getElementById("seleccionador1");
let seleccionador2 = document.getElementById("seleccionador2");
let seleccionador3 = document.getElementById("seleccionador3");
let seleccionador4 = document.getElementById("seleccionador4");
let botonCalcular = document.getElementById("botonCalcularId");
let banda1Color = document.getElementById("banda-1");
let banda2Color = document.getElementById("banda-2");
let banda3Color = document.getElementById("banda-3");
let banda4Color = document.getElementById("banda-4");

// Mapeo de valores a colores 
const coloresBanda = {
    0: "black",
    1: "rgb(94, 0, 0)",
    2: "red",
    3: "orange",
    4: "yellow",
    5: "green",
    6: "blue",
    7: "rgb(71, 30, 71)",
    8: "gray",
    9: "white",
    10: "#ba8f0c",
    11: "#C0C0C0"
  };

  seleccionador1.addEventListener("change", function() {
    banda1Color.style.backgroundColor = coloresBanda[this.value];
  });
  seleccionador2.addEventListener("change", function() {
    banda2Color.style.backgroundColor = coloresBanda[this.value];
  });
  seleccionador3.addEventListener("change", function() {
    banda3Color.style.backgroundColor = coloresBanda[this.value];
  });
  seleccionador4.addEventListener("change", function() {
    banda4Color.style.backgroundColor = coloresBanda[this.value];
    });


    const multiBanda = {
      0: 1,
      1: 10,
      2: 100,
      3: 1000,
      4: 10000,
      5: 100000,
      6: 1000000,
      7: 10000000,
      8: 100000000,
      9: 1000000000,
      10: 10000000000,
      11: 100000000000
    };

botonCalcular.addEventListener("click", function() {
    let selec1 = seleccionador1.value //Number(seleccionador1.value)
    let selec2 = seleccionador2.value //Number(seleccionador2.value)
    let multiplicador = multiBanda[seleccionador3.value]
    let selec3 = Number(multiplicador)
   valorPorCodigo(selec1 ,selec2 ,selec3)

   
});


function valorPorCodigo(numeroBanda1 ,numeroBanda2 ,numeroBanda3){
 
    let resultado1 = numeroBanda1 + numeroBanda2 ;
    console.log(resultado1)
    let resultado2 = Number(resultado1)
    let resultado3 = resultado2 * numeroBanda3;
    console.log(resultado3)
    document.getElementById("texDisplay").textContent = resultado3 + "-ohm";
}




