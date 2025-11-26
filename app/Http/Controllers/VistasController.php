<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VistasController extends Controller
{   
    function vistaInicio(){
        return View('inicio');
    }

    function vistaCalendario(){
        return View('calendario');
    }

    function vistaRecetas(){
        return View('receta');
    }

    function vistaInventario(){
        return View('inventario');
    }

    function vistaPostres(){
        return View('postre');
    }
}
