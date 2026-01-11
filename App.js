import React from 'react';
import { View, StyleSheet } from 'react-native';
import BookShelfHeader from './BookShelfHeader';
import WelcomeScreen from './WelcomeScreen';
import BookShelfFooter from './BookShelfFooter';

/**
 * Composant principal App
 * 
 * Composition de l'application BookShelf qui assemble tous les composants :
 * - BookShelfHeader : En-tête avec le titre de l'application
 * - WelcomeScreen : Écran de bienvenue avec la description
 * - BookShelfFooter : Pied de page avec les informations de droits
 * 
 * Ce composant utilise un style global pour définir le fond de l'application
 * et utilise flex: 1 pour que le conteneur principal prenne toute la hauteur de l'écran.
 */
export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* En-tête de l'application */}
      <BookShelfHeader />
      
      {/* Écran de bienvenue (prend tout l'espace disponible grâce à flex: 1) */}
      <WelcomeScreen />
      
      {/* Pied de page de l'application */}
      <BookShelfFooter />
    </View>
  );
}

/**
 * Styles du composant App
 * 
 * Style global de l'application qui définit le conteneur principal.
 * Utilisation de StyleSheet pour centraliser les styles même au niveau de l'application.
 * 
 * Palette de couleurs :
 * - #333333 : Fond sombre de l'application (visible si le contenu ne remplit pas tout l'écran)
 */
const styles = StyleSheet.create({
  // Conteneur principal de l'application
  appContainer: {
    flex: 1,                    // Prend toute la hauteur disponible de l'écran
    backgroundColor: '#333333', // Fond sombre selon la charte BookShelf
  },
});
