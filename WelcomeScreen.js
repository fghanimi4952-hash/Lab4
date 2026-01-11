import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

/**
 * Composant WelcomeScreen
 * 
 * Affiche l'écran de bienvenue avec un titre et une description de l'application BookShelf.
 * Utilise un ScrollView pour permettre le défilement si le contenu dépasse la hauteur de l'écran.
 * 
 * Ce composant utilise un fond sombre (#333333) avec du texte clair pour un contraste
 * élevé et une meilleure lisibilité.
 */
export default function WelcomeScreen() {
  return (
    <ScrollView 
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
      indicatorStyle="white"  // Style de l'indicateur de défilement (blanc pour fond sombre)
    >
      <View style={styles.container}>
        {/* Titre de bienvenue */}
        <Text style={styles.title}>Bienvenue sur BookShelf</Text>
        
        {/* Description de l'application */}
        <Text style={styles.description}>
          BookShelf est votre bibliothèque numérique personnelle. Découvrez, organisez
          et partagez vos livres préférés dans un environnement élégant et intuitif.
          {'\n\n'}
          Avec BookShelf, vous pouvez :
          {'\n'}
          • Explorer une vaste collection de livres
          {'\n'}
          • Créer votre propre bibliothèque personnalisée
          {'\n'}
          • Suivre votre progression de lecture
          {'\n'}
          • Partager vos recommandations avec vos amis
          {'\n\n'}
          Commencez dès maintenant à enrichir votre collection littéraire et plongez
          dans le monde passionnant de la lecture numérique.
        </Text>
      </View>
    </ScrollView>
  );
}

/**
 * Styles du composant WelcomeScreen
 * 
 * Utilisation de StyleSheet pour organiser tous les styles de manière centralisée.
 * 
 * Palette de couleurs utilisée :
 * - #333333 : Fond sombre pour l'écran principal
 * - #EDEFEE : Texte clair pour le contraste (ou white)
 * - white : Texte principal
 */
const styles = StyleSheet.create({
  // Conteneur du ScrollView (prend toute la hauteur disponible)
  scrollContainer: {
    flex: 1,                    // Permet au ScrollView de prendre tout l'espace disponible
    backgroundColor: '#333333', // Fond sombre selon la charte BookShelf
  },
  // Style du contenu à l'intérieur du ScrollView
  contentContainer: {
    flexGrow: 1,                // Permet au contenu de grandir si nécessaire
    padding: 20,                // Padding général autour du contenu
  },
  // Conteneur principal du contenu
  container: {
    flex: 1,                    // Utilise tout l'espace disponible
    paddingVertical: 20,        // Padding vertical supplémentaire
  },
  // Style du titre de bienvenue
  title: {
    fontSize: 28,               // Taille de police grande pour le titre
    fontWeight: 'bold',         // Texte en gras
    color: '#EDEFEE',           // Couleur claire pour contraste avec fond sombre
    marginBottom: 24,           // Espacement sous le titre
    textAlign: 'center',        // Centrage du titre
  },
  // Style du texte descriptif
  description: {
    fontSize: 16,               // Taille de police moyenne pour le texte de lecture
    color: 'white',             // Couleur blanche pour le texte principal
    lineHeight: 24,             // Hauteur de ligne pour améliorer la lisibilité
    textAlign: 'justify',       // Justification du texte pour un aspect professionnel
  },
});
