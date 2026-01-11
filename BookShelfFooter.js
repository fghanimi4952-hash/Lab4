import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Composant BookShelfFooter
 * 
 * Affiche le pied de page de l'application BookShelf avec les informations de droits d'auteur.
 * Utilise la couleur d'accent #EE9972 pour le fond, identique à l'en-tête, créant
 * une cohérence visuelle dans l'application.
 * 
 * Ce composant démontre comment utiliser StyleSheet pour maintenir une palette
 * de couleurs cohérente dans toute l'application.
 */
export default function BookShelfFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        Tous droits réservés – BookShelf, 2024
      </Text>
    </View>
  );
}

/**
 * Styles du composant BookShelfFooter
 * 
 * Utilisation de StyleSheet.create() pour définir les styles de manière centralisée.
 * Les styles sont réutilisables et faciles à modifier.
 * 
 * Palette de couleurs utilisée :
 * - #EE9972 : Couleur d'accent (fond du pied de page, identique à l'en-tête)
 * - black : Couleur du texte pour un bon contraste avec le fond clair
 */
const styles = StyleSheet.create({
  // Conteneur principal du pied de page
  container: {
    backgroundColor: '#EE9972', // Couleur d'accent cohérente avec l'en-tête
    paddingVertical: 20,        // Padding vertical pour aérer le contenu
    paddingHorizontal: 20,      // Padding horizontal pour éviter que le texte touche les bords
    marginBottom: 0,            // Pas de marge en bas (au bas de l'écran)
  },
  // Style du texte du pied de page
  footerText: {
    fontSize: 14,               // Taille de police moyenne pour un pied de page
    textAlign: 'center',        // Centrage du texte
    color: 'black',             // Couleur noire pour contraste avec le fond clair
    fontWeight: '500',          // Poids de police légèrement plus élevé pour la lisibilité
  },
});
