-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 30, 2018 at 05:55 AM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fiber-track`
--

-- --------------------------------------------------------

--
-- Table structure for table `ft_colors`
--

CREATE TABLE `ft_colors` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `hex_color_code` varchar(50) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` varchar(50) NOT NULL,
  `updated_by` int(11) NOT NULL,
  `updated_at` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ft_colors`
--

INSERT INTO `ft_colors` (`id`, `name`, `hex_color_code`, `created_by`, `created_at`, `updated_by`, `updated_at`) VALUES
(1, 'white', '#FFFFFF', 0, '', 0, 0),
(2, 'black', '#000000', 0, '', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `ft_core_details`
--

CREATE TABLE `ft_core_details` (
  `id` int(11) NOT NULL,
  `fiber_id` int(11) NOT NULL,
  `color_id` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` varchar(50) NOT NULL,
  `updated_by` int(11) NOT NULL,
  `updated_at` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ft_core_details`
--

INSERT INTO `ft_core_details` (`id`, `fiber_id`, `color_id`, `created_by`, `created_at`, `updated_by`, `updated_at`) VALUES
(1, 1, 1, 0, '', 0, ''),
(2, 1, 2, 0, '', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `ft_devices`
--

CREATE TABLE `ft_devices` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `device_category_id` int(11) NOT NULL DEFAULT '0',
  `in_port` int(11) NOT NULL,
  `out_port` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ft_devices`
--

INSERT INTO `ft_devices` (`id`, `name`, `description`, `latitude`, `longitude`, `device_category_id`, `in_port`, `out_port`) VALUES
(17, '1', '1', 27.684929424571, 85.344436168671, 0, 1, 5),
(18, 'Test 2', 'This is a test 2 device', 27.685485205596, 85.346984267235, 0, 1, 5);

-- --------------------------------------------------------

--
-- Table structure for table `ft_device_categories`
--

CREATE TABLE `ft_device_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` varchar(50) NOT NULL,
  `updated_by` int(11) NOT NULL,
  `updated_at` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ft_device_categories`
--

INSERT INTO `ft_device_categories` (`id`, `name`, `created_by`, `created_at`, `updated_by`, `updated_at`) VALUES
(24, 'Untitled', 0, '2017-01-01', 0, '2017-01-01');

-- --------------------------------------------------------

--
-- Table structure for table `ft_fibers`
--

CREATE TABLE `ft_fibers` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `core` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` varchar(50) NOT NULL,
  `updated_by` int(11) NOT NULL,
  `updated_at` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ft_fibers`
--

INSERT INTO `ft_fibers` (`id`, `name`, `core`, `created_by`, `created_at`, `updated_by`, `updated_at`) VALUES
(1, 'Tulima-2-core', 2, 0, '', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `ft_users`
--

CREATE TABLE `ft_users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ft_colors`
--
ALTER TABLE `ft_colors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ft_core_details`
--
ALTER TABLE `ft_core_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fiber_id` (`fiber_id`),
  ADD KEY `color_id` (`color_id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `ft_devices`
--
ALTER TABLE `ft_devices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ft_device_categories`
--
ALTER TABLE `ft_device_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_2` (`id`);

--
-- Indexes for table `ft_fibers`
--
ALTER TABLE `ft_fibers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_2` (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `ft_users`
--
ALTER TABLE `ft_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ft_colors`
--
ALTER TABLE `ft_colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `ft_core_details`
--
ALTER TABLE `ft_core_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `ft_devices`
--
ALTER TABLE `ft_devices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `ft_device_categories`
--
ALTER TABLE `ft_device_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `ft_fibers`
--
ALTER TABLE `ft_fibers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `ft_users`
--
ALTER TABLE `ft_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `ft_core_details`
--
ALTER TABLE `ft_core_details`
  ADD CONSTRAINT `ft_core_details_ibfk_1` FOREIGN KEY (`fiber_id`) REFERENCES `ft_fibers` (`id`),
  ADD CONSTRAINT `ft_core_details_ibfk_2` FOREIGN KEY (`color_id`) REFERENCES `ft_colors` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
