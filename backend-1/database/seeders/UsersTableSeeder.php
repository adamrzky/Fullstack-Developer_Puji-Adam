<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class UsersTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Adam',
                'email' => 'adam@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password123'),
                'phone' => '0879382887',
                'address' => 'Bandung',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Andreas',
                'email' => 'andreas@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password123'),
                'phone' => '08789726112',
                'address' => 'Jakarta',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }
}
