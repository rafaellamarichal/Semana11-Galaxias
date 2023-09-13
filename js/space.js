const inputBuscar = document.getElementById('inputBuscar');
const btnBuscar = document.getElementById('btnBuscar');
const contenedor = document.getElementById('contenedor');

function mostrarResultados(data) {
    contenedor.innerHTML = ''; //Esta línea borra cualquier contenido previamente presente en el elemento HTML con el id "contenedor

    const items = data.collection.items || []; // Esta línea crea una variable llamada items que obtiene el valor de data.collection.items. data es un objeto que se pasa como argumento a la función mostrarResultados. La expresión data.collection.items intenta acceder a una propiedad llamada "items" dentro del objeto "collection" que está dentro del objeto "data". Si esta propiedad no existe, o si data.collection o data son nulos o indefinidos, se asigna un array vacío a items. Esto se hace para evitar errores si los datos no están en el formato esperado.

    if (items.length === 0) {  //  Aquí se verifica si la longitud del array items es igual a cero, lo que significa que no se encontraron imágenes en los datos proporcionados. Si esto es cierto, el contenido del elemento HTML con el id "contenedor" se establece como el texto "No se encontraron imágenes."
        contenedor.textContent = 'No se encontraron imágenes.';
    } else {
        //contenedor.innerHTML += '<div class="row row-cols-3 row-cols-md-3 g-4">'
        items.forEach(item => {
            const title = item.data[0].title;
            const description = item.data[0].description;
            const imgagenURL = item.links[0].href;
            contenedor.innerHTML += `
                    <div class="col">
                        <div class="card h-50">
                            <img src="${imgagenURL}" class="card-img-top" alt="...">
                            <div class="card-body mt-2">
                                <h5 class="card-title"><strong>${title}</strong></h5>
                                <p class="card-text">${description}</p>
                            </div>
                        </div>
                    </div>
            `
        })
        //contenedor.innerHTML += '</div>'
    }
}

    btnBuscar.addEventListener('click', () => {
        const buscar = inputBuscar.value;
        const Url = `https://images-api.nasa.gov/search?q=${buscar}`;

        fetch(Url)
            .then(response => response.json())
            .then(data => {
                mostrarResultados(data);
            })
            .catch(error => {
                console.error('Error al realizar la solicitud:', error);
            });

    });

