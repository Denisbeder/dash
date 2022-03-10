<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PostController extends Controller
{
    public function index()
    {
        $page = request()->query('page') ?? 1;
        $endpoint = "https://60f5772418254c00176dfeb8.mockapi.io/Posts?page={$page}&limit=10";
        $response = Http::get($endpoint);
        $results = $response->collect();

        return Inertia::render('Post/Index', [
            'datas' => function () use ($results) {
                return $results;
            },
        ]);
    }

    public function create()
    {
        return Inertia::render('Post/Form');
    }

    public function store(Request $request)
    {
        //sleep(10);
        $request->validate([
            'title' => 'required',
            //'description' => 'required',
        ]);

        dd($request->all());
    }
}
