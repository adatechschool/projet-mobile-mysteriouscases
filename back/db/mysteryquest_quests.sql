-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: mysteryquest
-- ------------------------------------------------------
-- Server version	8.1.0

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
-- Table structure for table `quests`
--

DROP TABLE IF EXISTS `quests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `preview` text,
  `story` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quests`
--

LOCK TABLES `quests` WRITE;
/*!40000 ALTER TABLE `quests` DISABLE KEYS */;
INSERT INTO `quests` VALUES (1,'La mallette à mamie','Explorez le quartier, résolvez des énigmes et découvrez les souvenirs cachés pour retrouver la mallette perdue de Mamie.','Un mystère se profile dans le quartier, et c\'est à vous de jouer les détectives ! Mamie, la résidente la plus gentille et malicieuse de notre quartier bien-aimé, a soudainement perdu sa mallette précieuse. À l\'intérieur se trouve un trésor d\'objets chéris et de souvenirs qui lui sont très chers. En tant que voisin dévoué et curieux, vous vous lancez dans une quête pour aider Mamie à retrouver sa mallette. Traversez les ruelles obscures, explorez les boutiques locales et interagissez avec les résidents du quartier pour rassembler des indices cruciaux. Chaque objet que vous découvrez et chaque conversation que vous avez vous rapprochera de la vérité derrière la disparition de la mallette. Explorez des recoins cachés, résolvez des énigmes astucieuses et suivez les pistes pour démêler le mystère.'),(2,'Un détour chez les morts','Explorez les recoins les plus sombres de la Ville Lumière en suivant les traces d\'une mystérieuse camarade de classe','Un matin brumeux, vous trouvez une lettre énigmatique glissée dans votre casier à l\'école. Elle est ornée de symboles mystérieux et porte le sceau d\'un corbeau. À l\'intérieur, vous lisez les mots suivants : \"Rejoins-moi dans l\'obscurité des ombres gothiques de Paris. Retrouve les lieux où je pratique ma magie noire et découvre la vérité cachée. L\'aventure commence au crépuscule.'),(3,'Où est Camille ?','Camille, la petite fille que tu devais garder a disparu. Retrouve-la rapidement avant que ses mamans rentrent du travail !','Un après-midi ensoleillé, vous êtes en charge de Camille, une petite fille curieuse et pleine d\'énergie. Alors que vous vous occupiez d\'elle dans le parc, vous la perdez de vue pendant un court moment. Lorsque vous la cherchez, vous ne la trouvez plus, et une bouffée de panique s\'installe. Vous devez la retrouver avant que ses parents ne rentrent du travail et découvrent sa disparition.');
/*!40000 ALTER TABLE `quests` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-14 14:16:23
