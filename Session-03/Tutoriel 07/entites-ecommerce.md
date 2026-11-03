# Entités finales du système e-commerce

## 1. CLIENT

- `id_client`
- `nom_client`

## 2. COMMANDE

- `id_commande`
- `date_commande`
- `id_client`

## 3. PRODUIT

- `id_produit`
- `nom_produit`

## 4. LIGNE_COMMANDE

- `id_commande, id_produit`
- `quantite_commandee`

## Conclusion

Le système e-commerce contient quatre entités : CLIENT, COMMANDE, PRODUIT et LIGNE_COMMANDE.

L’entité COMMANDE contient `id_client` pour identifier le client associé à chaque commande.

L’entité LIGNE_COMMANDE utilise un identifiant composé de `id_commande` et `id_produit` afin de relier chaque produit à une commande. La donnée `quantite_commandee` dépend de ces deux identifiants et se trouve donc dans cette entité.