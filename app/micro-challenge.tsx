import { StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function MicroChallengeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ThemedText style={styles.backButtonText}>← Back</ThemedText>
        </TouchableOpacity>
        <ThemedText type="title" style={styles.headerTitle}>Micro-Challenge</ThemedText>
      </ThemedView>

      <ThemedView style={styles.challengeCard}>
        <ThemedText style={styles.challengeTitle}>Your Daily Challenge</ThemedText>
        <ThemedText style={styles.challengeText}>
          Go for a phone-free sunset walk (next 72 hrs)
        </ThemedText>
        
        <TouchableOpacity style={styles.acceptButton}>
          <ThemedText style={styles.acceptButtonText}>Accept Challenge</ThemedText>
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
  challengeCard: {
    padding: 24,
    borderRadius: 16,
    backgroundColor: '#F0FFF4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 20,
    alignItems: 'center',
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  challengeText: {
    fontSize: 20,
    lineHeight: 28,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 24,
  },
  acceptButton: {
    backgroundColor: '#4C1D95',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
  },
  acceptButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 