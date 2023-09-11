const LINK_NASA = 'https://images-api.nasa.gov/search?q=';
const busqueda = document.getElementById('inputBuscar');
const botonBusqueda = document.getElementById('btnBuscar');
const contenedor = document.getElementById('contenedor');
// nodos relacionados con la busqueda.
let resultados = [];

botonBusqueda.addEventListener('click', ()=>{
   let busquedaEfectiva = `${LINK_NASA}${encodeURIComponent(busqueda.value)}`;
   // la busqueda que hace el usuario al dar click.
    fetch(busquedaEfectiva).then((result) => result.json()).then((json) => {
        resultados = json.collection.items;
        contenedor.innerHTML = '';
        let htmlContentToAppend = '';
        console.log(resultados)
        resultados.forEach((objeto) => {
            if (objeto.links !== undefined){
                htmlContentToAppend += `
                <div class="card p-2 tarjeta" style="width: 25rem;">
                    <img class="card-img-top imagencita" src="${objeto.links[0].href}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${objeto.data[0].title}</h5>
                        <p class="card-text over">${objeto.data[0].description}</p>
                        <p class="letraGris">${objeto.data[0].date_created}</p>
                    </div>
                </div>
            `;
    }
        })
        contenedor.innerHTML = htmlContentToAppend;
    })
    
})
