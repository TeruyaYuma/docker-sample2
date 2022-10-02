<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::group(['middleware' => 'api'], function(){
//     Route::get('posts', [PostContoroller::class, "index"]);
//     Route::get('posts', 'App\Http\Controllers\Api\PostController@index');
// });

Route::post('/login', 'App\Http\Controllers\Api\LoginController@login');
Route::post('/logout', 'App\Http\Controllers\Api\LoginController@logout');
Route::post('/register', 'App\Http\Controllers\Api\LoginController@register');


Route::group(["middleware" => ["auth:sanctum"]], function () {
    Route::get('posts', 'App\Http\Controllers\Api\PostController@index');
//     Route::get("/posts/{postId?}/comments", function (Request $request) {
//       ...割愛
//     });
});