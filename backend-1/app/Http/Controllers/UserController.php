<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }



    public function store(Request $request)
    {
        Log::info('Attempt to create new user', ['request' => $request->all()]);

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'phone' => 'required|string|max:255',
            'address' => 'required|string|max:255'
        ]);

        if ($validator->fails()) {
            Log::error('Validation failed while creating new user', ['errors' => $validator->errors()]);
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'phone' => $request->phone,
                'address' => $request->address,
            ]);

            Log::info('User created successfully', ['user_id' => $user->id]);
            return response()->json($user, 201);
        } catch (\Exception $e) {
            Log::error('Error occurred while creating new user', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'User creation failed', 'error' => $e->getMessage()], 500);
        }
    }


    public function show($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        return response()->json($user);
    }

    public function update(Request $request, $id)
    {
        Log::info('Attempting to update user', ['user_id' => $id]);
    
        $user = User::find($id);
        if (!$user) {
            Log::error('User not found', ['user_id' => $id]);
            return response()->json(['message' => 'User not found'], 404);
        }
    
        $validator = Validator::make($request->all(), [
            'name' => 'string|max:255',
            'email' => ['string', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'phone' => 'string|max:255',
            'address' => 'string|max:255'
        ]);
    
        if ($validator->fails()) {
            Log::error('Validation failed on user update', ['user_id' => $id, 'errors' => $validator->errors()]);
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }
    
        try {
            $user->update($request->all());
            Log::info('User updated successfully', ['user_id' => $id]);
            return response()->json($user);
        } catch (\Exception $e) {
            Log::error('Failed to update user', ['user_id' => $id, 'error' => $e->getMessage()]);
            return response()->json(['message' => 'User update failed', 'error' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        Log::info('Attempting to delete user', ['user_id' => $id]);
    
        $user = User::find($id);
        if (!$user) {
            Log::error('User not found on delete attempt', ['user_id' => $id]);
            return response()->json(['message' => 'User not found'], 404);
        }
    
        try {
            $user->delete();
            Log::info('User deleted successfully', ['user_id' => $id]);
            return response()->json(['message' => 'User deleted']);
        } catch (\Exception $e) {
            Log::error('Failed to delete user', ['user_id' => $id, 'error' => $e->getMessage()]);
            return response()->json(['message' => 'User deletion failed', 'error' => $e->getMessage()], 500);
        }
    }
}
