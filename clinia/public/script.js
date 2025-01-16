document.addEventListener("DOMContentLoaded", () => {
  // Obtener referencia a los botones
  const saveButton = document.getElementById("saveButton");
  const printButton = document.getElementById("printButton");

  // Función para guardar como PDF
  saveButton.addEventListener("click", () => {
    const elementToPrint = document.querySelector(".container"); // Selecciona el contenedor
    const opt = {
      margin: 1,
      filename: `Historia_Clinica_${new Date().getTime()}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
    };
    // Genera el PDF usando html2pdf
    html2pdf().set(opt).from(elementToPrint).save();
  });
  // Función para imprimir
  printButton.addEventListener("click", () => {
    window.print();
  });
});

/*-------*/
@media print {
  #guardarBtn,
  #imprimirBtn,
  #buscarBtn {
    display: none;
  }
}
