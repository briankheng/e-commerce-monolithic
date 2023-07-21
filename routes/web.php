<?php

use App\Http\Controllers\StoreController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [StoreController::class, 'index'])->name('store.index')->middleware(['auth', 'verified']);
Route::get('/{id}', [StoreController::class, 'detail'])->name('store.detail')->middleware(['auth', 'verified']);
Route::get('/order/{id}', [StoreController::class, 'order'])->name('store.order')->middleware(['auth', 'verified']);

require __DIR__.'/auth.php';
