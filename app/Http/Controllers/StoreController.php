<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Inertia\Response;

class StoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $req = Http::get('https://labpro-single-service-be.vercel.app/barang')->json();
        $data = $req['data'];

        return Inertia::render('Store', [
            'data' => $data,
        ]);
    }

    public function show(string $id): Response
    {
        $req = Http::get('https://labpro-single-service-be.vercel.app/barang/' . $id)->json();
        $data = $req['data'];

        return Inertia::render('Detail', [
            'data' => $data,
        ]);
    }
}
