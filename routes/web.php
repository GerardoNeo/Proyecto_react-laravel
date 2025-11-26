<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VistasController;

Route::get('/', function () {
    return view('receta');
});

Route::get('/recetas', [VistasController::class, 'vistaRecetas']);
Route::get('/inventario', [VistasController::class, 'vistaInventario']);
