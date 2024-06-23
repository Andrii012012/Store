-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 23 2024 г., 15:32
-- Версия сервера: 10.5.17-MariaDB
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `userStore`
--

-- --------------------------------------------------------

--
-- Структура таблицы `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `locality` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `postcode` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `idAddress` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `address`
--

INSERT INTO `address` (`id`, `name`, `surname`, `country`, `address`, `locality`, `area`, `postcode`, `phone`, `email`, `idAddress`) VALUES
(1, 'andrii', 'Ivanchov', 'Украина', 'unkown', 'unkown', 'Svalava', '1231231231', '+38095854955', 'retortop72@gmail.com', 1),
(47, 'andrii', 'Ivanchov', 'Украина', 'unkown', 'unkown', 'Svalava', '1231231231', '+38095813132', 'retortop72@gmail.com', 47);

-- --------------------------------------------------------

--
-- Структура таблицы `addressOrder`
--

CREATE TABLE `addressOrder` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `locality` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `postcode` varchar(255) DEFAULT NULL,
  `idOrder` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `addressOrder`
--

INSERT INTO `addressOrder` (`id`, `name`, `surname`, `country`, `locality`, `phone`, `email`, `area`, `postcode`, `idOrder`) VALUES
(1, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 120),
(2, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 121),
(3, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 122),
(4, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 123),
(8, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 143),
(9, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 144),
(10, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 145),
(11, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 146),
(12, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 147),
(13, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 148),
(14, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 149),
(15, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 150),
(16, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 151),
(17, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 152),
(18, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 153),
(19, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 154),
(20, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 155),
(21, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 156),
(22, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 157),
(23, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 158),
(24, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 159),
(25, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 160),
(26, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 161),
(27, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 162),
(28, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 163),
(29, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 164),
(30, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 165),
(31, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 166),
(32, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 167),
(33, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 168),
(34, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 169),
(35, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 170),
(36, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 171),
(37, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 172),
(38, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 173),
(39, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 174),
(40, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 175),
(41, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 176),
(42, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 177),
(43, 'andrii', 'Ivanchov', 'Украина', 'unkown', '+38095854955', 'retortop72@gmail.com', 'Svalava', '1231231231', 178);

-- --------------------------------------------------------

--
-- Структура таблицы `basket`
--

CREATE TABLE `basket` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) NOT NULL,
  `things` varchar(255) NOT NULL,
  `volume` int(11) DEFAULT 10,
  `idBasket` int(11) NOT NULL,
  `checked` tinyint(1) DEFAULT 0,
  `originPrice` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `basket`
--

INSERT INTO `basket` (`id`, `name`, `price`, `things`, `volume`, `idBasket`, `checked`, `originPrice`) VALUES
(138, 'The devil is a loser by Mushfig', '493', '1', 30, 33, 0, 493),
(139, 'The devil is a loser by Mushfig', '2283', '1', 30, 33, 0, 2283),
(140, 'The devil is a loser by Mushfig', '493', '1', 30, 33, 0, 493),
(141, 'The devil is a loser by Mushfig', '493', '1', 30, 33, 0, 493),
(142, 'The devil is a loser by Mushfig', '2283', '1', 30, 33, 0, 2283),
(143, 'The devil is a loser by Mushfig', '9275', '1', 30, 33, 0, 9275),
(144, 'The devil is a loser by Mushfig', '9275', '1', 30, 33, 0, 9275),
(145, 'The devil is a loser by Mushfig', '2283', '1', 30, 33, 0, 2283),
(146, 'The devil is a loser by Mushfig', '493', '1', 30, 33, 0, 493),
(147, 'The devil is a loser by Mushfig', '2283', '1', 10, 44, 0, 2283),
(148, 'The devil is a loser by Mushfig', '8795', '1', 10, 44, 0, 8795),
(149, 'The devil is a loser by Mushfig', '294', '1', 10, 44, 0, 294),
(150, 'The devil is a loser by Mushfig', '294', '1', 10, 44, 0, 294),
(151, 'The devil is a loser by Mushfig', '294', '1', 10, 44, 0, 294),
(152, 'The devil is a loser by Mushfig', '8795', '1', 10, 44, 0, 8795),
(153, 'The devil is a loser by Mushfig', '8795', '1', 10, 44, 0, 8795),
(154, 'The devil is a loser by Mushfig', '8795', '1', 10, 44, 0, 8795),
(155, 'The devil is a loser by Mushfig', '2283', '1', 10, 44, 0, 2283),
(156, 'The devil is a loser by Mushfig', '2283', '1', 10, 44, 0, 2283),
(157, 'The devil is a loser by Mushfig', '2283', '1', 10, 44, 0, 2283),
(158, 'The devil is a loser by Mushfig', '2283', '1', 10, 44, 0, 2283),
(159, 'The devil is a loser by Mushfig', '2283', '1', 10, 44, 0, 2283),
(160, 'The devil is a loser by Mushfig', '2283', '1', 10, 44, 0, 2283),
(161, 'The devil is a loser by Mushfig', '2283', '1', 10, 44, 0, 2283),
(162, 'The devil is a loser by Mushfig', '2283', '1', 10, 44, 0, 2283),
(185, 'The devil is a loser by Mushfig', '5231', '1', 30, 46, 0, 5231),
(189, 'The devil is a loser by Mushfig', '5231', '1', 30, 46, 0, 5231),
(190, 'The devil is a loser by Mushfig', '5231', '1', 30, 46, 0, 5231),
(191, 'The devil is a loser by Mushfig', '7058', '1', 30, 46, 0, 7058),
(200, 'The devil is a loser by Mushfig', '2210', '1', 30, 46, 0, 2210),
(201, 'The devil is a loser by Mushfig', '438', '1', 30, 46, 0, 438),
(202, 'The devil is a loser by Mushfig', '2210', '1', 30, 46, 0, 2210),
(203, 'The devil is a loser by Mushfig', '462', '1', 30, 46, 0, 462),
(204, 'The devil is a loser by Mushfig', '438', '1', 30, 46, 0, 438),
(205, 'The devil is a loser by Mushfig', '2210', '1', 30, 46, 0, 2210),
(206, 'The devil is a loser by Mushfig', '462', '1', 30, 46, 0, 462),
(207, 'The devil is a loser by Mushfig', '462', '1', 10, 46, 0, 462),
(208, 'The devil is a loser by Mushfig', '2847', '1', 10, 46, 0, 2847),
(209, 'The devil is a loser by Mushfig', '2847', '1', 10, 46, 0, 2847),
(210, 'The devil is a loser by Mushfig', '2847', '1', 10, 46, 0, 2847),
(211, 'The devil is a loser by Mushfig', '2847', '1', 10, 46, 0, 2847),
(212, 'The devil is a loser by Mushfig', '2847', '1', 10, 46, 0, 2847),
(213, 'The devil is a loser by Mushfig', '462', '1', 10, 46, 0, 462),
(214, 'The devil is a loser by Mushfig', '462', '1', 10, 46, 0, 462),
(215, 'The devil is a loser by Mushfig', '462', '1', 10, 46, 0, 462),
(216, 'The devil is a loser by Mushfig', '438', '1', 10, 46, 0, 438),
(217, 'The devil is a loser by Mushfig', '438', '1', 10, 46, 0, 438),
(218, 'The devil is a loser by Mushfig', '438', '1', 10, 46, 0, 438),
(219, 'The devil is a loser by Mushfig', '438', '1', 10, 46, 0, 438),
(220, 'The devil is a loser by Mushfig', '438', '1', 10, 46, 0, 438),
(221, 'The devil is a loser by Mushfig', '438', '1', 100, 46, 0, 438),
(222, 'The devil is a loser by Mushfig', '438', '1', 100, 46, 0, 438),
(223, 'The devil is a loser by Mushfig', '462', '1', 50, 46, 0, 462),
(224, 'The devil is a loser by Mushfig', '2847', '1', 50, 46, 0, 2847),
(337, 'The devil is a loser by Mushfig', '797', '1', 10, 47, 0, 797),
(338, 'The devil is a loser by Mushfig', '797', '1', 10, 47, 0, 797),
(339, 'The devil is a loser by Mushfig', '797', '1', 10, 47, 0, 797),
(340, 'The devil is a loser by Mushfig', '978', '1', 30, 47, 0, 978),
(341, 'The devil is a loser by Mushfig', '320', '1', 30, 47, 0, 320),
(342, 'The devil is a loser by Mushfig', '2210', '1', 10, 47, 0, 2210),
(343, 'The devil is a loser by Mushfig', '203', '1', 10, 47, 0, 203),
(344, 'The devil is a loser by Mushfig', '493', '1', 10, 47, 0, 493),
(345, 'The devil is a loser by Mushfig', '493', '1', 10, 47, 0, 493),
(346, 'The devil is a loser by Mushfig', '493', '1', 10, 47, 0, 493),
(347, 'The devil is a loser by Mushfig', '493', '1', 10, 47, 0, 493),
(350, 'The devil is a loser by Mushfig', '5231', '1', 30, 47, 0, 5231),
(351, 'The devil is a loser by Mushfig', '5231', '1', 30, 47, 0, 5231),
(352, 'The devil is a loser by Mushfig', '5231', '1', 30, 47, 1, 5231),
(353, 'The devil is a loser by Mushfig', '5231', '1', 30, 47, 1, 5231),
(354, 'The devil is a loser by Mushfig', '5231', '1', 30, 47, 1, 5231),
(355, 'The devil is a loser by Mushfig', '5231', '1', 30, 47, 1, 5231),
(356, 'The devil is a loser by Mushfig', '2283', '1', 10, 47, 1, 2283),
(357, 'The devil is a loser by Mushfig', '2283', '1', 10, 47, 1, 2283),
(358, 'The devil is a loser by Mushfig', '2283', '1', 10, 47, 1, 2283),
(359, 'The devil is a loser by Mushfig', '2283', '1', 10, 47, 1, 2283),
(360, 'The devil is a loser by Mushfig', '2210', '1', 10, 47, 1, 2210),
(361, 'The devil is a loser by Mushfig', '2210', '1', 10, 47, 1, 2210),
(362, 'The devil is a loser by Mushfig', '2283', '1', 10, 47, 1, 2283),
(363, 'The devil is a loser by Mushfig', '797', '1', 10, 47, 1, 797),
(364, 'The devil is a loser by Mushfig', '797', '1', 10, 47, 1, 797),
(365, 'The devil is a loser by Mushfig', '2210', '1', 10, 47, 1, 2210),
(366, 'The devil is a loser by Mushfig', '2210', '1', 10, 47, 1, 2210),
(367, 'The devil is a loser by Mushfig', '2210', '1', 10, 47, 1, 2210),
(368, 'The devil is a loser by Mushfig', '2283', '1', 10, 47, 1, 2283),
(369, 'The devil is a loser by Mushfig', '2283', '1', 10, 47, 1, 2283),
(370, 'The devil is a loser by Mushfig', '7058', '1', 10, 47, 0, 7058),
(371, 'The devil is a loser by Mushfig', '7058', '1', 10, 47, 0, 7058),
(372, 'The devil is a loser by Mushfig', '7058', '1', 10, 47, 0, 7058),
(373, 'The devil is a loser by Mushfig', '7058', '1', 10, 47, 0, 7058),
(374, 'The devil is a loser by Mushfig', '2847', '1', 10, 47, 0, 2847),
(375, 'The devil is a loser by Mushfig', '2847', '1', 10, 47, 0, 2847),
(376, 'The devil is a loser by Mushfig', '2847', '1', 10, 47, 0, 2847),
(377, 'The devil is a loser by Mushfig', '2847', '1', 10, 47, 0, 2847),
(378, 'The devil is a loser by Mushfig', '2847', '1', 10, 47, 0, 2847),
(379, 'The devil is a loser by Mushfig', '2847', '1', 10, 47, 0, 2847),
(380, 'The devil is a loser by Mushfig', '598', '1', 30, 47, 0, 598),
(381, 'The devil is a loser by Mushfig', '462', '1', 50, 47, 0, 462),
(382, 'The devil is a loser by Mushfig', '462', '1', 50, 47, 0, 462),
(383, 'The devil is a loser by Mushfig', '598', '1', 30, 47, 0, 598),
(384, 'The devil is a loser by Mushfig', '598', '1', 30, 47, 0, 598),
(385, 'The devil is a loser by Mushfig', '598', '1', 30, 47, 0, 598),
(386, 'The devil is a loser by Mushfig', '598', '1', 30, 47, 0, 598),
(387, 'The devil is a loser by Mushfig', '9275', '1', 10, 47, 0, 9275),
(388, 'The devil is a loser by Mushfig', '9275', '1', 10, 47, 0, 9275),
(389, 'The devil is a loser by Mushfig', '9275', '1', 10, 47, 0, 9275),
(390, 'The devil is a loser by Mushfig', '9275', '1', 10, 47, 0, 9275),
(391, 'The devil is a loser by Mushfig', '9275', '1', 10, 47, 0, 9275),
(392, 'The devil is a loser by Mushfig', '9275', '1', 10, 47, 0, 9275),
(393, 'The devil is a loser by Mushfig', '320', '1', 30, 47, 0, 320),
(394, 'The devil is a loser by Mushfig', '665', '1', 30, 47, 0, 665),
(395, 'The devil is a loser by Mushfig', '665', '1', 30, 47, 0, 665),
(396, 'The devil is a loser by Mushfig', '320', '1', 30, 47, 0, 320),
(397, 'The devil is a loser by Mushfig', '2400', '1', 30, 47, 0, 2400),
(398, 'The devil is a loser by Mushfig', '2400', '1', 30, 47, 0, 2400),
(399, 'The devil is a loser by Mushfig', '320', '1', 30, 47, 0, 320),
(400, 'The devil is a loser by Mushfig', '320', '1', 30, 47, 0, 320),
(401, 'The devil is a loser by Mushfig', '665', '1', 30, 47, 0, 665),
(402, 'The devil is a loser by Mushfig', '320', '1', 30, 47, 0, 320),
(403, 'The devil is a loser by Mushfig', '320', '1', 30, 47, 0, 320),
(404, 'The devil is a loser by Mushfig', '320', '1', 30, 47, 0, 320),
(405, 'The devil is a loser by Mushfig', '320', '1', 30, 47, 0, 320),
(406, 'The devil is a loser by Mushfig', '320', '1', 30, 47, 0, 320),
(407, 'The devil is a loser by Mushfig', '320', '1', 30, 47, 0, 320),
(408, 'The devil is a loser by Mushfig', '320', '1', 30, 47, 0, 320),
(409, 'The devil is a loser by Mushfig', '665', '1', 30, 47, 0, 665),
(410, 'The devil is a loser by Mushfig', '665', '1', 30, 47, 0, 665),
(411, 'The devil is a loser by Mushfig', '665', '1', 30, 47, 0, 665),
(412, 'The devil is a loser by Mushfig', '665', '1', 30, 47, 0, 665),
(413, 'The devil is a loser by Mushfig', '2400', '1', 30, 47, 0, 2400),
(414, 'The devil is a loser by Mushfig', '2400', '1', 30, 47, 0, 2400),
(415, 'The devil is a loser by Mushfig', '2400', '1', 30, 47, 0, 2400),
(416, 'The devil is a loser by Mushfig', '2400', '1', 30, 47, 0, 2400),
(417, 'The devil is a loser by Mushfig', '2400', '1', 30, 47, 0, 2400),
(418, 'The devil is a loser by Mushfig', '2400', '1', 30, 47, 0, 2400),
(419, 'The devil is a loser by Mushfig', '2400', '1', 30, 47, 0, 2400);

-- --------------------------------------------------------

--
-- Структура таблицы `consistOrders`
--

CREATE TABLE `consistOrders` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `idOrder` int(255) NOT NULL,
  `things` int(11) DEFAULT 0,
  `volume` int(11) DEFAULT 10
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `consistOrders`
--

INSERT INTO `consistOrders` (`id`, `name`, `idOrder`, `things`, `volume`) VALUES
(238, 'The devil is a loser by Mushfig', 145, 1, 30),
(239, 'The devil is a loser by Mushfig', 145, 1, 30),
(240, 'The devil is a loser by Mushfig', 146, 4, 0),
(241, 'The devil is a loser by Mushfig', 147, 1, 30),
(242, 'The devil is a loser by Mushfig', 148, 1, 10),
(243, 'The devil is a loser by Mushfig', 149, 1, 30),
(244, 'The devil is a loser by Mushfig', 150, 1, 30),
(245, 'The devil is a loser by Mushfig', 151, 1, 30),
(246, 'The devil is a loser by Mushfig', 152, 1, 10),
(247, 'The devil is a loser by Mushfig', 153, 1, 30),
(248, 'The devil is a loser by Mushfig', 154, 1, 30),
(249, 'The devil is a loser by Mushfig', 155, 1, 30),
(250, 'The devil is a loser by Mushfig', 156, 1, 30),
(251, 'The devil is a loser by Mushfig', 157, 1, 30),
(252, 'The devil is a loser by Mushfig', 157, 1, 10),
(253, 'The devil is a loser by Mushfig', 157, 1, 10),
(254, 'The devil is a loser by Mushfig', 157, 1, 10),
(255, 'The devil is a loser by Mushfig', 157, 1, 10),
(256, 'The devil is a loser by Mushfig', 157, 1, 10),
(257, 'The devil is a loser by Mushfig', 157, 1, 10),
(258, 'The devil is a loser by Mushfig', 157, 1, 10),
(259, 'The devil is a loser by Mushfig', 157, 1, 10),
(260, 'The devil is a loser by Mushfig', 158, 1, 30),
(261, 'The devil is a loser by Mushfig', 158, 1, 30),
(262, 'The devil is a loser by Mushfig', 159, 1, 30),
(263, 'The devil is a loser by Mushfig', 159, 1, 30),
(264, 'The devil is a loser by Mushfig', 159, 1, 30),
(265, 'The devil is a loser by Mushfig', 159, 1, 30),
(266, 'The devil is a loser by Mushfig', 159, 1, 30),
(267, 'The devil is a loser by Mushfig', 160, 1, 30),
(268, 'The devil is a loser by Mushfig', 160, 1, 30),
(269, 'The devil is a loser by Mushfig', 160, 1, 30),
(270, 'The devil is a loser by Mushfig', 161, 1, 10),
(271, 'The devil is a loser by Mushfig', 161, 1, 10),
(272, 'The devil is a loser by Mushfig', 161, 1, 10),
(273, 'The devil is a loser by Mushfig', 162, 1, 30),
(274, 'The devil is a loser by Mushfig', 162, 1, 30),
(275, 'The devil is a loser by Mushfig', 163, 1, 30),
(276, 'The devil is a loser by Mushfig', 163, 1, 30),
(277, 'The devil is a loser by Mushfig', 164, 1, 30),
(278, 'The devil is a loser by Mushfig', 164, 1, 30),
(279, 'The devil is a loser by Mushfig', 165, 1, 30),
(280, 'The devil is a loser by Mushfig', 166, 1, 30),
(281, 'The devil is a loser by Mushfig', 166, 1, 30),
(282, 'The devil is a loser by Mushfig', 167, 1, 30),
(283, 'The devil is a loser by Mushfig', 167, 1, 30),
(284, 'The devil is a loser by Mushfig', 168, 1, 30),
(285, 'The devil is a loser by Mushfig', 169, 1, 30),
(286, 'The devil is a loser by Mushfig', 170, 1, 30),
(287, 'The devil is a loser by Mushfig', 170, 1, 30),
(288, 'The devil is a loser by Mushfig', 171, 1, 100),
(289, 'The devil is a loser by Mushfig', 172, 1, 100),
(290, 'The devil is a loser by Mushfig', 172, 1, 10),
(291, 'The devil is a loser by Mushfig', 172, 1, 10),
(292, 'The devil is a loser by Mushfig', 172, 1, 10),
(293, 'The devil is a loser by Mushfig', 173, 1, 10),
(294, 'The devil is a loser by Mushfig', 173, 1, 10),
(295, 'The devil is a loser by Mushfig', 174, 1, 10),
(296, 'The devil is a loser by Mushfig', 174, 1, 10),
(297, 'The devil is a loser by Mushfig', 174, 1, 10),
(298, 'The devil is a loser by Mushfig', 175, 1, 10),
(299, 'The devil is a loser by Mushfig', 176, 1, 10),
(300, 'The devil is a loser by Mushfig', 176, 1, 10),
(301, 'The devil is a loser by Mushfig', 176, 1, 10),
(302, 'The devil is a loser by Mushfig', 177, 13, 30),
(303, 'The devil is a loser by Mushfig', 177, 1, 30),
(304, 'The devil is a loser by Mushfig', 177, 1, 10),
(305, 'The devil is a loser by Mushfig', 177, 1, 100),
(306, 'The devil is a loser by Mushfig', 177, 19, 100),
(307, 'The devil is a loser by Mushfig', 177, 3, 100),
(308, 'The devil is a loser by Mushfig', 177, 1, 100),
(309, 'The devil is a loser by Mushfig', 178, 21, 100),
(310, 'The devil is a loser by Mushfig', 178, 9, 30),
(311, 'The devil is a loser by Mushfig', 178, 9, 30),
(312, 'The devil is a loser by Mushfig', 178, 9, 30),
(313, 'The devil is a loser by Mushfig', 178, 1, 30);

-- --------------------------------------------------------

--
-- Структура таблицы `historyBonus`
--

CREATE TABLE `historyBonus` (
  `id` int(11) NOT NULL,
  `date` varchar(255) NOT NULL,
  `marks` int(11) NOT NULL,
  `cause` varchar(255) NOT NULL,
  `idHistoryBonus` int(11) NOT NULL,
  `specificDate` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `historyBonus`
--

INSERT INTO `historyBonus` (`id`, `date`, `marks`, `cause`, `idHistoryBonus`, `specificDate`) VALUES
(2, '2.12.2022', 500, 'донат', 1, '10.11.2024 12:42'),
(3, '21.12.2023', 1000, 'вход', 1, '12.12.2024 15:20'),
(12, '21.06.2024', 753, 'Покупка', 1, '21.06.2024, 12:50:57'),
(13, '21.06.2024', 300, 'Покупка', 1, '21.06.2024, 12:53:33'),
(14, '21.06.2024', 292, 'Покупка', 1, '21.06.2024  12:54:19'),
(15, '21.06.2024', 278, 'Покупка', 45, '21.06.2024  13:11:29'),
(16, '21.06.2024', 9, 'Покупка', 45, '21.06.2024  13:19:11'),
(17, '21.06.2024', 186, 'Покупка', 46, '21.06.2024  13:20:02'),
(18, '21.06.2024', 8, 'Покупка', 46, '21.06.2024  13:20:29'),
(19, '21.06.2024', 105, 'Покупка', 46, '21.06.2024  13:20:37'),
(20, '21.06.2024', 105, 'Покупка', 46, '21.06.2024  13:20:46'),
(21, '21.06.2024', 44, 'Покупка', 46, '21.06.2024  13:20:54'),
(22, '21.06.2024', 528, 'Покупка', 46, '21.06.2024  13:47:02'),
(23, '21.06.2024', 157, 'Покупка', 46, '21.06.2024  13:48:07'),
(24, '21.06.2024', 278, 'Покупка', 46, '21.06.2024  13:48:45'),
(25, '21.06.2024', 12, 'Покупка', 46, '21.06.2024  13:49:18'),
(26, '21.06.2024', 29, 'Покупка', 46, '21.06.2024  13:52:02'),
(27, '21.06.2024', 212, 'Покупка', 46, '21.06.2024  13:56:42'),
(28, '21.06.2024', 157, 'Покупка', 46, '21.06.2024  13:57:27'),
(29, '21.06.2024', 471, 'Покупка', 46, '21.06.2024  14:43:16'),
(30, '21.06.2024', 442, 'Покупка', 47, '21.06.2024  16:34:09'),
(31, '21.06.2024', 76, 'Покупка', 47, '21.06.2024  16:36:41'),
(32, '21.06.2024', 141, 'Покупка', 47, '21.06.2024  17:15:30'),
(33, '21.06.2024', 197, 'Покупка', 47, '21.06.2024  17:22:59'),
(34, '21.06.2024', 13, 'Покупка', 47, '21.06.2024  17:23:57'),
(35, '21.06.2024', 16, 'Покупка', 47, '21.06.2024  17:26:09'),
(36, '21.06.2024', 157, 'Покупка', 47, '21.06.2024  17:26:40'),
(37, '21.06.2024', 72, 'Покупка', 47, '21.06.2024  17:27:35'),
(38, '21.06.2024', 274, 'Покупка', 47, '21.06.2024  17:57:27'),
(39, '21.06.2024', 12, 'Покупка', 47, '21.06.2024  17:59:03'),
(40, '21.06.2024', 262, 'Покупка', 47, '21.06.2024  18:00:05'),
(41, '21.06.2024', 12, 'Покупка', 47, '21.06.2024  18:00:57'),
(42, '21.06.2024', 262, 'Покупка', 47, '21.06.2024  18:01:21'),
(43, '21.06.2024', 20, 'Покупка', 47, '21.06.2024  18:01:46'),
(44, '21.06.2024', 24, 'Покупка', 47, '21.06.2024  18:02:12'),
(45, '21.06.2024', 1319, 'Покупка', 47, '21.06.2024  18:05:06'),
(46, '21.06.2024', 262, 'Покупка', 47, '21.06.2024  18:05:50'),
(47, '21.06.2024', 212, 'Покупка', 47, '21.06.2024  18:06:20'),
(48, '21.06.2024', 262, 'Покупка', 47, '21.06.2024  18:06:37'),
(49, '21.06.2024', 20, 'Покупка', 47, '21.06.2024  18:08:22'),
(50, '21.06.2024', 20, 'Покупка', 47, '21.06.2024  18:10:57'),
(51, '21.06.2024', 20, 'Покупка', 47, '21.06.2024  18:11:47'),
(52, '21.06.2024', 1409, 'Покупка', 47, '21.06.2024  18:13:23'),
(53, '21.06.2024', 296, 'Покупка', 47, '21.06.2024  18:23:13'),
(54, '21.06.2024', 1050, 'Покупка', 47, '21.06.2024  18:27:24'),
(55, '21.06.2024', 20, 'Покупка', 47, '21.06.2024  18:30:41'),
(56, '21.06.2024', 68, 'Покупка', 47, '21.06.2024  18:31:31'),
(57, '21.06.2024', 17, 'Покупка', 47, '21.06.2024  18:32:06'),
(58, '21.06.2024', 17, 'Покупка', 47, '21.06.2024  18:33:42'),
(59, '21.06.2024', 14, 'Покупка', 47, '21.06.2024  18:37:24'),
(60, '21.06.2024', 85, 'Покупка', 47, '21.06.2024  18:41:09'),
(61, '21.06.2024', 17, 'Покупка', 47, '21.06.2024  18:55:33'),
(62, '21.06.2024', 68, 'Покупка', 47, '21.06.2024  18:56:19'),
(63, '21.06.2024', 300, 'Покупка', 47, '21.06.2024  19:03:53'),
(64, '21.06.2024', 68, 'Покупка', 47, '21.06.2024  19:04:34'),
(65, '21.06.2024', 244, 'Покупка', 47, '21.06.2024  20:58:59'),
(66, '21.06.2024', 34, 'Покупка', 47, '21.06.2024  20:59:58'),
(67, '21.06.2024', 1498, 'Покупка', 47, '21.06.2024  21:00:55'),
(68, '21.06.2024', 36, 'Покупка', 47, '21.06.2024  21:01:44'),
(69, '21.06.2024', 899, 'Покупка', 47, '21.06.2024  21:02:35'),
(70, '21.06.2024', 169, 'Покупка', 47, '21.06.2024  21:03:27'),
(71, '21.06.2024', 229, 'Покупка', 47, '21.06.2024  21:23:16'),
(72, '21.06.2024', 229, 'Покупка', 47, '21.06.2024  21:23:44'),
(73, '21.06.2024', 157, 'Покупка', 47, '21.06.2024  21:24:17'),
(74, '21.06.2024', 36, 'Покупка', 47, '21.06.2024  21:24:55'),
(75, '21.06.2024', 48, 'Покупка', 47, '21.06.2024  21:25:35'),
(76, '21.06.2024', 24, 'Покупка', 47, '21.06.2024  21:25:53'),
(77, '21.06.2024', 24, 'Покупка', 47, '21.06.2024  21:26:33'),
(78, '21.06.2024', 175, 'Покупка', 47, '21.06.2024  21:27:09'),
(79, '21.06.2024', 15, 'Покупка', 47, '21.06.2024  21:28:10'),
(80, '21.06.2024', 41, 'Покупка', 47, '21.06.2024  21:29:07'),
(81, '21.06.2024', 525, 'Покупка', 47, '21.06.2024  21:29:46'),
(82, '21.06.2024', 28, 'Покупка', 47, '21.06.2024  21:30:27'),
(83, '21.06.2024', 12, 'Покупка', 47, '21.06.2024  21:32:26'),
(84, '21.06.2024', 787, 'Покупка', 47, '21.06.2024  21:35:39'),
(85, '21.06.2024', 7389, 'Покупка', 47, '21.06.2024  21:48:46'),
(86, '21.06.2024', 6906, 'Покупка', 47, '21.06.2024  22:01:19');

-- --------------------------------------------------------

--
-- Структура таблицы `historyOrder`
--

CREATE TABLE `historyOrder` (
  `id` int(11) NOT NULL,
  `fromOrderDate` varchar(255) DEFAULT NULL,
  `price` int(255) DEFAULT NULL,
  `statusDelivery` varchar(255) DEFAULT NULL,
  `waitDate` varchar(255) DEFAULT NULL,
  `idOrder` int(11) DEFAULT NULL,
  `delivery` varchar(255) NOT NULL DEFAULT 'Доставка курьером:',
  `detailInfo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `historyOrder`
