import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as LucideIcons from 'lucide-react-native';
import { GradientBackground } from '../../components/ui/GradientBackground';
import { GradientText } from '../../components/ui/GradientText';
import { GradientButton } from '../../components/ui/GradientButton';
import { FeatureCard } from '../../components/ui/FeatureCard';
import { useLocalization } from '../../hooks/useLocalization';
import { useAuth } from '../../contexts/AuthContext';
import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Typography';
import { Spacing } from '../../constants/Spacing';

export default function HomeScreen() {
  const { t, language, changeLanguage } = useLocalization();
  const { user } = useAuth();

  const handleGetStarted = () => {
    console.log('Get Started pressed!');
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    changeLanguage(newLanguage);
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={toggleLanguage} style={styles.languageButton}>
              <LucideIcons.Globe size={24} color={Colors.dark.text.primary} />
              <Text style={styles.languageText}>{language.toUpperCase()}</Text>
            </TouchableOpacity>
          </View>

          {/* Logo Section */}
          <View style={styles.logoSection}>
            <View style={styles.logoPlaceholder}>
              <LucideIcons.Dumbbell size={32} color={Colors.primary[500]} />
            </View>
            <Text style={styles.logoText}>GYM APP</Text>
          </View>

          {/* Hero Section */}
          <View style={styles.heroSection}>
            <Text style={styles.welcomeText}>
              {user ? `Welcome back, ${user.name.split(' ')[0]}!` : t('home.welcome')}
            </Text>
            <View style={styles.brandContainer}>
              <GradientText style={styles.brandText}>
                {t('home.brandName')}
              </GradientText>
            </View>
            <Text style={styles.subtitleText}>{t('home.subtitle')}</Text>
            <Text style={styles.descriptionText}>{t('home.description')}</Text>
            
            {user?.role && (
              <View style={styles.roleContainer}>
                <Text style={styles.roleText}>Role: {user.role.toUpperCase()}</Text>
              </View>
            )}
            
            <GradientButton
              title={t('home.getStarted')}
              onPress={handleGetStarted}
              style={styles.getStartedButton}
            />
          </View>

          {/* Example Buttons Section */}
          <View style={styles.buttonsSection}>
            <Text style={styles.sectionTitle}>Quick Actions</Text>
            
            <TouchableOpacity style={styles.actionButton}>
              <LucideIcons.Play size={24} color={Colors.primary[500]} />
              <Text style={styles.buttonText}>Start Workout</Text>
              <LucideIcons.ChevronRight size={20} color={Colors.dark.text.tertiary} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <LucideIcons.BarChart3 size={24} color={Colors.secondary[500]} />
              <Text style={styles.buttonText}>View Progress</Text>
              <LucideIcons.ChevronRight size={20} color={Colors.dark.text.tertiary} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <LucideIcons.Calendar size={24} color={Colors.accent[500]} />
              <Text style={styles.buttonText}>Schedule</Text>
              <LucideIcons.ChevronRight size={20} color={Colors.dark.text.tertiary} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <LucideIcons.Settings size={24} color={Colors.primary[400]} />
              <Text style={styles.buttonText}>Settings</Text>
              <LucideIcons.ChevronRight size={20} color={Colors.dark.text.tertiary} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
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
    paddingHorizontal: Spacing.screenPadding,
    paddingBottom: Spacing.xl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: Spacing.md,
    paddingBottom: Spacing.md,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.dark.surface.secondary,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.dark.border.primary,
  },
  languageText: {
    ...Typography.styles.caption,
    color: Colors.dark.text.primary,
    marginLeft: Spacing.xs,
    fontFamily: 'Inter-SemiBold',
  },
  logoSection: {
    alignItems: 'center',
    paddingVertical: Spacing.lg,
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: Colors.dark.surface.secondary,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.primary[500],
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
    shadowColor: Colors.primary[500],
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  logoText: {
    ...Typography.styles.caption,
    color: Colors.dark.text.secondary,
    fontFamily: 'Inter-Bold',
    letterSpacing: 2,
  },
  heroSection: {
    alignItems: 'center',
    paddingVertical: Spacing.xl,
  },
  welcomeText: {
    ...Typography.styles.h2,
    color: Colors.dark.text.primary,
    textAlign: 'center',
    marginBottom: Spacing.xs,
  },
  brandContainer: {
    marginBottom: Spacing.md,
    alignItems: 'center',
  },
  brandText: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: Colors.primary[500],
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 40,
  },
  subtitleText: {
    ...Typography.styles.bodyLarge,
    color: Colors.dark.text.secondary,
    textAlign: 'center',
    marginBottom: Spacing.md,
    maxWidth: 320,
  },
  descriptionText: {
    ...Typography.styles.body,
    color: Colors.dark.text.tertiary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: Spacing.xl,
    maxWidth: 360,
  },
  getStartedButton: {
    minWidth: 200,
    marginBottom: Spacing.xl,
  },
  roleContainer: {
    backgroundColor: Colors.dark.surface.secondary,
    borderWidth: 1,
    borderColor: Colors.primary[500],
    borderRadius: 20,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  roleText: {
    ...Typography.styles.caption,
    color: Colors.primary[400],
    fontFamily: Typography.families.semibold,
  },
  buttonsSection: {
    paddingTop: Spacing.lg,
  },
  sectionTitle: {
    ...Typography.styles.h3,
    color: Colors.dark.text.primary,
    marginBottom: Spacing.lg,
    textAlign: 'center',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.dark.surface.secondary,
    borderWidth: 1,
    borderColor: Colors.dark.border.primary,
    borderRadius: 12,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
  },
  buttonText: {
    ...Typography.styles.body,
    color: Colors.dark.text.primary,
    flex: 1,
    marginLeft: Spacing.md,
    fontFamily: 'Inter-Medium',
  },
});