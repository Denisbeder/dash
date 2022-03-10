<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CategoryController extends Controller
{
    public function test()
    {
        abort_if(!request()->isXmlHttpRequest(), 404);
        //sleep(2);
        return Inertia::render('Category/TestModal', [ 'size' => '70%']);
    }

    public function index()
    {
        $page = request()->query('page') ?? 1;
        $endpoint = "https://60f5772418254c00176dfeb8.mockapi.io/Categories?page={$page}&limit=3";
        $response = Http::get($endpoint);
        $results = $response->collect();

        return Inertia::render('Category/Index', [
            'datas' => function () use ($results) {
                return $results;
            },
        ]);
    }

    public function create()
    {
        $view = request()->isXmlHttpRequest() ? 'Category/FormModal' : 'Category/Form';
        return Inertia::render($view);
    }

    public function store(Request $request)
    {
        //sleep(1);
        /* $request->validate([
            'title' => 'required',
            'page' => 'required',
        ]); */

        return redirect()->route('category.show', new Category([
            'id' => rand(1, 100),
            'title' => $request->get('title'),
            'page' => $request->get('page')
        ]));
    }

    public function show($id)
    {
        return Inertia::render('Category/Show', [
            'datas' => function () {
                return new Category([
                    'id' => rand(1, 100),
                    'title' => 'Titluoll',
                    'page' => 10
                ]);
            },
        ]);
    }
}
