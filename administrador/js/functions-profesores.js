$('#tableprofesores').DataTable();
var tableprofesores;

document.addEventListener('DOMContentLoaded',function(){
    tableprofesores = $('#tableprofesores').DataTable({
    "aProcessing": true,
    "aServerSide": true,
    "language": {
        "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Spanish.json"
    },
    "ajax": {
        "url": "./models/profesores/table_profesores.php",
        "dataSrc": ""
    },
    "columns": [
        { "data": "acciones" },
        { "data": "profesor_id" },
        { "data": "nombre" },
        { "data": "direccion" },
        { "data": "cedula" },
        { "data": "telefono" },
        { "data": "correo" },
        { "data": "nivel_est" },
        { "data": "estado" }
    ],
    "responsive": true,
    "bDestroy": true,
    "iDisplayLength": 10,
    "order": [[0, "asc"]]
    });
    var formProfesor = document.querySelector('#formProfesor');
    formProfesor.onsubmit = function(e) {
        e.preventDefault();
        var idprofesor = document.querySelector('#idprofesor').value;
        var nombre = document.querySelector('#nombre').value;
        var direccion = document.querySelector('#direccion').value;
        var cedula = document.querySelector('#cedula').value;
        var clave = document.querySelector('#clave').value;
        var telefono = document.querySelector('#telefono').value;
        var correo = document.querySelector('#correo').value;
        var nivel_est = document.querySelector('#nivel_est').value;
        var estado = document.querySelector('#listEstado').value;

        if(nombre == '' || direccion == '' || cedula == '' || telefono == '' || correo == '' || nivel_est == '') {
            swal("Atencion", "Todos los campos son necesarios", "warning");
            return false;
        }
        if(cedula < 1) {
            swal("Atencion", "La cedula no es valida", "warning");
            return false;
        }
        if(telefono < 1) {
            swal("Atencion", "El telefono no es valida", "warning");
            return false;
        }
        var request = (window.XMLHttpRequest) ? new XMLHttpRequest: new ActiveXObject('Microsoft.XMLHTTP');
        var url = './models/profesores/ajax-profesores.php';
        var form = new FormData(formProfesor);
        request.open('POST', url, true);
        request.send(form);
        request.onreadystatechange = function() {
            if(request.readyState == 4 && request.status == 200) {
                var data = JSON.parse(request.responseText);
                if(request.status) {
                    $('#modalProfesor').modal ('hide');
                    formProfesor.reset();
                    swal("Profesor", data.msg, "success");
                    tableprofesores.ajax.reload();
                } else { 
                    swal("Profesor", data.msg, "error");
                }
            }
        }
    }
})
function openModal() {
    document.querySelector('#idprofesor').value = "";
    document.querySelector('#tituloModal').innerHTML = 'Nuevo Profesor';
    document.querySelector('#action').innerHTML = 'Guardar';
    document.querySelector('#formProfesor').reset();
    $('#modalProfesor').modal('show');
}
function editarProfesor(id){
    var idprofesor = id;
    document.querySelector('#tituloModal').innerHTML = 'Editar Profesor';
    document.querySelector('#action').innerHTML = 'Actualizar';
    var request = (window.XMLHttpRequest) ? new XMLHttpRequest: new ActiveXObject('Microsoft.XMLHTTP');
    var url = './models/profesores/edit-profesor.php? idprofesor='+idprofesor;
    request.open('GET', url, true);
    request.send();
    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200) {
            var data = JSON.parse(request.responseText);
            if(request.status) {
                document.querySelector('#idprofesor').value = data.data.profesor_id;
                document.querySelector('#nombre').value= data.data.nombre;
                document.querySelector('#direccion').value= data.data.direccion;
                document.querySelector('#cedula').value = data.data.cedula;
                document.querySelector('#telefono').value = data.data.telefono;
                document.querySelector('#correo').value = data.data.correo;
                document.querySelector('#nivel_est').value = data.data.nivel_est;
                document.querySelector('#listEstado').value = data.data.estado;

                $('#modalProfesor').modal('show');
            } else { 
                swal("Profesor", data.msg, "error");
            }
        }
    }
}
function eliminarProfesor(id){
    var idprofesor = id;
    swal({
        title: "Eliminar profesor",
        text: "¿Esta seguro que desea eliminar este profesor?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest: new ActiveXObject('Microsoft.XMLHTTP');
            var url = './models/profesores/delet-profesor.php';
            request.open('POST', url, true);
            var strData = "idprofesor="+idprofesor; 
            request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            request.send(strData);
            request.onreadystatechange = function() {
                if(request.readyState == 4 && request.status == 200) {
                    var data = JSON.parse(request.responseText);
                    if(data.status) {
                        swal("Eliminar", data.msg, "success");
                        tableprofesores.ajax.reload();
                    } else { 
                        swal("Atencion", data.msg, "error");
                    }
                }
            }
        } else {
          swal("Sin cambios");
        }
    });
}