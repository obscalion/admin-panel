import bcrypt from "bcryptjs";

const API_URL = "http://localhost:3001/users";

/**
 * Mengambil semua data user dari json-server
 */
export async function fetchUsers() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Gagal mengambil data user");
  }
  const users = await response.json();
  return users;
}

/**
 * Fungsi untuk mengautentikasi user berdasarkan username dan password input
 * @param {string} username - Nama pengguna yang diinput
 * @param {string} passwordInput - Password yang diinput (plain text)
 * @returns {object} - Data user jika cocok
 */
export async function authenticateUser(username, passwordInput) {
  const users = await fetchUsers();
  const user = users.find((u) => u.username === username);

  if (!user) {
    throw new Error("User tidak ditemukan");
  }

  const isPasswordValid = await bcrypt.compare(passwordInput, user.password); // `user.password` harus hashed
  if (!isPasswordValid) {
    throw new Error("Password salah");
  }

  return user;
}
