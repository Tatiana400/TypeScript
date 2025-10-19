import { series } from "./data.js"; // Importa el array de datos
// -------------------------------------------------------------------
// FUNCIONES DE LÓGICA
// -------------------------------------------------------------------
/**
 * Muestra el listado completo de series en el cuerpo de la tabla HTML.
 * @param series El array de series a mostrar.
 */
function mostrarSeries(series) {
    const seriesBody = document.getElementById("series-body");
    // Verifica que el elemento exista y sea del tipo correcto
    if (!seriesBody)
        return;
    series.forEach(s => {
        const row = seriesBody.insertRow();
        row.style.cursor = 'pointer';
        row.insertCell().textContent = String(s.id);
        row.insertCell().textContent = s.name; // Usamos textContent en lugar de <a>
        row.insertCell().textContent = s.channel;
        row.insertCell().textContent = String(s.seasons);
        row.addEventListener("click", () => {
            mostrarDetalle(s);
        });
    });
}
/**
 * Calcula y muestra el promedio de temporadas en el elemento HTML.
 * @param series El array de series.
 */
function promedioTemporadas(series) {
    let totalSeasons = 0; // Inicializa el contador de temporadas
    let average = 0; // Inicializa el promedio
    // Total temporadas
    for (const serie of series) {
        totalSeasons += serie.seasons;
    }
    if (series.length > 0) {
        average = totalSeasons / series.length;
    }
    // Mostrar el resultado en el HTML
    const averageOutput = document.getElementById("average-output");
    if (averageOutput) {
        // Muestra el valor con cero decimales, como lo tenías configurado.
        averageOutput.textContent = average.toFixed(0);
    }
}
/**
 * Muestra el detalle de una serie en el contenedor designado.
 * @param serie La serie cuyo detalle se va a mostrar.
 */
function mostrarDetalle(serie) {
    const detailContainer = document.getElementById("series-detail-card");
    if (!detailContainer)
        return;
    // Estructura HTML del Card de Bootstrap
    const cardHtml = `
        <div class="card" style="width: 100%;"> 
            <img src="${serie.image}" class="card-img-top" alt="Poster de ${serie.name}">
            
            <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                
                <p class="card-text">${serie.description}</p>
                
                <a href="${serie.webpage}" target="_blank">${serie.webpage}</a>
            </div>
        </div>
    `;
    detailContainer.innerHTML = cardHtml;
}
// -------------------------------------------------------------------
// PUNTO DE ENTRADA (Ejecución de la aplicación)
// -------------------------------------------------------------------
// Llenar la tabla de series
mostrarSeries(series);
// Calcular y mostrar el promedio
promedioTemporadas(series);
//# sourceMappingURL=main.js.map