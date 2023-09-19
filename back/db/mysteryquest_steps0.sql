-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: mysteryquest
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `steps`
--

DROP TABLE IF EXISTS `steps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `steps` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quest` int DEFAULT NULL,
  `step_number` int DEFAULT NULL,
  `step_text` text,
  `step_image` text,
  `lattitude` decimal(9,6) DEFAULT NULL,
  `longitude` decimal(9,6) DEFAULT NULL,
  `clue1` text,
  `clue2` text,
  `clue3` text,
  PRIMARY KEY (`id`),
  KEY `quest_idx` (`quest`),
  CONSTRAINT `quest` FOREIGN KEY (`quest`) REFERENCES `quests` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `steps`
--

LOCK TABLES `steps` WRITE;
/*!40000 ALTER TABLE `steps` DISABLE KEYS */;
INSERT INTO `steps` VALUES (1,2,1,'Le crépuscule enveloppe la ville vers 19h30 lorsque vous recevez un mystérieux message de la gothique. Il vous guide vers un lieu où les ombres s\'étirent et où les esprits murmurent, un lieu où les âmes tourmentées trouvent leur repos éternel. Vous devez suivre ces mots énigmatiques pour découvrir la première étape de cette quête ténébreuse.','https://www.pariszigzag.fr/wp-content/uploads/2017/05/falls-1338730_1920.jpg',48.861800,2.398000,'ce n\'est pas chez la mère lefauteuil','Le seul moyen de se délibrer d\'une tentation, c\'est d\'y céder','Allez voir du côté de l\'avenue Carette'),(2,4,1,'Votre quête commence à la cafétéria, une fois pris votre café/thé/chocolat olé, c\'est l\'heure de partir à la recherche du document caché. Trouvez son emplacement pour récupérer une information capitale pour la suite de votre mission.','none',48.873900,2.358800,'Il y en a des micro-ondes ici !','Des boites roses... intéressant.','Regarde bien les boites.'),(3,4,2,'Maintenant que vous avez trouvé ce premier morceau, trouver le deuxième endroit où est caché l\'autre partie du document.','none',48.875000,2.358800,'Une salle de cours ?','Il doit être caché dans un emplacement discret.','Hum... cette plante a besoin d\'être arosé !');
/*!40000 ALTER TABLE `steps` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-19 16:02:39
