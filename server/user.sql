-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 27 2024 г., 22:52
-- Версия сервера: 10.5.17-MariaDB
-- Версия PHP: 8.0.22

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
  `surname` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `login`, `password`, `email`, `gender`, `coins`, `marks`, `cashback`, `avatar`, `status`, `name`, `surname`, `token`) VALUES
(1, 'pati012', '05b755ace5b49029e32c3b90fb494edc', 'andriiivanchov@gmail.com', 'men', 0, 3167, 3, 'user-men.png', 3, NULL, '', NULL),
(31, 'Andrey012', '05b755ace5b49029e32c3b90fb494edc', 'retortop712@gmail.com', 'men', 0, 100, 3, 'user-men.png', 3, NULL, '', NULL),
(33, 'karen', '05b755ace5b49029e32c3b90fb494edc', 'retortop72s@gmail.com', 'women', 0, 100, 3, 'user-women.png', 3, NULL, '', NULL),
(44, 'texnoman12', '05b755ace5b49029e32c3b90fb494edc', 'retortop809@gmail.com', 'men', 0, 100, 3, 'user-men.png', 3, NULL, '', NULL),
(45, 'bogdan12', '05b755ace5b49029e32c3b90fb494edc', 'bogdan12@gmail.com', 'men', 0, 100, 3, 'user-men.png', 3, NULL, '', NULL),
(46, 'bogdan121', '05b755ace5b49029e32c3b90fb494edc', 'retortop721s2@gmail.com', 'men', 0, 44, 3, 'user-men.png', 3, NULL, '', NULL),
(47, 'bogdan1210', '05b755ace5b49029e32c3b90fb494edc', 'retortop72@gmail.com', 'men', 0, 15582, 3, 'user-men.png', 3, 'andrii', 'Ivanchov', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzaGFybWFjb2RlciIsImlhdCI6MTcxOTUxNzU0MSwiZXhwIjoxNzE5NTE5MzQxLCJsb2dpbiI6ImJvZ2RhbjEyMTAiLCJwYXNzd29yZCI6IjA1Yjc1NWFjZTViNDkwMjllMzJjM2I5MGZiNDk0ZWRjIn0.dTQZ4JNcVbR1h9owfwRloS2tiqpdlLkIgnOZB2Ag4w4');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
