# MCD complet du Blog

## 1. Les entités

### VILLE
- id_ville (Identifiant)
- nom_ville

### AUTEUR
- id_auteur (Identifiant)
- nom_auteur
- prenom_auteur
- email_auteur

### ARTICLE
- id_article (Identifiant)
- titre_article
- contenu_article
- date_publication
- statut_article
- image_article

### CATEGORIE
- id_categorie (Identifiant)
- nom_categorie

## 2. Les relations et cardinalités

### Relation 1 : habite
- VILLE (0,N)
- AUTEUR (1,1)

### Relation 2 : rédige
- AUTEUR (0,N)
- ARTICLE (1,1)

### Relation 3 : regroupe
- ARTICLE (1,1)
- CATEGORIE (0,N)

## 3. Schéma textuel du MCD

```text
VILLE (0,N) ─── habite ─── (1,1) AUTEUR

AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE

ARTICLE (1,1) ─── regroupe ─── (0,N) CATEGORIE
```

## 4. Vérification du modèle

- Les 4 entités sont présentes.
- Les 3 relations sont correctement définies.
- Les cardinalités respectent les règles de gestion.
- Les identifiants sont soulignés dans le MCD.
- Aucune donnée calculée comme duree_lecture n'est présente.

## Conclusion

Le MCD complet permet de représenter les entités du Blog, leurs attributs, leurs relations et leurs cardinalités. Il constitue la base de la conception de la future base de données.