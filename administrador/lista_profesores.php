<?php
    require_once 'includes/header.php';
    require_once 'includes/modals/modal_profesor.php';
?>
<main class="app-content">
    <div class="app-title">
        <div>
            <h1><i class="fa fa-dashboard"></i> Lista de Profesores</h1>
            <button class="btn btn-success" type="button" onclick="openModal()">Nuevo Profesor</button>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item"><a href="#">lista de profesores</a></li>
        </ul>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="tile">
                <div class="tile-body">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered" id="tableprofesores">
                    <thead>
                        <tr>
                        <th>ACCIONES</th>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>DIRECCION</th>
                        <th>CEDULA</th>
                        <th>TELEFONO</th>
                        <th>CORREO</th>
                        <th>NIVEL DE EST.</th>
                        <th>ESTADO</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </div>
</main>
<?php
    require_once 'includes/footer.php';
?>
<script type="text/javascript" src="js/functions-profesores.js"></script>