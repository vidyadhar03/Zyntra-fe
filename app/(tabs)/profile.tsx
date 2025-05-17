import { StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ThemedView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ThemedText type="title" style={styles.title}>Profile</ThemedText>
        
        {/* User Profile Card */}
        <ThemedView style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <Image 
              source={require('../../assets/images/adaptive-icon.png')}
              style={styles.avatar}
              contentFit="cover"
            />
          </View>
          
          <ThemedView style={styles.userInfo}>
            <ThemedText style={styles.userName}>Alex Johnson</ThemedText>
            <ThemedText style={styles.userEmail}>alex.johnson@example.com</ThemedText>
            <TouchableOpacity style={styles.editButton}>
              <ThemedText style={styles.editButtonText}>Edit Profile</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>
        
        {/* Stats Summary */}
        <ThemedView style={styles.statsCard}>
          <ThemedText style={styles.sectionTitle}>Your Progress</ThemedText>
          
          <ThemedView style={styles.statsRow}>
            <ThemedView style={styles.statItem}>
              <ThemedText style={styles.statNumber}>27</ThemedText>
              <ThemedText style={styles.statLabel}>Insights</ThemedText>
            </ThemedView>
            
            <ThemedView style={styles.statItem}>
              <ThemedText style={styles.statNumber}>14</ThemedText>
              <ThemedText style={styles.statLabel}>Challenges</ThemedText>
            </ThemedView>
            
            <ThemedView style={styles.statItem}>
              <ThemedText style={styles.statNumber}>78</ThemedText>
              <ThemedText style={styles.statLabel}>Life Score</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
        
        {/* Connected Services */}
        <ThemedView style={styles.servicesCard}>
          <ThemedText style={styles.sectionTitle}>Connected Services</ThemedText>
          
          <ThemedView style={styles.serviceItem}>
            <View style={[styles.serviceIcon, { backgroundColor: '#1DB954' }]} />
            <ThemedText style={styles.serviceName}>Spotify</ThemedText>
            <ThemedText style={styles.serviceStatus}>Connected</ThemedText>
          </ThemedView>
          
          <ThemedView style={styles.serviceItem}>
            <View style={[styles.serviceIcon, { backgroundColor: '#C13584' }]} />
            <ThemedText style={styles.serviceName}>Instagram</ThemedText>
            <ThemedText style={styles.serviceStatus}>Connected</ThemedText>
          </ThemedView>
          
          <ThemedView style={styles.serviceItem}>
            <View style={[styles.serviceIcon, { backgroundColor: '#00B5B5' }]} />
            <ThemedText style={styles.serviceName}>Fitbit</ThemedText>
            <ThemedText style={styles.serviceStatus}>Not Connected</ThemedText>
          </ThemedView>
        </ThemedView>
        
        {/* Privacy Settings */}
        <ThemedView style={styles.privacyCard}>
          <ThemedText style={styles.sectionTitle}>Privacy Settings</ThemedText>
          <ThemedText style={styles.privacyText}>
            Manage your data preferences and privacy settings. Control what data Zyntra can access and how it's used.
          </ThemedText>
          <TouchableOpacity style={styles.privacyButton}>
            <ThemedText style={styles.privacyButtonText}>Privacy Settings</ThemedText>
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileCard: {
    width: '100%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    marginRight: 15,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#4C1D95',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  editButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  statsCard: {
    width: '100%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    opacity: 0.7,
  },
  servicesCard: {
    width: '100%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    marginBottom: 20,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  serviceIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 15,
  },
  serviceName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  serviceStatus: {
    fontSize: 14,
    opacity: 0.7,
  },
  privacyCard: {
    width: '100%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  privacyText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 15,
    opacity: 0.8,
  },
  privacyButton: {
    backgroundColor: '#4C1D95',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  privacyButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
}); 