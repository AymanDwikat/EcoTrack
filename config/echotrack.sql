-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 23, 2023 at 04:56 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

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
  `threshold` float DEFAULT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `datacollections`
--

CREATE TABLE `datacollections` (
  `dataId` int(11) NOT NULL,
  `dataType` varchar(255) NOT NULL,
  `datakey` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `value` float NOT NULL,
  `source` varchar(255) NOT NULL,
  `unit` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `datacollections`
--

INSERT INTO `datacollections` (`dataId`, `dataType`, `datakey`, `location`, `value`, `source`, `unit`, `userId`) VALUES
(7, 'humidity', 'sensor', 'biet-foureek', 24.5, 'sensor', 'g.m', 3),
(10, 'temp', 'sensor', 'Nablus', 13, 'sensor', 'C', 3);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `educationals`
--

INSERT INTO `educationals` (`educationalid`, `title`, `description`, `url`, `category`) VALUES
(2, 'Introduction to Sustainable Energy', 'Learn the basics of sustainable energy sources and their impact on the environment.', 'https://www.routledge.com/blog/article/what-is-sustainable-energy-and-why-do-we-need-it', ' Energy');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `reportId` int(11) NOT NULL,
  `reportType` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`reportId`, `reportType`, `description`, `location`, `userId`) VALUES
(1, 'Form', 'hi this my form', 'Nablus', 1),
(2, 'Json', 'hi this my Json', 'Beita', 1);

-- --------------------------------------------------------

--
-- Table structure for table `scores`
--

CREATE TABLE `scores` (
  `scoreId` int(11) NOT NULL,
  `scoreValue` float NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `scores`
--

INSERT INTO `scores` (`scoreId`, `scoreValue`, `userId`) VALUES
(1, 0.6, 1),
(2, 5.6, 2),
(3, 15, 3);

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `name`, `email`, `password`, `location`, `role`, `interests`) VALUES
(1, 'ayman', 'ayman@gmail.com', '12345', 'nablus', 'myrole', 'myint'),
(2, 'obada kamal', 'obada@gmail.com', '1234567890', 'jenin', 'obadarole', 'obabdint'),
(3, 'Ezz', 'ezzmletatmletat@gmail.com', '123456', 'nablus', 'dd', 'dd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alerts`
--
ALTER TABLE `alerts`
  ADD PRIMARY KEY (`alertId`),
  ADD KEY `fk_alerts_users` (`userId`);

--
-- Indexes for table `datacollections`
--
ALTER TABLE `datacollections`
  ADD PRIMARY KEY (`dataId`),
  ADD KEY `fk_datacollections_users` (`userId`);

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
  ADD PRIMARY KEY (`reportId`),
  ADD KEY `fk_reports_users` (`userId`);

--
-- Indexes for table `scores`
--
ALTER TABLE `scores`
  ADD PRIMARY KEY (`scoreId`),
  ADD KEY `fk_scores_users` (`userId`);

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
  MODIFY `dataId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `educationals`
--
ALTER TABLE `educationals`
  MODIFY `educationalid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `opendata`
--
ALTER TABLE `opendata`
  MODIFY `accessId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `reportId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `scores`
--
ALTER TABLE `scores`
  MODIFY `scoreId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `alerts`
--
ALTER TABLE `alerts`
  ADD CONSTRAINT `fk_alerts_users` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`);

--
-- Constraints for table `datacollections`
--
ALTER TABLE `datacollections`
  ADD CONSTRAINT `fk_datacollections_users` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`);

--
-- Constraints for table `reports`
--
ALTER TABLE `reports`
  ADD CONSTRAINT `fk_reports_users` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`);

--
-- Constraints for table `scores`
--
ALTER TABLE `scores`
  ADD CONSTRAINT `fk_scores_users` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
