<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $wishlists = [];
        $user = null;
        if(Auth::check()) {
            $user = Auth::user();
            $wishlists = Wishlist::where('user_id', $user->id)->get();
        }


        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'wishlists' => $wishlists,
        ]);
    }

    public function getProduct(Request $request, $id)
    {
        return Inertia::render('Product', [
            'id' => $id
        ]);
    }
}
