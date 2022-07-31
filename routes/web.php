<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\WishlistController;
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

Route::get('/', [ProductController::class, 'index'])->name('index');

Route::get('/wishlist',[WishlistController::class, 'index'])->middleware(['auth', 'verified'])->name('wishlist');
Route::post('/wishlist', [WishlistController::class, 'save'])->middleware(['auth', 'verified'])->name('wishlist');

Route::get('/product/{id}',[ProductController::class, 'getProduct'])->name('product');

require __DIR__.'/auth.php';
