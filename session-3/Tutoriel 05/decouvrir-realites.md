# Découvrir les entités, les identifiants et les répétitions

## Tableau d’analyse

| Donnée observée | Valeur répétée | Réalité représentée | Identifiant proposé | Dépendance fonctionnelle |
|---|---|---|---|---|
| `nom_auteur` | Madani (3 fois) | Auteur | `id_auteur` | `id_auteur -> nom_auteur` |
| `nom_ville` | Tanger (3 fois), Rabat (2 fois) | Ville | `id_ville` | `id_ville -> nom_ville` |
| `nom_categorie` | Développement (4 fois) | Catégorie | `id_categorie` | `id_categorie -> nom_categorie` |

## Conclusion

L’observation des répétitions permet de découvrir de nouvelles entités comme Auteur, Ville et Catégorie. Chaque entité possède son propre identifiant, qui permet de déterminer les informations associées.