import { StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function WeeklyRecapScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ThemedText style={styles.backButtonText}>← Back</ThemedText>
        </TouchableOpacity>
        <ThemedText type="title" style={styles.headerTitle}>Weekly Recap</ThemedText>
      </ThemedView>

      <ThemedView style={styles.recapContainer}>
        <ThemedText style={styles.recapTitle}>Your Week Wrapped</ThemedText>
        <ThemedText style={styles.comingSoonText}>Coming soon!</ThemedText>
        
        <ThemedView style={styles.placeholder}>
          <ThemedText style={styles.placeholderText}>
            Your weekly activity summary will appear here
          </ThemedText>
        </ThemedView>
        
        <TouchableOpacity style={styles.shareButton}>
          <ThemedText style={styles.shareButtonText}>Share Recap</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 40, // Balance with back button
  },
  recapContainer: {
    padding: 24,
    borderRadius: 16,
    backgroundColor: '#FFF5F5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 20,
    alignItems: 'center',
  },
  recapTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  comingSoonText: {
    fontSize: 16,
    marginBottom: 24,
  },
  placeholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  placeholderText: {
    textAlign: 'center',
    opacity: 0.7,
    paddingHorizontal: 20,
  },
  shareButton: {
    backgroundColor: '#E53E3E',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  shareButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 