const inputBuscar = document.getElementById('inputBuscar');
const btnBuscar = document.getElementById('btnBuscar');
const contenedor = document.getElementById('contenedor');

/*btnBuscar.addEventListener("click", () => {

    const response = fetch(`https://images-api.nasa.gov/search?q=${inputBuscar.value}`)
        .then(response => response.json())
        .then(data => {
            data.collection.items.forEach(element => {
                contenedor.innerHTML += `
                    <div class="container" >
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card mb-4 shadow-sm custom-card cursor-active" id="autos">
                                    <h3 class="m-3">Autos</h3>
                                    <div class="card-body">
                                        <p class="card-text">Los mejores precios en autos 0 kilómetro, de alta y media gama.</p>
                                    </div>
                                    <img class="bd-placeholder-img card-img-top" src="${element.links[0].href.value}" alt="Imgagen representativa de la categoría 'Autos'">
                                </div>
                            </div>
                        </div>
                    </div>
                `
            })
        });
});*/

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

