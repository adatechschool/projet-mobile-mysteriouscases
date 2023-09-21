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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `image` blob,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Camilledu91','camille@test.com','azerty123',NULL),(2,'AlanMystica','alan@test.com','azerty123',NULL),(3,'SayaDuMoulin','saya@test.com','azerty123',NULL),(4,'ahazeldean0','rN5%,LlOQ.n8v5','kgrenshields0@amazonaws.com',NULL),(5,'krosenwald1','nE0m9}vp3','upatching1@yandex.ru',NULL),(6,'zterbruggen2','aP4>EvuBwf','sbotly2@cbc.ca',NULL),(7,'jfominov3','lZ5{FF`1Q*ZxmQ6','tatmore3@angelfire.com',NULL),(8,'mkillerby4','uW0+AI{e)','mtoffoloni4@earthlink.net',NULL),(9,'grospars5','oJ6~ZB_SZv','jvain5@loc.gov',NULL),(10,'scastro6','wX6>U$FXQ+V5hFW{','ycouvert6@wunderground.com',NULL),(11,'smelia7','aR7+qy\"kbv#','etarquini7@webmd.com',NULL),(12,'syanshin8','fA3.WaW\rlgH<+w','lthorbon8@furl.net',NULL),(13,'lruthen9','wZ5$5\"I3Vk','aspores9@jigsy.com',NULL),(14,'vsevillea','zI8(!(9GR','pbonifacioa@ftc.gov',NULL),(15,'ffeildb','qK7,B8*k1!GFm','fbrethertonb@live.com',NULL),(16,'rjanuszkiewiczc','hF4#mSF\"O|=(*','npaskerfulc@rakuten.co.jp',NULL),(17,'cgritsaevd','fE4?umiTg','ebarnwilld@zdnet.com',NULL),(18,'dbenaharone','nX8}bd26g','dpaxmane@squarespace.com',NULL),(19,'schansonnauf','xE5)ME\"E5~X/zs4c','mskitralf@surveymonkey.com',NULL),(20,'acatherineg','rO4u5mQ','obassamg@imageshack.us',NULL),(21,'vturrillh','eE4`qNF,','pstorekh@cdbaby.com',NULL),(22,'mquiddingtoni','yT6$CA7A}Y|','asarchi@yahoo.com',NULL),(23,'ksherburnj','dL8\"}0,.h8NC','kcollinsj@last.fm',NULL),(24,'omccarlichk','eT2>rj|P4!Ks','jbiagionik@salon.com',NULL),(25,'rludyel','vV8<*tQl63','lslemmingl@mtv.com',NULL),(26,'mhandrikm','gW2==ds|','scundeym@opensource.org',NULL),(27,'ddykinsn','rD5\'{~o7T8RU&lm','mmacaughtrien@craigslist.org',NULL),(28,'rmongero','xL8`ip/Wh','sseberto@paginegialle.it',NULL),(29,'sventurap','rN7$C.a2DVAw','ojackep@usgs.gov',NULL),(30,'rslemmondsq','zW1,2Q$8K\'!#,','acullivanq@eepurl.com',NULL),(31,'sklaaasenr','fV6?/On9pyI73g','nadvanir@webeden.co.uk',NULL),(32,'ekearns','tC5`mX?GaPI','ufollisss@wikispaces.com',NULL),(33,'cjeckellt','uY4!8Ih(b7+qbQQL','mgrimsdalet@tripod.com',NULL),(34,'callcornu','zD6\'vYt3|9','bgreeneu@last.fm',NULL),(35,'mdevonsidev','zJ8$}/rO','qkleinschmidtv@gov.uk',NULL),(36,'rsimisterw','rS4_\'Zu&|zAr<J!#','jwhiteselw@biglobe.ne.jp',NULL),(37,'nhamblenx','zV8$>vle2p2','tconex@simplemachines.org',NULL),(38,'cpomfretty','rI6<i7P&|0B3hrDw','ssmootey@netlog.com',NULL),(39,'bmanthroppez','lQ6(>M)Z*ZGid\"<','amcilwrathz@naver.com',NULL),(40,'cbumphries10','lL6>Lo.RZH04I','jghio10@springer.com',NULL),(41,'zbuttrick11','eT5,{vW($','lcalway11@ezinearticles.com',NULL),(42,'sjustham12','mP3+*Y?y94Ss/O','sscrammage12@myspace.com',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-21 15:19:27
