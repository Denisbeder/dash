<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoryController;

Route::get('/', [HomeController::class, 'index'])->name('dashboard.index');

// Post
Route::get('/post', [PostController::class, 'index'])->name('post.index');
Route::get('/post/create', [PostController::class, 'create'])->name('post.create');
Route::post('/post/create', [PostController::class, 'store'])->name('post.store');

// User
Route::get('/user', [UserController::class, 'index'])->name('');
Route::get('/user/create', [UserController::class, 'create'])->name('');

// Category
Route::get('/category', [CategoryController::class, 'index'])->name('category.index');
Route::get('/category/create', [CategoryController::class, 'create'])->name('category.create');
Route::post('/category/create', [CategoryController::class, 'store'])->name('category.store');
Route::get('/category/show/{id}', [CategoryController::class, 'show'])->name('category.show');
Route::get('/category/test', [CategoryController::class, 'test'])->name('category.test');

Route::get('/editor-image', function () {
    sleep(1);
    return \Inertia\Inertia::render('EditorImage', ['title' => 'Editar imagem', 'size' => '70%']);
});

Route::get('/modal', function () {
    sleep(1);
    return \Inertia\Inertia::render('EditorImage', ['title' => 'Editar imagem', 'size' => '70%']);
});
