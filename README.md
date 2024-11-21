-----------------------------------------------

# Implementasi Test Backend 1 (Laravel)

Proyek ini adalah implementasi RESTful API yang dikembangkan menggunakan pendekatan arsitektur MVC. API ini mendukung fitur CRUD dasar, autentikasi, dan logging untuk mencatat aktivitas penting, termasuk login, registrasi, dan operasi CRUD.

### CRUD Operations
- **Create**: Menambahkan data baru ke database.
- **Read**: Membaca data yang tersedia dari database.
- **Update**: Memperbarui data yang sudah ada.
- **Delete**: Menghapus data dari database.

### Authentication & Authorization
- API ini mendukung autentikasi pengguna menggunakan JSON Web Token (JWT). 
- Hanya pengguna yang telah terautentikasi yang dapat mengakses endpoint tertentu untuk melindungi data dan operasi.

### Logging
- Setiap aktivitas berikut dicatat ke dalam file log untuk memudahkan pemantauan dan debugging:
  - Aktivitas login dan registrasi pengguna.
  - Operasi CRUD (Create, Read, Update, Delete).
  - Error yang terjadi selama proses request.
- Log disimpan di file `storage/logs/laravel.log` atau direktori yang sesuai dengan konfigurasi logging.

### Design Pattern: MVC (Model-View-Controller)

-----------------------------------------------

# Implementasi Test Frontend (ReactJs)



### Fitur Dasar (CRUD)
- **Tambah Tugas (Add Task):** Pengguna dapat menambahkan tugas baru ke dalam daftar.
- **Edit Tugas (Edit Task):** Tugas yang ada dapat diubah sesuai kebutuhan pengguna.
- **Hapus Tugas (Delete Task):** Tugas yang tidak lagi relevan dapat dihapus dari daftar.

### Fitur Tambahan
- **Tandai Selesai (Mark as Done/Completed):** Tugas dapat ditandai sebagai selesai
- **Animasi:** Animasi diterapkan pada tugas saat ditambahkan, dihapus, atau diedit.
- **Pencarian Tugas (Search Bar):** Pengguna dapat mencari tugas spesifik menggunakan kata kunci di search bar.
- **Integrasi API Publik:** Berhasil Menambah Quote Of The Day dari api public
- **Design Pattern:** Component-based architecture dan state management untuk mengelola data aplikasi.
- **Pengujian Unit (Unit Testing)** 


----
# Implementasi Test Mobile (Flutter)



### Fitur Dasar (CRUD)
- **Tambah Tugas (Add Task):** Pengguna dapat menambahkan tugas baru ke dalam daftar.
- **Edit Tugas (Edit Task):** Tugas yang ada dapat diubah sesuai kebutuhan pengguna.
- **Hapus Tugas (Delete Task):** Tugas yang tidak lagi relevan dapat dihapus dari daftar.




