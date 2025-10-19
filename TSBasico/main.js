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
        row.insertCell().textContent = String(s.id); // Convierte el id a string
        row.insertCell().innerHTML = `<a href="${s.webpage}" target="_blank">${s.name}</a>`; // Enlace a la página
        row.insertCell().textContent = s.channel; // Canal de la serie
        row.insertCell().textContent = String(s.seasons); // Convierte las temporadas a string
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
// -------------------------------------------------------------------
// PUNTO DE ENTRADA (Ejecución de la aplicación)
// -------------------------------------------------------------------
// Llenar la tabla de series
mostrarSeries(series);
// Calcular y mostrar el promedio
promedioTemporadas(series);
//# sourceMappingURL=main.js.map