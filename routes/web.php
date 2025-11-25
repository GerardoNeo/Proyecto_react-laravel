<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VistaController;

Route::get('/', function () {
    return view('receta');
});

Route::get('/recetas', [VistaController::class, 'vistaRecetas']);
Route::get('/inventario', [VistaController::class, 'vistaInventario']);
