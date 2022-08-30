-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 25-08-2022 a las 09:23:09
-- Versión del servidor: 10.5.16-MariaDB-cll-lve-log
-- Versión de PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ciccare_juntasciccarellidb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE `noticias` (
  `id` int(13) NOT NULL,
  `titulo` varchar(70) NOT NULL,
  `subtitulo` varchar(200) NOT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `imagen` varchar(60) DEFAULT NULL,
 ALTER TABLE Products
ADD FULLTEXT (`titulo`,`subtitulo`,`descripcion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `subtitulo`, `descripcion`, `fecha`, `imagen`) VALUES
(35, '40 años de la Renault Fuego', 'Emotivo festejo de Berta y Traverso', 'En un íntimo agasajo en Fábrica Santa Isabel, Renault reunió a los máximos exponentes de la época dorada de la Renault Fuego. 🚗🔥 El encuentro contó con la presencia de Juan María Traverso, expiloto y múltiple campeón argentino de automovilismo🏆, Oreste Berta, proyectista, desarrollista y constructor integral de motores y automóviles de competición👨💼 entre otras figutas importantes.', '2022-08-19', '1660907636200_img_.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias_images`
--

CREATE TABLE `noticias_images` (
  `id` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `noticiaId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `noticias_images`
--

INSERT INTO `noticias_images` (`id`, `image`, `noticiaId`) VALUES
(18, '1660907636200_img_.webp', 35);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) UNSIGNED NOT NULL,
  `marca` varchar(60) NOT NULL,
  `modelo` varchar(70) NOT NULL,
  `motor` varchar(60) NOT NULL,
  `cilindradas` varchar(60) NOT NULL,
  `piezas` varchar(60) NOT NULL,
  `image` varchar(60) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `nombre` varchar(60) NOT NULL,
  ALTER TABLE Products
ADD FULLTEXT(`marca`,`modelo`,`motor`,`cilindradas`,`piezas`,`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `marca`, `modelo`, `motor`, `cilindradas`, `piezas`, `image`, `createdAt`, `updatedAt`, `nombre`) VALUES
(14, 'TOYOTA', 'HILUX', '1KD - 2KD - 1GD - 2GD - FTV', '2.4 - 2.8 - 3.0 16V', '1234', '1660849603259_img_.webp', '2022-08-18 19:06:43', '2022-08-18 19:06:43', 'TOYOTA - JUEGO JUNTAS DE MOTOR S/TC'),
(15, 'CHERY', 'TIGGO - SKIN', 'SQR484F ACTECO', '1.6 - 2.0 L 16V DOHC', '12345', '1660866877536_img_.webp', '2022-08-18 23:54:37', '2022-08-18 23:54:37', 'CHERY - JUNTA TAPA DE VÁLVULAS'),
(16, 'FORD - VOLVO', 'MONDEO - KUGA - S-MAX - C30 - C70 - S40', 'DURATEC VCT (25KDTD) - B5254T3', '2.5 20V', '1234', '1660869847817_img_.webp', '2022-08-19 00:44:07', '2022-08-19 00:44:07', 'FORD VOLVO - JUNTA TAPA DE CILINDROS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(60) NOT NULL,
  `pass` varchar(70) NOT NULL,
  `rol` int(2) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `pass`, `rol`) VALUES
(1, 'admin@cicarelli.com', '1234', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `noticias_images`
--
ALTER TABLE `noticias_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `noticias_images_FK` (`noticiaId`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `noticias_images`
--
ALTER TABLE `noticias_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `noticias_images`
--
ALTER TABLE `noticias_images`
  ADD CONSTRAINT `noticias_images_FK` FOREIGN KEY (`noticiaId`) REFERENCES `noticias` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
