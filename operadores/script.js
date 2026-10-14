
/* ========================================
   GRANEROS | PROPIEDADES RURALES
   Funcionalidades de la página
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    // MENÚ PARA CELULARES
    const botonMenu = document.getElementById("menu-toggle");
    const navegacion = document.getElementById("navegacion");

    if (botonMenu && navegacion) {
        botonMenu.addEventListener("click", () => {
            const estaAbierto = navegacion.classList.toggle("abierto");

            botonMenu.setAttribute("aria-expanded", estaAbierto);
            botonMenu.setAttribute(
                "aria-label",
                estaAbierto ? "Cerrar menú" : "Abrir menú"
            );
            botonMenu.textContent = estaAbierto ? "✕" : "☰";
        });

        // CERRAR EL MENÚ AL ELEGIR UNA SECCIÓN
        navegacion.querySelectorAll("a").forEach((enlace) => {
            enlace.addEventListener("click", () => {
                navegacion.classList.remove("abierto");
                botonMenu.setAttribute("aria-expanded", "false");
                botonMenu.setAttribute("aria-label", "Abrir menú");
                botonMenu.textContent = "☰";
            });
        });
    }

    // ACTUALIZAR EL AÑO AUTOMÁTICAMENTE
    const anio = document.getElementById("anio");

    if (anio) {
        anio.textContent = new Date().getFullYear();
    }

    // FORMULARIO DE CONTACTO
    // Permite que el navegador envíe los datos a FormSubmit.
    // No usar preventDefault(), porque bloquearía el envío.
    const formulario = document.getElementById("formulario");

    if (formulario) {
        formulario.addEventListener("submit", () => {
            const botonEnviar = formulario.querySelector(
                'button[type="submit"]'
            );

            if (botonEnviar) {
                botonEnviar.disabled = true;
                botonEnviar.textContent = "Enviando consulta...";
            }
        });
    }

});
