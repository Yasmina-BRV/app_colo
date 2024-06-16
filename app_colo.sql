-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : dim. 16 juin 2024 à 21:36
-- Version du serveur : 8.0.36-0ubuntu0.22.04.1
-- Version de PHP : 8.1.2-1ubuntu2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `app_colo`
--

-- --------------------------------------------------------

--
-- Structure de la table `events`
--

CREATE TABLE `events` (
  `id` int NOT NULL,
  `date` date NOT NULL,
  `category` enum('Anniversaire','Visite','Intervention','') NOT NULL,
  `description` varchar(255) NOT NULL,
  `head` varchar(50) NOT NULL,
  `priority` enum('Faible','Moyenne','Forte','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `events`
--

INSERT INTO `events` (`id`, `date`, `category`, `description`, `head`, `priority`) VALUES
(1, '2024-07-09', 'Visite', 'Visite de Yasmina en Martinique', 'Yasmina', 'Forte'),
(2, '2024-08-03', 'Anniversaire', 'Anniversaire de Ysana', 'Ysana', 'Forte');

-- --------------------------------------------------------

--
-- Structure de la table `expenses`
--

CREATE TABLE `expenses` (
  `id` int NOT NULL,
  `category` enum('Courses','Lessive','Ménage','Vaiselle','Cuisine','Facture','Loyer') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `paid_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `amount` float(5,2) NOT NULL,
  `date` date NOT NULL,
  `participant` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `amount_per_person` float(5,2) NOT NULL,
  `status` enum('A faire','En cours','Terminé','') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `expenses`
--

INSERT INTO `expenses` (`id`, `category`, `paid_by`, `amount`, `date`, `participant`, `amount_per_person`, `status`) VALUES
(5, 'Loyer', 'Yasmina', 500.00, '2024-06-07', 'Yasmina, Yvan, Yohan, Yvanna, Ysana', 100.00, 'Terminé'),
(6, 'Courses', 'Yvan', 86.00, '2024-05-30', 'Yasmina, Yvan, Yohan, Yvanna, Ysana', 17.20, 'Terminé'),
(11, 'Facture', 'Yohan', 65.00, '2024-05-30', 'Yasmina, Yvan, Yohan, Yvanna, Ysana', 13.00, 'A faire'),
(12, 'Facture', 'Yvanna', 73.00, '2024-05-31', 'Yasmina, Yvan, Yohan, Yvanna, Ysana', 14.60, 'A faire'),
(13, 'Courses', 'Ysana', 100.50, '2024-05-30', 'Yasmina, Yvan, Yohan, Yvanna, Ysana', 20.10, 'En cours');

-- --------------------------------------------------------

--
-- Structure de la table `payments_peformed`
--

CREATE TABLE `payments_peformed` (
  `id` int NOT NULL,
  `category` enum('Courses','Lessive','Ménage','Vaiselle','Loyer','Facture') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `amount` float(5,2) NOT NULL,
  `paid_to` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `payment_received`
--

CREATE TABLE `payment_received` (
  `id` int NOT NULL,
  `category` enum('Courses','Lessive','Ménage','Vaiselle','Loyer','Facture') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `amount` float(5,2) NOT NULL,
  `paid_by` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `tasks`
--

CREATE TABLE `tasks` (
  `id` int NOT NULL,
  `category` enum('Courses','Lessive','Ménage','Vaiselle','Cuisine') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `head` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `limit_date` date DEFAULT NULL,
  `priority` enum('Faible','Moyenne','Forte','') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` enum('A faire','En cours','Terminé','') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `tasks`
--

INSERT INTO `tasks` (`id`, `category`, `head`, `description`, `limit_date`, `priority`, `status`) VALUES
(1, 'Ménage', 'Yasmina', 'Nettoyer les sols, escaliers et vitres et le four, le micro-ondes et le réfrigérateur', '2024-05-31', 'Moyenne', 'En cours'),
(2, 'Courses', 'Yvan', 'Acheter pain, viande, légumes, boissons, produit de ménage et papier toilette', '2024-05-30', 'Forte', 'Terminé'),
(3, 'Cuisine', 'Yohan', 'Préparer le repas commun : bœuf bourgignon', '2024-05-30', 'Forte', 'A faire'),
(4, 'Vaiselle', 'Yvanna', 'Faire la vaisselle du repas commun', '2024-05-31', 'Forte', 'A faire'),
(5, 'Lessive', 'Ysana', 'Faire la lessive', '2024-05-31', 'Faible', 'A faire'),
(6, 'Ménage', 'Yasmina', 'Nettoyer la salle de bain des filles jusqu\'à ce que tout brille!', '2024-06-01', 'Faible', 'En cours'),
(7, 'Ménage', 'Yvan', 'Nettoyer la chambre des garçons et pas tout cacher sous le lit!', '2024-06-02', 'Moyenne', 'En cours'),
(8, 'Ménage', 'Yohan', 'Nettoyer la salle de bain des garçons du sol au plafond', '2024-06-01', 'Moyenne', 'A faire'),
(9, 'Ménage', 'Yvanna', 'Nettoyer la chambre des filles de fond en comble', '2024-06-02', 'Faible', 'A faire'),
(10, 'Lessive', 'Yasmina', 'Faire la lessive', '2024-06-03', 'Forte', 'Terminé');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `last_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `first_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `last_name`, `first_name`, `email`, `password`) VALUES
(1, 'admin', 'admin', 'a@a.a', 'password'),
(2, 'test', 'dev', 'a@a.mail', 'motdepasse'),
(3, 'BRAVO', 'Yvan', 'y@b.com', 'travaildur'),
(4, 'BRAVO', 'Yohan', 'yohan@b.com', 'projetannée'),
(5, 'BRAVO', 'Yvanna', 'y@bb.org', 'qwerty123'),
(6, 'BRAVO', 'Ysana', 'ysana@b.fr', 'azerty972'),
(7, 'poussard', 'vaea', 'vaea@gmail.com', '$2y$10$cXA2aFyjVSa4Jdgu34QAKupUm1QfRXI1cCIfhuV26zYSJ/jWmDXsm'),
(8, 'ABC', 'Abc', 'abc@abc.fr', '$2y$10$h/xbvr9LdjwblEmK3zrwzeslyR7zbUbdp1yPUdT1YnOYbbn.POuQC'),
(11, 'azerty', 'qwerty', 'aze@rty.fr', '$2y$10$ndX6kcT1oTlNbGOJgUCKMuDAIKV.Q4BE.1KKOGOq3YC54MwbTQssu'),
(12, 'Mercredi', 'Addams', 'm@a.org', '$2y$10$Co.OU4bHYZMazV4kE3tz8.udSqSXyEnFc4NRi3bDGoFetr9.3u2Q6'),
(13, 'june', 'seven', 'j@s.b', '$2y$10$qQPp/TOboOzZyYtlIVVN4uGS.AV9eVbD6nQosc7pP18xUvlrdF6Ii'),
(14, 'bht', 'bht', 'bht.bht@fr', '$2y$10$RU99T1N194y5oK3cp4hxZ.MrXE7kTQCCFt7mErs14tJNB/KkwuI2O'),
(15, 'Admin', 'Admin', 'admin@admin.admin', '$2y$10$T6WvbnGgG.V/BazUN48CLed7YcjiLybJIFEFkqK4uXKze5M23ypWi'),
(16, 'ABBA', 'Abba', 'ab@ba.fr', '$2y$10$0BXWJf2ecUXJdueFtb7IKuEi7GbSv2TbnWVBiyX3tSHuFMOGBaLI.'),
(17, 'DE-TEBA', 'Pablo', 'p@dt.es', '$2y$10$90Z5GTXLojIznPpRJsLkPe8/8NI.3OVq4a6UlNgt04we8jhRiKUVq'),
(18, 'P', 'DT', 'p@dt.com', '$2y$10$MthoTv10MS9VgLPDKllNx.1RUM7BjWjSXIvEZm5XpYwviQ0RH2jYO'),
(19, 'XYZ', 'Xyz', 'xyz@xyz.xyz', '$2y$10$KHL5qTJ1OwKfNMyk5vla7u72zpKCWVt8uujLuhNgfewYvP5Wi97mK');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `payments_peformed`
--
ALTER TABLE `payments_peformed`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `payment_received`
--
ALTER TABLE `payment_received`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `events`
--
ALTER TABLE `events`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `payments_peformed`
--
ALTER TABLE `payments_peformed`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `payment_received`
--
ALTER TABLE `payment_received`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
