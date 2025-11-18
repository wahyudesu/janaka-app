# Product Requirements Document (PRD)

## Judul

Gamifikasi Aplikasi Fullstack untuk Komunitas Janaka

## Latar Belakang

Banyak komunitas membutuhkan cara untuk meningkatkan engagement dan partisipasi anggota. Gamifikasi dapat menjadi solusi untuk mendorong interaksi, loyalitas, dan pertumbuhan komunitas

## Tujuan

- Meningkatkan partisipasi anggota komunitas.
- Mendorong interaksi antar anggota.
- Memberikan penghargaan atas kontribusi positif.
- Profile Digital Komunitas

## Fitur Utama

1. Poin & Level
   - Anggota mendapatkan poin untuk aktivitas seperti posting, komentar, like, dan share.
   - Level anggota meningkat berdasarkan akumulasi poin.

2. Leaderboard
   - Menampilkan peringkat anggota berdasarkan poin tertinggi.

3. Misi/Quest
   - Tantangan mingguan/bulanan yang dapat diselesaikan untuk mendapatkan poin ekstra.

## Alur Pengguna (User Flow)

1. Anggota dapat mengakses website landingpage dan bisa login
2. Jika mencapai milestone, anggota mendapat badge/naik level.
3. Anggota dapat melihat leaderboard dan badge di profil.
4. Admin dapat membuat/mengatur misi baru.

## Kebutuhan Teknis

- **Frontend**: Next.js (React), UI untuk leaderboard, badge, profil, dsb.
- **Backend**: API untuk manajemen poin, badge, misi, leaderboard.
- **Database**: Menyimpan data user, poin, badge, misi, dsb.
- **Notifikasi**: Real-time (misal: WebSocket atau push notification).

## Tech stack

Cloudflare, Next JS, Tailwind, Drizzle, Neon

## Indikator Sukses

- Peningkatan jumlah aktivitas anggota.
- Banyak anggota yang naik level atau mendapatkan badge.
- Feedback positif dari anggota komunitas.

## Catatan Tambahan

- Sistem harus fleksibel untuk penambahan misi/badge baru.
- Perlu dashboard admin untuk monitoring dan manajemen gamifikasi.