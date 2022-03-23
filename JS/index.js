const importe = document.getElementById("ImporteGasto");
const agregar = document.getElementById("Agregar");
const cuerpoDato = document.getElementById("cuerpoDato");
const htmlCuerpo = document.getElementById("Fecha");
const botonEliminar = document.getElementsByClassName("btn__delete");
const fechaHoy = new Date(Date.now());
const btnVerTabla = document.querySelector("a .btn-1");
btnVerTabla.addEventListener("click", () => {
  for (let i = 0; i < botonEliminar.length; i++) {
    botonEliminar[i].addEventListener(
      "click",
      (e) => {
        const registro = e.currentTarget.parentElement.parentElement;
        
        Swal.fire({
          title: "Eliminar Registro",
          text: "¿Estás seguro en eliminar este registro?",
          icon: "question",
          showDenyButton: true,
          // showCancelButton: true,
          confirmButtonText: "Sí",
          denyButtonText: `No`,
        }).then((result)=>{
          if(result.isConfirmed){
            registro.parentElement.removeChild(registro);
          }
        });
      },
      false
    );
  }
});
importe.addEventListener("blur", (e) => {
  let valor = 0;
  valor = isNaN(eval(e.target.value)) ? 0 : eval(e.target.value);
  e.target.value = valor.toFixed(2);
});
agregar.addEventListener("click", () => {
  let fecha = document.getElementById("Fecha");
  let categoria = document.getElementById("Categoria");
  let importeGastado = importe;
  let comentario = document.getElementById("Comentario");
  if (Validar() == true) {
    let eHtml =
      "<tr>" +
      "<td>" +
      1 +
      "</td>" +
      "<td>" +
      fecha.value +
      "</td>" +
      "<td>" +
      categoria.value +
      "</td>" +
      "<td class='amount'>" +
      importeGastado.value +
      "</td>" +
      "<td>" +
      comentario.value +
      "</td>" +
      "<td>" +
      "<button class='btn__edit' onclick='EditarRegistro()'>" +
      "<ion-icon name='pencil-outline'></ion-icon>" +
      "</button>" +
      "</td>" +
      "<td>" +
      "<button class='btn__delete' onclick='EliminarRegistro()'>" +
      "<ion-icon name='trash-outline'></ion-icon>" +
      "</button>" +
      "</td>" +
      "</tr>";
    cuerpoDato.insertAdjacentHTML("beforeend", eHtml);
    categoria.value = "";
    importeGastado.value = "";
    comentario.value = "";
    Swal.fire({
      title: "Bien Hecho!",
      text: "Se ha registrado su nuevo gasto!",
      icon: "success",
      showConfirmButton: false,
      timer: 2500,
      position: "top",
      toast: true,
    });
  }
});
function Validar() {
  let fecha = document.getElementById("Fecha");
  let categoria = document.getElementById("Categoria");
  let importeGastado = importe;
  if (fecha.value == "") {
    Swal.fire({
      title: "Fecha ERROR!",
      text: "La Fecha que ha ingresado es incorrecta.",
      icon: "error",
    });
    fecha.focus();
    return false;
  } else if (categoria.value == "") {
    Swal.fire({
      title: "Categoría ERROR!",
      text: "Tiene que ingresar una categoría.",
      icon: "error",
    });
    categoria.focus();
    return false;
  } else if (isNaN(importeGastado.value)) {
    Swal.fire({
      title: "Importe ERROR!",
      text: "El importe tiene que ser un valor numérico.",
      icon: "error",
    });
    importe.focus();
    return false;
  } else if (importeGastado.value == "" || importeGastado.value == 0) {
    Swal.fire({
      title: "Importe ERROR!",
      text: "Tienes que ingresar un importe",
      icon: "error",
    });
    importe.focus();
    return false;
  } else {
    return true;
  }
}
const descargar = document.getElementById("descargar");
descargar.addEventListener("click", () => {
  var table2excel = new Table2Excel();
  table2excel.export(document.querySelectorAll("#cron_table"));
});
function EliminarRegistro() {}
