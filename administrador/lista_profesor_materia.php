<?php
    require_once 'includes/header.php';
    require_once 'includes/modals/modal_profesor_materia.php';
?>
<main class="app-content">
    <div class="app-title">
        <div>
            <h1><i class="fa fa-dashboard"></i> Lista de Profesor Materia</h1>
            <button class="btn btn-success" type="button" onclick="openModalProfesorMateria()">Nuevo Proceso</button>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item"><a href="#">lista de profesor materia</a></li>
        </ul>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="tile">
                <div class="tile-body">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered" id="tableprofesormateria">
                    <thead>
                        <tr>
                        <th>ACCIONES</th>
                        <th>ID</th>
                        <th>NOMBRE DEL PROFESOR</th>
                        <th>GRADO</th>
                        <th>AULA</th>
                        <th>MATERIA</th>
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
<script type="text/javascript" src="js/functions-profesor-materia.js"></script>