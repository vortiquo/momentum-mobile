import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LogOut, User as UserIcon, Shield, Mail } from 'lucide-react-native';
import { GradientBackground } from '../../components/ui/GradientBackground';
import { GradientButton } from '../../components/ui/GradientButton';
import { useAuth } from '../../contexts/AuthContext';
import { useLocalization } from '../../hooks/useLocalization';
import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Typography';
import { Spacing } from '../../constants/Spacing';

export default function ProfileScreen() {
  const { t } = useLocalization();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', style: 'destructive', onPress: logout },
      ]
    );
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{t('tabs.profile')}</Text>
        </View>
        
        <View style={styles.content}>
          {/* User Info Card */}
          <View style={styles.userCard}>
            <View style={styles.avatarContainer}>
              <UserIcon size={32} color={Colors.primary[500]} />
            </View>
            
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user?.name}</Text>
              <View style={styles.userDetails}>
                <Mail size={16} color={Colors.dark.text.tertiary} />
                <Text style={styles.userEmail}>{user?.email}</Text>
              </View>
              <View style={styles.userDetails}>
                <Shield size={16} color={Colors.dark.text.tertiary} />
                <Text style={styles.userRole}>{user?.role?.toUpperCase()}</Text>
              </View>
            </View>
          </View>

          {/* Actions */}
          <View style={styles.actionsSection}>
            <TouchableOpacity style={styles.actionItem}>
              <Text style={styles.actionText}>Settings</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionItem}>
              <Text style={styles.actionText}>Help & Support</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionItem}>
              <Text style={styles.actionText}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>

          {/* Logout Button */}
          <View style={styles.logoutSection}>
            <GradientButton
              title="Logout"
              onPress={handleLogout}
              colors={['#ef4444', '#dc2626']}
              style={styles.logoutButton}
            />
          </View>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: Spacing.screenPadding,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.lg,
  },
  title: {
    ...Typography.styles.h2,
    color: Colors.dark.text.primary,
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.screenPadding,
  },
  userCard: {
    backgroundColor: Colors.dark.surface.secondary,
    borderWidth: 1,
    borderColor: Colors.dark.border.primary,
    borderRadius: 16,
    padding: Spacing.lg,
    marginBottom: Spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    backgroundColor: Colors.dark.surface.tertiary,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.primary[500],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.lg,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    ...Typography.styles.h3,
    color: Colors.dark.text.primary,
    marginBottom: Spacing.sm,
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  userEmail: {
    ...Typography.styles.body,
    color: Colors.dark.text.secondary,
    marginLeft: Spacing.sm,
  },
  userRole: {
    ...Typography.styles.caption,
    color: Colors.primary[400],
    fontFamily: Typography.families.semibold,
    marginLeft: Spacing.sm,
  },
  actionsSection: {
    marginBottom: Spacing.xl,
  },
  actionItem: {
    backgroundColor: Colors.dark.surface.secondary,
    borderWidth: 1,
    borderColor: Colors.dark.border.primary,
    borderRadius: 12,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
  },
  actionText: {
    ...Typography.styles.body,
    color: Colors.dark.text.primary,
    fontFamily: Typography.families.medium,
  },
  logoutSection: {
    marginTop: 'auto',
    paddingBottom: Spacing.xl,
  },
  logoutButton: {
    marginTop: Spacing.lg,
  },
});