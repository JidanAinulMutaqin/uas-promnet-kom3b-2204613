-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2024 at 07:48 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2204613_jidanainulmutaqin_uas_pilkomb`
--

-- --------------------------------------------------------

--
-- Table structure for table `peminjamanbuku_jidanainulmutaqin`
--

CREATE TABLE `peminjamanbuku_jidanainulmutaqin` (
  `id` int(11) NOT NULL,
  `judul_buku` varchar(200) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `nama_peminjam` varchar(200) NOT NULL,
  `alamat_peminjam` varchar(200) NOT NULL,
  `noHP_peminjam` varchar(12) NOT NULL,
  `tanggal_pinjam` date NOT NULL,
  `tanggal_pengembalian` date NOT NULL,
  `lama_pinjam` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `peminjamanbuku_jidanainulmutaqin`
--

INSERT INTO `peminjamanbuku_jidanainulmutaqin` (`id`, `judul_buku`, `jumlah`, `nama_peminjam`, `alamat_peminjam`, `noHP_peminjam`, `tanggal_pinjam`, `tanggal_pengembalian`, `lama_pinjam`) VALUES
(1, 'The Grand Design', 1, 'Rusman Hadi', 'Palembang', '081221934521', '2024-01-01', '2024-01-07', '7 hari'),
(2, 'Chinese Wisdom', 1, 'Jidan', 'Ciamis', '081221928402', '2024-01-07', '2024-01-09', '2 Hari'),
(3, 'Koala Kumal', 2, 'Arisani', 'Cianjur', '081221934523', '2024-01-07', '2024-01-21', '14 hari'),
(4, '1984', 1, 'Dadang', 'Babakan Limus', '081221934525', '2024-01-02', '2024-01-09', '7 hari'),
(5, 'Educated', 4, 'Jikroy', 'Garut', '081221934522', '2024-01-07', '2024-01-28', '21 hari');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `peminjamanbuku_jidanainulmutaqin`
--
ALTER TABLE `peminjamanbuku_jidanainulmutaqin`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `peminjamanbuku_jidanainulmutaqin`
--
ALTER TABLE `peminjamanbuku_jidanainulmutaqin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
