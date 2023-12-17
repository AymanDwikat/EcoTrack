-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 17, 2023 at 06:42 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `echotrack`
--

-- --------------------------------------------------------

--
-- Table structure for table `alerts`
--

CREATE TABLE `alerts` (
  `alertId` int(11) NOT NULL,
  `alertType` varchar(255) DEFAULT NULL,
  `threshold` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `datacollections`
--

CREATE TABLE `datacollections` (
  `dataId` int(11) NOT NULL,
  `dataType` varchar(255) NOT NULL,
  `key` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `value` float NOT NULL,
  `source` varchar(255) NOT NULL,
  `unit` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `educationals`
--

CREATE TABLE `educationals` (
  `educationalid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `opendata`
--

CREATE TABLE `opendata` (
  `accessId` int(11) NOT NULL,
  `organization` varchar(255) DEFAULT NULL,
  `key` varchar(255) NOT NULL,
  `permession` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `reportId` int(11) NOT NULL,
  `reportType` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `scores`
--

CREATE TABLE `scores` (
  `scoreId` int(11) NOT NULL,
  `scoreValue` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20231217123313-create-post.js'),
('20231217124530-create-users.js'),
('20231217124925-create-opendata.js'),
('20231217131524-create-score.js'),
('20231217131704-create-report.js'),
('20231217131947-create-datacollection.js'),
('20231217132018-create-educational.js'),
('20231217132527-create-alert.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `interests` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `name`, `email`, `password`, `location`, `role`, `interests`) VALUES
(1, 'ayman', 'ayman@gmail.com', '12345', 'nablus', 'myrole', 'myint'),
(2, 'obada kamal', 'obada@gmail.com', '1234567890', 'jenin', 'obadarole', 'obabdint'),
(3, 'aymanemad', 'aymanemad@gmai.com', '123456', 'nablus', 'dd', 'dd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alerts`
--
ALTER TABLE `alerts`
  ADD PRIMARY KEY (`alertId`);

--
-- Indexes for table `datacollections`
--
ALTER TABLE `datacollections`
  ADD PRIMARY KEY (`dataId`);

--
-- Indexes for table `educationals`
--
ALTER TABLE `educationals`
  ADD PRIMARY KEY (`educationalid`);

--
-- Indexes for table `opendata`
--
ALTER TABLE `opendata`
  ADD PRIMARY KEY (`accessId`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`reportId`);

--
-- Indexes for table `scores`
--
ALTER TABLE `scores`
  ADD PRIMARY KEY (`scoreId`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alerts`
--
ALTER TABLE `alerts`
  MODIFY `alertId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `datacollections`
--
ALTER TABLE `datacollections`
  MODIFY `dataId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `educationals`
--
ALTER TABLE `educationals`
  MODIFY `educationalid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `opendata`
--
ALTER TABLE `opendata`
  MODIFY `accessId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `reportId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `scores`
--
ALTER TABLE `scores`
  MODIFY `scoreId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
