import { StyleSheet, TouchableOpacity, Dimensions, View } from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  const handleGetStarted = () => {
    // Navigate to the main app
    router.replace('/(tabs)');
  };

  return (
    <ThemedView style={styles.container}>
      <View style={[styles.background, { backgroundColor: '#4C1D95' }]} />
      
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/adaptive-icon.png')}
          style={styles.logo}
          contentFit="contain"
        />
      </View>
      
      <ThemedView style={styles.contentContainer}>
        <ThemedText style={styles.title}>
          Sagey
        </ThemedText>
        
        <ThemedText style={styles.tagline}>
          Unify your life data. Gain personalized insights. Build better habits.
        </ThemedText>
        
        <ThemedText style={styles.subtitle}>
          Your holistic wellness companion
        </ThemedText>
        
        <TouchableOpacity 
          style={styles.getStartedButton} 
          onPress={handleGetStarted}
          activeOpacity={0.8}
        >
          <ThemedText style={styles.getStartedText}>Get Started</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: (width * 0.35) / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  contentContainer: {
    width: '90%',
    maxWidth: 500,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 30,
    borderRadius: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
    lineHeight: 26,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    color: 'rgba(255, 255, 255, 0.8)',
    fontStyle: 'italic',
  },
  getStartedButton: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  getStartedText: {
    color: '#4C1D95',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 