import EspecieApi from "./EspecieApi.js";

const miEspecie  = new EspecieApi();
const miBoton = document.getElementById("btn-procesar");

miBoton.addEventListener("click", async (event) => {
    event.preventDefault();
    //dessabilitado mientras hace el proceso para que no se envie varis veces
    miBoton.disabled = true;
    await miEspecie.guardarEspecie();
    miBoton.disabled = false;
})