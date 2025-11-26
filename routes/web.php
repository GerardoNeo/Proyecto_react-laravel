<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VistasController;

Route::get('/', function () {
    return view('inicio');
});

Route::get('/calendario', [VistasController::class, 'vistaCalendario']);
Route::get('/recetas', [VistasController::class, 'vistaRecetas']);
Route::get('/inventario', [VistasController::class, 'vistaInventario']);
Route::get('/postres', [VistasController::class, 'vistaPostres']);
