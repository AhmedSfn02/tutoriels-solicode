<?php
// fonctions.php — Module de gestion des données du Blog

/**
 * Récupère la liste des derniers articles depuis le fichier JSON
 * @return array Liste des articles sous forme de tableaux associatifs
 */
function get_derniers_articles() {
    $fichier = __DIR__ . '/data/articles.json';

    // 1. Vérification de sécurité
    if (!file_exists($fichier)) {
        return [];
    }

    // 2. Lecture du fichier texte
    $contenu_json = file_get_contents($fichier);

    // 3. Décodage en tableau associatif
    $articles = json_decode($contenu_json, true);

    // 4. Renvoi des données ou d'un tableau vide en cas d'erreur
    return is_array($articles) ? $articles : [];
}

/**
 * Récupère la liste des catégories depuis le fichier JSON
 * @return array Liste des catégories sous forme de tableaux associatifs
 */
function get_categories() {
    $fichier = __DIR__ . '/data/categories.json';

    if (!file_exists($fichier)) {
        return [];
    }

    $contenu_json = file_get_contents($fichier);
    $categories = json_decode($contenu_json, true);

    return is_array($categories) ? $categories : [];
}