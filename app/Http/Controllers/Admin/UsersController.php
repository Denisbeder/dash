<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Support\Facades\Http;

class UsersController extends Controller
{
    public function index()
    {
        $endpoint = 'https://60f5772418254c00176dfeb8.mockapi.io/Users';
        $response = Http::get($endpoint);
        $results = $response->collect();

        return Inertia::render('Users/Index', [
            'datas' => function () use ($results) {
                return $results;
            },
        ]);
    }

    public function create()
    {
        return Inertia::render('Users/Form');
    }
}
