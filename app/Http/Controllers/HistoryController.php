<?php

namespace App\Http\Controllers;

use App\Models\History;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Inertia\Response;

class HistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('History/Index', [
            'histories' => History::where('user_id', auth()->user()->id)->latest()->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'product_name' => ['required', 'string'],
            'quantity' => ['required', 'numeric'],
            'total_price' => ['required', 'numeric'],
        ]);

        $request->user()->histories()->create($validated);

        $data = Http::get('https://labpro-single-service-be.vercel.app/barang/' . $request->product_id)->json();

        Http::withHeaders([
            'Authorization' => env('TOKEN'),
        ])->put('https://labpro-single-service-be.vercel.app/barang/' . $request->product_id, [
            'nama' => $data['data']['nama'],
            'harga' => $data['data']['harga'],
            'stok' => $data['data']['stok'] - $request->quantity,
            'kode' => $data['data']['kode'],
            'perusahaan_id' => $data['data']['perusahaan_id'],
        ]);

        return redirect(route('history.index'));
    } 
}
