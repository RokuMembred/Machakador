const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { jsPDF } = require('jspdf'); // Biblioteca para generar PDFs

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración del servidor
app.use(bodyParser.json());
app.use(express.static('public')); // Carpeta para los archivos frontend

// Ruta para guardar PDFs
app.post('/guardar-pdf', (req, res) => {
    const { folio, contenido } = req.body;

    // Crear el PDF
    const doc = new jsPDF();
    doc.text(contenido, 10, 10);

    // Ruta para guardar el archivo
    const rutaArchivo = `./bdd/${folio}.pdf`;

    // Guardar el archivo
    fs.writeFileSync(rutaArchivo, doc.output(), 'binary');
    res.send({ mensaje: `Archivo guardado como ${folio}.pdf` });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
