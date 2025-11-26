<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VistasController extends Controller
{
    function vistaRecetas(){
        return View('receta');
    }

    function vistaInventario(){
        return View('inventario');
    }
}
