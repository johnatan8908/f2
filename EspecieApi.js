//1. obtener datos de los formularios
//2. Conectarnos a la ruta de la api

class EspecieApi{
    
    constructor(){
        this.url = 'http://localhost:3000/api/';
        console.log(this.url + 'crear_especie')
    }
    async guardarEspecie(){
        const nombre = document.getElementById("nombre").value;
        //obtencio de valores
            const clasificacion = document.getElementById("clasificacion").value;
            const esperanza_vida = parseInt(document.getElementById("esperanza_vida").value);
            const peso_promedio = parseFloat(document.getElementById("peso_promedio").value);
        //creacion de objeto
            const datos = {
                nombre: nombre,
                clasificacion: clasificacion,
                esperanza_vida: esperanza_vida,
                peso_promedio: peso_promedio
            };
            //envio de datos
            await fetch(this.url + 'crear_especie',{
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(datos)
            });

            console.log("El registro se ha guardado correctamente");
        };

    async listarEspecies(){
        const respuesta = await fetch(this.url + 'listar_especies');
        const datos = await respuesta.json();
        const miTabla = document.getElementById("tabla_especies")
        datos.forEach(element => {
            const fila = miTabla.insertRow();
            fila.insertCell().innerText=element.id_especie;
            fila.insertCell().innerText=element.nombre;
            fila.insertCell().innerText=element.clasificacion;
            fila.insertCell().innerText=element.esperanza_vida;
            fila.insertCell().innerText=element.peso_promedio;
        });
    }
        
}

export default EspecieApi;






