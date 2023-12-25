<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $validated = $request->validated();

        if (!Auth::attempt($validated)) {
            return response()->json([
                "message" => "Invalid credentials"
            ], 401);
        }

        $user = $request->user();
        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        $logoutMessage = "You have been successfully logged out. Thank you!";
        return response()->json([
            'message' => $logoutMessage
        ]);
    }
    
    public function signup(SignupRequest $request)
    {
        $validated = $request->validated();

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
        ]);

        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }
}
