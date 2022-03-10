<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Http;

class UserController extends Controller
{
    public function index()
    {
        $endpoint = 'https://60f5772418254c00176dfeb8.mockapi.io/Users';
        $response = Http::get($endpoint);
        $results = $response->collect();

        return Inertia::render('User/Index', [
            'datas' => function () use ($results) {
                return $results;
            },
        ]);
    }

    public function create()
    {
        return Inertia::render('User/Form');
    }
}
