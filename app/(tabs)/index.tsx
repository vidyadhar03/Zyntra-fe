import { StyleSheet, TouchableOpacity, ScrollView, Dimensions, View } from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  // Navigate to other screens
  const navigateToInsight = () => {
    router.push('/daily-insight');
  };

  const navigateToChallenge = () => {
    router.push('/micro-challenge');
  };

  const navigateToRecap = () => {
    router.push('/weekly-recap');
  };

  return (
    <ThemedView style={styles.container}>
      {/* Background */}
      <View style={[styles.background, { backgroundColor: isDark ? '#16213E' : '#f9fafb' }]} />
      
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <ThemedView style={styles.headerContainer}>
          <ThemedText style={styles.headerTitle}>Zyntra</ThemedText>
          <Image 
            source={require('../../assets/images/adaptive-icon.png')}
            style={styles.headerIcon}
            contentFit="contain"
          />
        </ThemedView>

        {/* Life Score Section */}
        <View style={styles.scoreContainer}>
          <ThemedText style={styles.scoreLabel}>Your Life Score</ThemedText>
          <View style={styles.scoreCircle}>
            <View style={[styles.scoreCircleBg, { backgroundColor: '#7C3AED' }]} />
            <ThemedText style={styles.scoreText}>78</ThemedText>
          </View>
          <ThemedText style={styles.scoreSubtext}>Looking good this week!</ThemedText>
        </View>

        {/* Navigation Cards */}
        <ThemedView style={styles.cardsSection}>
          <ThemedText style={styles.sectionTitle}>Your Wellness Journey</ThemedText>
          
          <TouchableOpacity 
            style={styles.card} 
            onPress={navigateToInsight}
            activeOpacity={0.9}
          >
            <View style={[styles.cardGradient, { backgroundColor: isDark ? '#4C1D95' : '#EEF2FF' }]} />
            <Image 
              source={require('../../assets/images/icon.png')}
              style={styles.cardIcon}
              contentFit="contain"
            />
            <ThemedView style={styles.cardContent}>
              <ThemedText style={styles.cardTitle}>Daily Insight</ThemedText>
              <ThemedText style={styles.cardSubtitle}>Your "Aha!" moment awaits</ThemedText>
            </ThemedView>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.card} 
            onPress={navigateToChallenge}
            activeOpacity={0.9}
          >
            <View style={[styles.cardGradient, { backgroundColor: isDark ? '#047857' : '#ECFDF5' }]} />
            <Image 
              source={require('../../assets/images/icon.png')}
              style={styles.cardIcon}
              contentFit="contain"
            />
            <ThemedView style={styles.cardContent}>
              <ThemedText style={styles.cardTitle}>Micro-Challenge</ThemedText>
              <ThemedText style={styles.cardSubtitle}>Small steps, big impact</ThemedText>
            </ThemedView>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.card} 
            onPress={navigateToRecap}
            activeOpacity={0.9}
          >
            <View style={[styles.cardGradient, { backgroundColor: isDark ? '#B91C1C' : '#FEF2F2' }]} />
            <Image 
              source={require('../../assets/images/icon.png')}
              style={styles.cardIcon}
              contentFit="contain"
            />
            <ThemedView style={styles.cardContent}>
              <ThemedText style={styles.cardTitle}>Weekly Recap</ThemedText>
              <ThemedText style={styles.cardSubtitle}>Your life, wrapped</ThemedText>
            </ThemedView>
          </TouchableOpacity>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  scoreContainer: {
    margin: 20,
    borderRadius: 20,
    overflow: 'hidden',
    padding: 25,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  scoreLabel: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  scoreCircle: {
    height: 150,
    width: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  scoreCircleBg: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  scoreText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  scoreSubtext: {
    fontSize: 16,
    marginTop: 10,
  },
  cardsSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    borderRadius: 16,
    marginBottom: 15,
    height: 100,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  cardGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  cardIcon: {
    width: 50,
    height: 50,
    marginLeft: 20,
  },
  cardContent: {
    flex: 1,
    padding: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    opacity: 0.7,
  },
});