--

INSERT INTO `historyOrder` (`id`, `fromOrderDate`, `price`, `statusDelivery`, `waitDate`, `idOrder`, `delivery`, `detailInfo`) VALUES
(120, '21.06.2024', 978, 'В пути', '28.06.2024', 46, 'Почта Украины', NULL),
(121, '21.06.2024', 7058, 'В пути', '28.06.2024', 46, 'Почта Украины', '1'),
(122, '21.06.2024', 5231, 'В пути', '28.06.2024', 46, 'Почта Украины', '987654321'),
(123, '21.06.2024', 15393, 'В пути', '28.06.2024', 46, 'Почта Украины', '098765433211234567890'),
(124, '21.06.2024', 22100, 'Отменен', '28.06.2024', 47, 'Почта Украины', ''),
(125, '21.06.2024', 3804, 'Отменен', '28.06.2024', 47, 'Почта Украины', ''),
(126, '21.06.2024', 7058, 'Отменен', '28.06.2024', 47, 'Почта Украины', ''),
(127, '21.06.2024', 9860, 'Отменен', '28.06.2024', 47, 'Почта Украины', ''),
(128, '21.06.2024', 665, 'Отменен', '28.06.2024', 47, 'Почта Украины', ''),
(129, '21.06.2024', 797, 'Отменен', '28.06.2024', 47, 'Почта Украины', '890808908089'),
(130, '21.06.2024', 5231, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(131, '21.06.2024', 2400, 'Отменен', '28.06.2024', 47, 'Почта Украины', ''),
(132, '21.06.2024', 9132, 'В пути', '28.06.2024', 47, 'Почта Украины', 'lol'),
(133, '21.06.2024', 395, 'В пути', '28.06.2024', 47, 'Почта Украины', 'lol'),
(134, '21.06.2024', 8746, 'В пути', '28.06.2024', 47, 'Почта Украины', 'lol'),
(135, '21.06.2024', 403, 'В пути', '28.06.2024', 47, 'Почта Украины', 'lol'),
(136, '21.06.2024', 8746, 'В пути', '28.06.2024', 47, 'Почта Украины', 'lol'),
(137, '21.06.2024', 665, 'В пути', '28.06.2024', 47, 'Почта Украины', 'lol'),
(138, '21.06.2024', 797, 'В пути', '28.06.2024', 47, 'Почта Украины', 'lol'),
(139, '21.06.2024', 43975, 'В пути', '28.06.2024', 47, 'Почта Украины', 'lol'),
(140, '21.06.2024', 8746, 'В пути', '28.06.2024', 47, 'Почта Украины', 'lol'),
(141, '21.06.2024', 7058, 'В пути', '28.06.2024', 47, 'Почта Украины', 'lol'),
(142, '21.06.2024', 8746, 'В пути', '28.06.2024', 47, 'Почта Украины', 'lol'),
(143, '21.06.2024', 665, 'В пути', '28.06.2024', 47, 'Почта Украины', 'lol'),
(144, '21.06.2024', 665, 'В пути', '28.06.2024', 47, 'Почта Украины', 'lol2'),
(145, '21.06.2024', 9860, 'В пути', '28.06.2024', 47, 'Почта Украины', 'lolo'),
(146, '21.06.2024', 34884, 'В пути', '28.06.2024', 47, 'Почта Украины', 'yet'),
(147, '21.06.2024', 665, 'В пути', '28.06.2024', 47, 'Почта Украины', '098765433211234567890'),
(148, '21.06.2024', 2283, 'В пути', '28.06.2024', 47, 'Почта Украины', '890808908089'),
(149, '21.06.2024', 574, 'В пути', '28.06.2024', 47, 'Почта Украины', '6543'),
(150, '21.06.2024', 574, 'В пути', '28.06.2024', 47, 'Почта Украины', 'lol'),
(151, '21.06.2024', 462, 'В пути', '28.06.2024', 47, 'Почта Украины', '6543'),
(152, '21.06.2024', 2847, 'В пути', '28.06.2024', 47, 'Почта Украины', 'lol'),
(153, '21.06.2024', 574, 'В пути', '28.06.2024', 47, 'Почта Украины', 'lol'),
(154, '21.06.2024', 2283, 'В пути', '28.06.2024', 47, 'Почта Украины', '6543'),
(155, '21.06.2024', 9984, 'В пути', '28.06.2024', 47, 'Почта Украины', 'lol'),
(156, '21.06.2024', 2283, 'В пути', '28.06.2024', 47, 'Почта Украины', 'lol'),
(157, '21.06.2024', 8144, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(158, '21.06.2024', 1117, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(159, '21.06.2024', 49920, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(160, '21.06.2024', 1189, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(161, '21.06.2024', 29952, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(162, '21.06.2024', 5634, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(163, '21.06.2024', 7631, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(164, '21.06.2024', 7631, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(165, '21.06.2024', 5231, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(166, '21.06.2024', 1200, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(167, '21.06.2024', 1594, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(168, '21.06.2024', 797, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(169, '21.06.2024', 797, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(170, '21.06.2024', 5829, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(171, '21.06.2024', 493, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(172, '21.06.2024', 1375, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(173, '21.06.2024', 17492, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(174, '21.06.2024', 934, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(175, '21.06.2024', 403, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(176, '21.06.2024', 26238, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(177, '21.06.2024', 246308, 'В пути', '28.06.2024', 47, 'Почта Украины', ''),
(178, '21.06.2024', 230189, 'В пути', '28.06.2024', 47, 'Почта Украины', '');

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `login` varchar(11) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(11) DEFAULT 'men',
  `coins` int(255) NOT NULL DEFAULT 0,
  `marks` int(255) DEFAULT 100,
  `cashback` int(255) DEFAULT 2,
  `avatar` varchar(255) DEFAULT NULL,
  `status` int(123) NOT NULL DEFAULT 2,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `login`, `password`, `email`, `gender`, `coins`, `marks`, `cashback`, `avatar`, `status`, `name`, `surname`) VALUES
(1, 'pati012', '05b755ace5b49029e32c3b90fb494edc', 'andriiivanchov@gmail.com', 'men', 0, 3167, 3, 'user-men.png', 3, NULL, ''),
(31, 'Andrey012', '05b755ace5b49029e32c3b90fb494edc', 'retortop712@gmail.com', 'men', 0, 100, 3, 'user-men.png', 3, NULL, ''),
(33, 'karen', '05b755ace5b49029e32c3b90fb494edc', 'retortop72s@gmail.com', 'women', 0, 100, 3, 'user-women.png', 3, NULL, ''),
(44, 'texnoman12', '05b755ace5b49029e32c3b90fb494edc', 'retortop809@gmail.com', 'men', 0, 100, 3, 'user-men.png', 3, NULL, ''),
(45, 'bogdan12', '05b755ace5b49029e32c3b90fb494edc', 'bogdan12@gmail.com', 'men', 0, 100, 3, 'user-men.png', 3, NULL, ''),
(46, 'bogdan121', '05b755ace5b49029e32c3b90fb494edc', 'retortop721s2@gmail.com', 'men', 0, 44, 3, 'user-men.png', 3, NULL, ''),
(47, 'bogdan1210', '827ccb0eea8a706c4c34a16891f84e7b', 'retortop72@gmail.com', 'men', 0, 15582, 3, 'user-men.png', 3, 'andrii', 'Ivanchov');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idAddress` (`idAddress`),
  ADD KEY `idAddress_2` (`idAddress`);

--
-- Индексы таблицы `addressOrder`
--
ALTER TABLE `addressOrder`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idOrder` (`idOrder`);

--
-- Индексы таблицы `basket`
--
ALTER TABLE `basket`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_basket` (`idBasket`);

--
-- Индексы таблицы `consistOrders`
--
ALTER TABLE `consistOrders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_order` (`idOrder`);

--
-- Индексы таблицы `historyBonus`
--
ALTER TABLE `historyBonus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idHistoryBonus` (`idHistoryBonus`);

--
-- Индексы таблицы `historyOrder`
--
ALTER TABLE `historyOrder`
  ADD PRIMARY KEY (`id`),
  ADD KEY `consistOrders` (`idOrder`),
  ADD KEY `id_order` (`idOrder`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT для таблицы `addressOrder`
--
ALTER TABLE `addressOrder`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT для таблицы `basket`
--
ALTER TABLE `basket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=420;

--
-- AUTO_INCREMENT для таблицы `consistOrders`
--
ALTER TABLE `consistOrders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=314;

--
-- AUTO_INCREMENT для таблицы `historyBonus`
--
ALTER TABLE `historyBonus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT для таблицы `historyOrder`
--
ALTER TABLE `historyOrder`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=179;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_ibfk_1` FOREIGN KEY (`idAddress`) REFERENCES `user` (`id`);

--
-- Ограничения внешнего ключа таблицы `addressOrder`
--
ALTER TABLE `addressOrder`
  ADD CONSTRAINT `addressorder_ibfk_1` FOREIGN KEY (`idOrder`) REFERENCES `historyOrder` (`id`);

--
-- Ограничения внешнего ключа таблицы `basket`
--
ALTER TABLE `basket`
  ADD CONSTRAINT `basket_ibfk_1` FOREIGN KEY (`idBasket`) REFERENCES `user` (`id`);

--
-- Ограничения внешнего ключа таблицы `consistOrders`
--
ALTER TABLE `consistOrders`
  ADD CONSTRAINT `consistorders_ibfk_1` FOREIGN KEY (`idOrder`) REFERENCES `historyOrder` (`id`);

--
-- Ограничения внешнего ключа таблицы `historyBonus`
--
ALTER TABLE `historyBonus`
  ADD CONSTRAINT `historybonus_ibfk_1` FOREIGN KEY (`idHistoryBonus`) REFERENCES `user` (`id`);

--
-- Ограничения внешнего ключа таблицы `historyOrder`
--
ALTER TABLE `historyOrder`
  ADD CONSTRAINT `historyorder_ibfk_1` FOREIGN KEY (`idOrder`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
