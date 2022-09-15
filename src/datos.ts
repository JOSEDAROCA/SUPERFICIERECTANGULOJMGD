import "./styles.css";

let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
let dato2 = document.getElementById("dato2");

btnEnv.addEventListener("click", () => {
  let base: number = Number(dato.value);
  let altura: number = Number(dato2.value);

  let resultado: number = base * altura;

  console.log("El area del rectangulo es: ", resultado);
});