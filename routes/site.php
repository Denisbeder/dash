<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('site.index');
})->middleware('cacheable');

Route::get('/modal', function () {
    //sleep(5);
    return \Inertia\Inertia::render('EditorImage', ['title' => 'Editar imagem', 'size' => '70%']);
});
