-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 09, 2022 at 07:58 AM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `creazione_crm`
--

-- --------------------------------------------------------

--
-- Table structure for table `agreement`
--

DROP TABLE IF EXISTS `agreement`;
CREATE TABLE IF NOT EXISTS `agreement` (
  `agreement_id` int(11) NOT NULL AUTO_INCREMENT,
  `printed_on` datetime NOT NULL,
  `upload_on` datetime NOT NULL,
  `file_url` varchar(100) NOT NULL,
  PRIMARY KEY (`agreement_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `associate`
--

DROP TABLE IF EXISTS `associate`;
CREATE TABLE IF NOT EXISTS `associate` (
  `associate_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `gender` tinyint(4) NOT NULL COMMENT '0-male 1-female 2-others',
  `email` varchar(80) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `document_id` int(11) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '1-active 0-not active',
  PRIMARY KEY (`associate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `associate`
--

INSERT INTO `associate` (`associate_id`, `name`, `gender`, `email`, `phone`, `document_id`, `pass`, `image`, `status`) VALUES
(1, 'Associate New', 0, 'associate@gmail.com', '9876543210', 1, 'hqwgdjwqhgdjqwhgdjgdvajhasjdhfsadasfjdashdjafhd', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `bank_account`
--

DROP TABLE IF EXISTS `bank_account`;
CREATE TABLE IF NOT EXISTS `bank_account` (
  `account_no` varchar(40) NOT NULL,
  `ifsc_code` varchar(40) NOT NULL,
  `branch` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_type` int(11) NOT NULL COMMENT '1-customer 2- associate 3-employee',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  UNIQUE KEY `account_no` (`account_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `gender` tinyint(4) NOT NULL COMMENT '0-male 1-female 2-others',
  `email` varchar(80) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `document_id` int(11) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '1-active 0-not active',
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `name`, `gender`, `email`, `phone`, `document_id`, `pass`, `image`, `status`) VALUES
(1, 'Customer Bhai', 1, 'customer@gmail.com', '1234567890', 0, 'sjadksgdsjgdkjasgdkasjdgkasgdakj', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `designation`
--

DROP TABLE IF EXISTS `designation`;
CREATE TABLE IF NOT EXISTS `designation` (
  `designation_id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  PRIMARY KEY (`designation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `document`
--

DROP TABLE IF EXISTS `document`;
CREATE TABLE IF NOT EXISTS `document` (
  `document_id` int(11) NOT NULL AUTO_INCREMENT,
  `adhar_no` varchar(20) NOT NULL,
  `pan_no` varchar(20) NOT NULL,
  `address` varchar(200) NOT NULL,
  `adhar_verified` tinyint(1) NOT NULL,
  `pan_verified` tinyint(1) NOT NULL,
  PRIMARY KEY (`document_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `document`
--

INSERT INTO `document` (`document_id`, `adhar_no`, `pan_no`, `address`, `adhar_verified`, `pan_verified`) VALUES
(1, '88282828282', 'JAJJAJAJAJ', 'Kolkata', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
CREATE TABLE IF NOT EXISTS `employee` (
  `employee_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `gender` tinyint(4) NOT NULL COMMENT '0-male 1-female 2-others',
  `email` varchar(80) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `document_id` int(11) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '1-active 0-not active',
  PRIMARY KEY (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employee_id`, `name`, `gender`, `email`, `phone`, `document_id`, `pass`, `image`, `status`) VALUES
(1, 'Employee One', 0, 'employee@gmail.com', '8778786543', 0, 'jbsakdjkasgdjas cnbsjbcxasuhdiuqsydqwiydqw', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `employee_info`
--

DROP TABLE IF EXISTS `employee_info`;
CREATE TABLE IF NOT EXISTS `employee_info` (
  `employee_id` int(11) NOT NULL,
  `designation_id` int(11) NOT NULL,
  `salary_id` int(11) NOT NULL,
  `dob` date NOT NULL,
  `report_to` int(11) DEFAULT NULL,
  `joining_date` date NOT NULL,
  `acceptance_file` varchar(100) NOT NULL,
  `id_card` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `investment`
--

DROP TABLE IF EXISTS `investment`;
CREATE TABLE IF NOT EXISTS `investment` (
  `investment_id` int(11) NOT NULL AUTO_INCREMENT,
  `ammount` float NOT NULL,
  `date_time` datetime NOT NULL,
  `roi` float NOT NULL,
  `nominee_id` int(11) NOT NULL,
  `account_no` varchar(40) NOT NULL,
  `payment_id` varchar(100) NOT NULL,
  `agreement_id` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL COMMENT '1-active 0-close',
  PRIMARY KEY (`investment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `nominee`
--

DROP TABLE IF EXISTS `nominee`;
CREATE TABLE IF NOT EXISTS `nominee` (
  `nominee_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `dob` date NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_type` int(11) NOT NULL COMMENT '1-customer 2-associate',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`nominee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
CREATE TABLE IF NOT EXISTS `payment` (
  `payment_id` int(11) NOT NULL AUTO_INCREMENT,
  `transaction_time` datetime NOT NULL,
  `purpose` varchar(50) NOT NULL,
  `payment_mode` varchar(40) NOT NULL,
  `to_account` varchar(40) NOT NULL,
  `ammount` double NOT NULL,
  `status` tinyint(4) NOT NULL COMMENT '1-success 0-failed 2-pending',
  `transaction_id` varchar(40) NOT NULL,
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `qualification`
--

DROP TABLE IF EXISTS `qualification`;
CREATE TABLE IF NOT EXISTS `qualification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `degree_name` varchar(100) NOT NULL,
  `year_of_pass` int(11) NOT NULL,
  `degree_from` varchar(100) NOT NULL,
  `marks` float NOT NULL,
  `document_url` varchar(100) NOT NULL,
  `employee_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `qualification`
--

INSERT INTO `qualification` (`id`, `degree_name`, `year_of_pass`, `degree_from`, `marks`, `document_url`, `employee_id`) VALUES
(1, 'B.Tech', 2020, 'MAKAUT', 78, '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
CREATE TABLE IF NOT EXISTS `request` (
  `request_id` int(11) NOT NULL,
  `requset_type` tinyint(4) NOT NULL COMMENT '1-csp 2-associate 3-others',
  `customer_id` int(11) NOT NULL,
  `request_date` datetime NOT NULL,
  `comments` varchar(200) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '2' COMMENT '0-reject 1-accepted 2-pending 3-others',
  PRIMARY KEY (`request_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `salary`
--

DROP TABLE IF EXISTS `salary`;
CREATE TABLE IF NOT EXISTS `salary` (
  `salary_id` int(11) NOT NULL,
  `basic` float NOT NULL DEFAULT '0',
  `hra` float NOT NULL DEFAULT '0',
  `conveyance` float NOT NULL DEFAULT '0',
  `medical` float NOT NULL DEFAULT '0',
  `special` float NOT NULL DEFAULT '0',
  `pf` float NOT NULL DEFAULT '0',
  `insurance` float NOT NULL DEFAULT '0',
  `tax` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`salary_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `salary`
--

INSERT INTO `salary` (`salary_id`, `basic`, `hra`, `conveyance`, `medical`, `special`, `pf`, `insurance`, `tax`) VALUES
(1, 12000, 4000, 1000, 0, 0, 300, 100, 100);

-- --------------------------------------------------------

--
-- Table structure for table `withdraw_request`
--

DROP TABLE IF EXISTS `withdraw_request`;
CREATE TABLE IF NOT EXISTS `withdraw_request` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_type` int(11) NOT NULL,
  `account_no` varchar(40) NOT NULL,
  `ammount` float NOT NULL,
  `request_time` datetime NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '2' COMMENT '0-rejected 1-success 2-pending',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `work_report`
--

DROP TABLE IF EXISTS `work_report`;
CREATE TABLE IF NOT EXISTS `work_report` (
  `report_id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `report_date` date NOT NULL,
  `start_time` time NOT NULL,
  `submit_time` time NOT NULL,
  `report` varchar(1000) NOT NULL,
  `document_url` varchar(100) NOT NULL,
  `status` int(11) NOT NULL COMMENT '1-accept 0-reject 2-pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
