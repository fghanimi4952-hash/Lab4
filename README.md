# Lab 4 : Styliser un composant avec StyleSheet – Application BookShelf

## Overview

Ce laboratoire démontre comment styliser des composants React Native en utilisant l'API `StyleSheet` au lieu de styles inline. L'objectif est de créer une application BookShelf avec une charte graphique cohérente et un code propre et maintenable.

## Objectifs

- ✅ Styliser des composants React Native avec une palette de couleurs cohérente
- ✅ Utiliser l'API `StyleSheet` pour centraliser les styles
- ✅ Améliorer la lisibilité et la maintenabilité du code
- ✅ Créer une application avec une identité visuelle professionnelle

## Palette de couleurs

L'application BookShelf utilise la palette suivante :

- **#EE9972** : Couleur d'accent (en-tête et pied de page)
- **#333333** : Fond sombre
- **#EDEFEE** : Fond clair / Texte clair
- **black** : Texte principal
- **white** : Texte sur fond sombre

## Structure du projet

```
Lab 4/
├── App.js                  # Composant principal qui assemble tous les composants
├── BookShelfHeader.js      # En-tête de l'application
├── WelcomeScreen.js        # Écran de bienvenue avec description
├── BookShelfFooter.js      # Pied de page avec droits d'auteur
├── package.json            # Configuration du projet
└── README.md              # Documentation (ce fichier)
```

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Démarrer l'application :
```bash
npm start
```

3. Lancer sur une plateforme spécifique :
```bash
npm run ios      # Pour iOS
npm run android  # Pour Android
npm run web      # Pour le web
```

## Composants

### BookShelfHeader
- Affiche le titre "BookShelf"
- Fond : #EE9972 (couleur d'accent)
- Texte : noir, centré, grande taille (32px)

### WelcomeScreen
- Affiche un message de bienvenue et une description
- Utilise un `ScrollView` pour permettre le défilement
- Fond : #333333 (fond sombre)
- Texte : blanc et #EDEFEE

### BookShelfFooter
- Affiche les informations de droits d'auteur
- Fond : #EE9972 (cohérent avec l'en-tête)
- Texte : noir, centré

## Concepts démontrés

### StyleSheet API

Au lieu d'utiliser des styles inline :
```jsx
// ❌ À éviter (style inline)
<View style={{ backgroundColor: '#EE9972', padding: 20 }}>
  <Text style={{ fontSize: 24, color: 'black' }}>BookShelf</Text>
</View>
```

On utilise `StyleSheet.create()` :
```jsx
// ✅ Recommandé (StyleSheet)
<View style={styles.container}>
  <Text style={styles.headerText}>BookShelf</Text>
</View>

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    color: 'black',
  },
});
```

### Avantages de StyleSheet

1. **Performance** : Les styles sont optimisés et mis en cache
2. **Lisibilité** : Le JSX reste propre et lisible
3. **Maintenabilité** : Les styles sont centralisés et faciles à modifier
4. **Réutilisabilité** : Les styles peuvent être partagés entre composants
5. **Validation** : Les erreurs de style sont détectées plus facilement

## Instructions du laboratoire

### Étape 1 : Comprendre la structure
- Examiner chaque composant et son utilisation de `StyleSheet`
- Observer la cohérence de la palette de couleurs

### Étape 2 : Tester l'application
- Lancer l'application dans un émulateur
- Vérifier l'affichage de tous les composants
- Tester le défilement dans `WelcomeScreen`

### Étape 3 : Modifier et expérimenter
- Essayer de modifier les couleurs dans `StyleSheet`
- Ajouter de nouveaux styles
- Observer comment les changements affectent l'application

## Remarques importantes

- Tous les styles sont définis dans `StyleSheet.create()` et non inline
- Les noms de styles sont explicites et descriptifs
- La palette de couleurs est cohérente dans toute l'application
- Le code est commenté pour faciliter la compréhension

## Auteur

Lab créé dans le cadre du cours React Native.

## Date

2024
