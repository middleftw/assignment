<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Website;

class WebSiteController extends Controller
{
    public function websites(){
        $w = Website::all();

        return $w;
    }

    public function create(Request $request){
        $validatedData = $request->validate([
            'name' => 'required',
            'url' => 'required|unique:websites'
        ]);

        $w = new Website();
        $w->name = $request->name;
        $w->url = $request->url;

        $w->save();

        return 1;

    }
}
