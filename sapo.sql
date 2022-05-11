-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mockprj
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `banner_status`
--

DROP TABLE IF EXISTS `banner_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banner_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `banner_id` int NOT NULL,
  `section_id` int NOT NULL,
  `state` smallint NOT NULL,
  `time_display` timestamp NULL DEFAULT NULL,
  `percentage` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner_status`
--

LOCK TABLES `banner_status` WRITE;
/*!40000 ALTER TABLE `banner_status` DISABLE KEYS */;
INSERT INTO `banner_status` VALUES (25,77,1,1,'2022-05-04 09:10:16',40),(26,78,1,1,'2022-05-04 09:10:16',60),(27,79,1,1,'2022-05-04 09:10:16',30),(28,80,1,1,'2022-05-04 09:10:16',30),(29,81,1,1,'2022-05-04 09:10:16',10),(30,82,1,1,'2022-05-04 09:10:16',0),(31,77,2,1,'2022-05-04 03:00:25',0),(32,83,2,1,NULL,0),(33,84,1,1,NULL,0);
/*!40000 ALTER TABLE `banner_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banners`
--

DROP TABLE IF EXISTS `banners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `img_url` text,
  `create_at` timestamp NOT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `user_add` varchar(255) NOT NULL,
  `user_fix` varchar(255) DEFAULT NULL,
  `url` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banners`
--

LOCK TABLES `banners` WRITE;
/*!40000 ALTER TABLE `banners` DISABLE KEYS */;
INSERT INTO `banners` VALUES (77,'A12','A12_khong co j','https://firebasestorage.googleapis.com/v0/b/filestorage-c695c.appspot.com/o/images%2FScreenshot%202022-01-04%20225748.png29d0a19b-a251-476a-b326-92093fb56a2e?alt=media&token=71fb60b6-5dc9-4287-a395-6956a53b45db','2022-04-27 09:34:53','2022-05-08 09:32:48','Luong Van Minh','Luong Van Minh','https://www.youtube.com/watch?v=le0V3PcbklQ'),(78,'B1','B1_5234','https://firebasestorage.googleapis.com/v0/b/filestorage-c695c.appspot.com/o/images%2FScreenshot%202021-12-11%20142236.png134e4cdc-aa02-4163-a1a2-e4e01dd8d86f?alt=media&token=15d7cfe4-58f8-4338-bce3-72061f7c2eaa','2022-04-27 09:59:56','2022-04-27 10:09:53','Luong Van Minh','Luong Van Minh',NULL),(79,'A13','A13_quang cao','https://firebasestorage.googleapis.com/v0/b/filestorage-c695c.appspot.com/o/images%2F264899038_951644632224207_6298513785145257277_n.pngc0403ec9-4629-49f7-a7f7-697225bc5d0e?alt=media&token=a802634b-46a6-4997-97dc-c64fb6d5543e','2022-04-27 13:28:59',NULL,'Luong Van Minh',NULL,NULL),(80,'A14','A14_su kien','https://firebasestorage.googleapis.com/v0/b/filestorage-c695c.appspot.com/o/images%2F1.jpgd1277e3c-6150-4d27-94a4-6ada710233d7?alt=media&token=9caf0dc6-f871-4e1e-b9a4-8be18877adc9','2022-04-27 13:29:23',NULL,'Luong Van Minh',NULL,NULL),(81,'A15','A15_mua he','https://firebasestorage.googleapis.com/v0/b/filestorage-c695c.appspot.com/o/images%2FScreenshot%202022-03-09%20173310.pngeea50b7c-191b-4c6f-ae76-eb6e28cd95ac?alt=media&token=c0db9053-4b52-402d-ac73-708878db4893','2022-04-27 13:29:50',NULL,'Luong Van Minh',NULL,NULL),(82,'A20','A20_18','https://firebasestorage.googleapis.com/v0/b/filestorage-c695c.appspot.com/o/images%2Fp1.jpg83439766-c162-4991-afaf-20c6f366568d?alt=media&token=ab0476b1-9ff7-40fc-b8a5-86df8f654226','2022-04-27 16:37:49',NULL,'Luong Van Minh',NULL,NULL),(83,'B10','B10_image one12','https://firebasestorage.googleapis.com/v0/b/filestorage-c695c.appspot.com/o/images%2Fdestop.jpg67b80432-3058-49b5-a86a-a3365f48dd8d?alt=media&token=76e9ebc7-506a-42fc-89fb-0713ed34334d','2022-05-04 09:08:54','2022-05-04 09:09:58','Luong Van Minh','Luong Van Minh',NULL),(84,'B30','B30_Hanoi','https://firebasestorage.googleapis.com/v0/b/filestorage-c695c.appspot.com/o/images%2FScreenshot%202022-05-08%20161223.png5d882c37-241b-45ef-a966-b73432e57124?alt=media&token=bfd709b5-c694-43b3-a8a4-df6b58e5996e','2022-05-08 09:12:41',NULL,'Luong Van Minh',NULL,'https://www.youtube.com/watch?v=RzhAS_GnJIc');
/*!40000 ALTER TABLE `banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clicks`
--

DROP TABLE IF EXISTS `clicks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clicks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(45) DEFAULT NULL,
  `time_click` datetime DEFAULT NULL,
  `user_name` varchar(45) DEFAULT NULL,
  `banner_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clicks`
--

LOCK TABLES `clicks` WRITE;
/*!40000 ALTER TABLE `clicks` DISABLE KEYS */;
INSERT INTO `clicks` VALUES (1,'1','2022-05-09 00:16:57','Luong Van Minh',78),(2,'1','2022-05-09 00:17:37','Luong Van Minh',78),(3,'1','2022-05-09 00:17:54','Luong Van Minh',79),(4,'1','2022-05-09 00:18:05','Luong Van Minh',82),(5,'1','2022-05-09 00:18:18','Luong Van Minh',78),(6,'1','2022-05-09 00:18:39','Luong Van Minh',79),(7,'1','2022-05-09 00:19:13','Luong Van Minh',80),(8,'1','2022-05-09 00:19:20','Luong Van Minh',77),(9,'1','2022-05-09 00:19:36','Luong Van Minh',84),(10,'1','2022-05-09 00:19:45','Luong Van Minh',81);
/*!40000 ALTER TABLE `clicks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (3,'ROLE_USER'),(4,'ROLE_MODERATOR'),(5,'ROLE_ADMIN');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sections`
--

DROP TABLE IF EXISTS `sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sections` (
  `id` int NOT NULL AUTO_INCREMENT,
  `position_web` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `url` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
INSERT INTO `sections` VALUES (1,'sapofnb','fnb3',NULL),(2,'sapoomni','web1',NULL),(3,'sapoweb','web2',NULL);
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sectors`
--

DROP TABLE IF EXISTS `sectors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sectors` (
  `id` int NOT NULL,
  `div_id` varchar(45) DEFAULT NULL,
  `section_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_setion_id_idx` (`section_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sectors`
--

LOCK TABLES `sectors` WRITE;
/*!40000 ALTER TABLE `sectors` DISABLE KEYS */;
/*!40000 ALTER TABLE `sectors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `user_id` bigint NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (3,3),(4,5);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(120) DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'kienle@gmail.com','$2a$10$khgRek8yJlHpta2N3YxkdutIQnuQit05Hu4tE6qXKYALbJGhl5yuy','kienle',NULL,NULL),(4,'minhlv@gmail.com','$2a$10$KSC7OWIXa5Xgf0NtizKVLOxyzgcguTSJu.TNDQXWhKA6pNPtWp16O','luongminh',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `views`
--

DROP TABLE IF EXISTS `views`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `views` (
  `id` int NOT NULL AUTO_INCREMENT,
  `banner_id` int NOT NULL,
  `section_id` int NOT NULL,
  `number` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `banner_id` (`banner_id`),
  CONSTRAINT `views_ibfk_1` FOREIGN KEY (`banner_id`) REFERENCES `banners` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `views`
--

LOCK TABLES `views` WRITE;
/*!40000 ALTER TABLE `views` DISABLE KEYS */;
INSERT INTO `views` VALUES (1,82,1,11),(2,84,1,10),(3,81,1,8),(4,79,1,8),(5,80,1,8),(6,78,1,9),(7,77,1,7);
/*!40000 ALTER TABLE `views` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-09  0:23:46
