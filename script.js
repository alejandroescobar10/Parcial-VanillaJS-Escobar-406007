document.addEventListener("DOMContentLoaded", function() {
    // Función para descargar el CV como PDF
    const downloadBtn = document.getElementById("downloadBtn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            // Añadir contenido al PDF
            doc.setFontSize(18);
            doc.text("Mi CV", 10, 10); // Título
            doc.setFontSize(12);
            doc.text("Descripción de mi CV:", 10, 20);
            doc.text("Desarrollador de software apasionado por la tecnología.", 10, 30);
            doc.text("Contacto:", 10, 40);
            doc.text("📞 319 4146005", 10, 50);
            doc.text("Enlaces útiles:", 10, 60);
            doc.text("- Educación", 20, 70);
            doc.text("- Experiencia", 20, 80);

            // Descargar el archivo PDF
            doc.save("Mi_CV.pdf");
        });
    }

    // Función para enviar el mensaje del formulario "Hablemos"
    const enviarBtn = document.getElementById("enviarMensaje");
    if (enviarBtn) {
        enviarBtn.addEventListener("click", function () {
            const mensaje = document.getElementById("mensaje").value.trim();

            if (mensaje === "") {
                alert("Por favor escribe un mensaje antes de enviar.");
                return;
            }

            const email = "escobarmorcillo@gmail.com"; // <-- PON aquí tu correo real

            const subject = encodeURIComponent("Nuevo mensaje desde tu CV");
            const body = encodeURIComponent(mensaje);

            window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        });
    }
});
