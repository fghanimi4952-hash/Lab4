import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Composant BookShelfHeader
 * 
 * Affiche l'en-tête de l'application BookShelf avec le titre centré.
 * Utilise la couleur d'accent #EE9972 pour le fond et du texte noir pour le titre.
 * 
 * Ce composant démontre l'utilisation de StyleSheet pour centraliser les styles
 * au lieu d'utiliser des styles inline dans le JSX.
 */
export default function BookShelfHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>BookShelf</Text>
    </View>
  );
}

/**
 * Styles du composant BookShelfHeader
 * 
 * Utilisation de StyleSheet.create() pour créer un objet de styles optimisé.
 * Cela améliore les performances et la lisibilité du code.
 * 
 * Palette de couleurs utilisée :
 * - #EE9972 : Couleur d'accent (fond de l'en-tête)
 * - black : Couleur du texte du titre
 */
const styles = StyleSheet.create({
  // Conteneur principal de l'en-tête
  container: {
    backgroundColor: '#EE9972', // Couleur d'accent de la charte BookShelf
    paddingVertical: 40,        // Padding vertical généreux pour aérer l'en-tête
    paddingHorizontal: 20,      // Padding horizontal pour éviter que le texte touche les bords
  },
  // Style du texte du titre
  headerText: {
    fontSize: 32,               // Taille de police grande pour un titre d'en-tête
    fontWeight: 'bold',         // Texte en gras pour mettre en évidence
    textAlign: 'center',        // Centrage du texte horizontalement
    color: 'black',             // Couleur du texte en noir pour contraste avec le fond clair
  },
});
