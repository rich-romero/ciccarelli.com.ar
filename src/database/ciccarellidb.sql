-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: juntascicarellidb
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `noticias`
--

DROP TABLE IF EXISTS `noticias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `noticias` (
  `id` int(13) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(70) NOT NULL,
  `subtitulo` varchar(200) NOT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `imagen` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `noticias`
--

LOCK TABLES `noticias` WRITE;
/*!40000 ALTER TABLE `noticias` DISABLE KEYS */;
INSERT INTO `noticias` VALUES (3,'Nueva pagina web Ciccarelli','Excelente servicio, muy bueno!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus corrupti harum tempore doloribus, explicabo ratione illo facilis nemo. Maiores eaque ut voluptas deserunt dolore, praesentium numquam id mollitia inventore quam!',NULL,NULL),(22,'Nueva noticia increible','Nueva noticia increible','Nueva noticia increible','2022-03-16',NULL),(24,'asdasdasd','123123','asdasdasdasd','2022-03-16',NULL),(25,'123123','asdasdasd','asdasdasdasd','2022-03-16','default-image.png'),(26,'asdasdasd','123123','asdasdasdasd','2022-03-16','default-image.png'),(27,'asdasdasd','123123','asdasdasdasd','2022-03-16','default-image.png'),(28,'hahahha','123123','asdasdasdasd','2022-03-16',NULL),(29,'asdasdasd','123123','asdasdasdasd','2022-03-16',NULL),(30,'asdasdasd','123123','asdasdasdasd','2022-03-16',NULL),(31,'asdasdasd','123123','asdasdasdasd','2022-03-16','1647468853616_img_.png'),(32,'asdasdasd','123123','asdasdasdasd','2022-03-16','1647468887160_img_.png'),(33,'A ver imagen','imagen','imagen','2022-03-16','1647468984640_img_.png');
/*!40000 ALTER TABLE `noticias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `noticias_images`
--

DROP TABLE IF EXISTS `noticias_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `noticias_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(100) NOT NULL,
  `noticiaId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `noticias_images_FK` (`noticiaId`),
  CONSTRAINT `noticias_images_FK` FOREIGN KEY (`noticiaId`) REFERENCES `noticias` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `noticias_images`
--

LOCK TABLES `noticias_images` WRITE;
/*!40000 ALTER TABLE `noticias_images` DISABLE KEYS */;
INSERT INTO `noticias_images` VALUES (2,'default-image.png',3),(9,'default-image.png',22),(11,'default-image.png',24),(12,'default-image.png',25),(13,'default-image.png',26),(14,'default-image.png',27),(15,'default-image.png',28),(16,'default-image.png',33);
/*!40000 ALTER TABLE `noticias_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `marca` varchar(60) NOT NULL,
  `modelo` varchar(70) NOT NULL,
  `motor` varchar(60) NOT NULL,
  `cilindradas` varchar(60) NOT NULL,
  `piezas` varchar(60) NOT NULL,
  `image` varchar(60) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `nombre` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (6,'GGGGGG','GGGGGG','GGGGGG','GGGGGG','GGGGGG','1647443520567_img_.png','2022-03-16 15:12:00','2022-03-16 15:12:00',''),(7,'Junta reten','Junta reten','Junta reten','Junta reten','Junta reten','1647449474235_img_.png','2022-03-16 16:51:14','2022-03-16 16:51:14','Junta reten'),(8,'JoaquinJoaquin','JoaquinJoaquin','JoaquinJoaquin','JoaquinJoaquin','JoaquinJoaquin','1647450793699_img_.png','2022-03-16 17:13:13','2022-03-16 18:54:51','JoaquinJoaquin');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(60) NOT NULL,
  `pass` varchar(70) NOT NULL,
  `rol` int(2) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin@cicarelli.com','1234',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'juntascicarellidb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-21 10:49:25
