# Entités finales du Blog

## 1. ARTICLE

- `id_article`
- `titre_article`
- `contenu_article`
- `date_publication`
- `statut_article`
- `image_article`
- `id_auteur`
- `id_categorie`

## 2. AUTEUR

- `id_auteur`
- `nom_auteur`
- `prenom_auteur`
- `email_auteur`
- `id_ville`

## 3. VILLE

- `id_ville`
- `nom_ville`

## 4. CATEGORIE

- `id_categorie`
- `nom_categorie`
- `description_categorie`

## Conclusion

Les données ont été regroupées en quatre entités : ARTICLE, AUTEUR, VILLE et CATEGORIE. Chaque entité possède son propre identifiant. Les données répétitives ont été isolées dans des entités séparées et remplacées par des identifiants dans les entités d’origine, afin d’éviter les doublons et d’assurer la cohérence des données.