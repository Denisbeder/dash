<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\PostsController;
use App\Http\Controllers\Admin\UsersController;

Route::get('/', [HomeController::class, 'index']);

// Posts
Route::get('/posts', [PostsController::class, 'index']);
Route::get('/posts/create', [PostsController::class, 'create']);
Route::post('/posts/create', [PostsController::class, 'store']);

// Users
Route::get('/users', [UsersController::class, 'index']);
Route::get('/users/create', [UsersController::class, 'create']);

Route::get('/editor-image', function () {
    sleep(1);
    return \Inertia\Inertia::render('EditorImage', ['title' => 'Editar imagem', 'size' => '70%']);
});
