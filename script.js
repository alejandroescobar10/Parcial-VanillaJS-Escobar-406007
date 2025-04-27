document.addEventListener("DOMContentLoaded", function() {
    // Función para descargar el CV como PDF
    const downloadBtn = document.getElementById("downloadBtn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            // Añadir contenido al PDF
            // Descripción breve
            doc.setFontSize(12);
            doc.text("Descripción de mi CV:", 10, 20);
            doc.text("Desarrollador de software apasionado por crear soluciones innovadoras, con enfoque en calidad, eficiencia y aprendizaje continuo.", 10, 30);

            // Contacto
            doc.text("Contacto:", 10, 50);
            doc.text("📞 3127100080", 10, 60);

            // Enlaces útiles
            doc.text("Secciones:", 10, 75);
            doc.text("- Educación", 20, 85);
            doc.text("- Experiencia", 20, 95);

            // Educación
            doc.text("Educación:", 10, 110);
            doc.text("- Formación profesional:", 20, 120);
            doc.text("  Tecnólogo en Desarrollo de Software", 30, 128);
            doc.text("  Universidad Unicatólica (Cursando)", 30, 136);

            doc.text("- Secundaria:", 20, 148);
            doc.text("  Bachiller técnico en Diseño Gráfico", 30, 156);
            doc.text("  Liceo Napolitano (2020)", 30, 164);

            // Experiencia laboral
            doc.text("Experiencia Laboral:", 10, 180);
            doc.text("- Practicante de desarrollo de software", 20, 190);
            doc.text("  Pontificia Universidad Javeriana Cali", 30, 198);
            doc.text("  Funciones: Migración a Docker, consultas BD, apoyo a requerimientos.", 30, 206);

            doc.text("- Técnico en sistemas", 20, 218);
            doc.text("  Electrosolutions", 30, 226);
            doc.text("  Funciones: Instalación de cámaras, cableado, mantenimiento HW/SW.", 30, 234);

            doc.text("- Desarrollador de Software Junior", 20, 246);
            doc.text("  Qdit S.A.S", 30, 254);
            doc.text("  Funciones: Desarrollo Frontend/Backend, debugging, documentación.", 30, 262);

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
