<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class WishlistController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $wishlists = Wishlist::where('user_id', $user->id)->get();

        return Inertia::render('Wishlist', [
            'wishlists' => $wishlists
        ]);
    }

    public function save(Request $request)
    {
        $product = $request->all()['product'];
        $user = Auth::user();

        $exist = Wishlist::whereExists(function ($query) use($user, $product) {
            $query->select(DB::raw(1))
                  ->where('wishlists.user_id', $user->id)->where('product_id', $product['id']);
        })->get();

        if($exist->count() > 0) {
            $wishlist = Wishlist::where('wishlists.user_id', $user->id)->where('product_id', $product['id'])->delete();
        }
        else {
            $wishlist = new Wishlist([
                'product_id' => $product['id'],
                'product' => json_encode($product),
                'user_id' => $user->id,
            ]);
            $wishlist->save();
        }

        $wishlists = Wishlist::where('user_id', $user->id)->get();

        return back()->with(['wishlists' => $wishlists]);
    }
}
