import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Lock, Mail, Eye, EyeOff, Dumbbell } from 'lucide-react-native';
import { GradientBackground } from '../../components/ui/GradientBackground';
import { GradientButton } from '../../components/ui/GradientButton';
import { useAuth } from '../../contexts/AuthContext';
import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Typography';
import { Spacing } from '../../constants/Spacing';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);
    try {
      await login({ email: email.trim(), password });
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Logo Section */}
            <View style={styles.logoSection}>
              <View style={styles.logoContainer}>
                <Dumbbell size={40} color={Colors.primary[500]} />
              </View>
              <Text style={styles.logoText}>GYM APP</Text>
              <Text style={styles.welcomeText}>Welcome Back</Text>
              <Text style={styles.subtitleText}>Sign in to continue your fitness journey</Text>
            </View>

            {/* Form Section */}
            <View style={styles.formSection}>
              {/* Email Input */}
              <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                  <Mail size={20} color={Colors.dark.text.tertiary} style={styles.inputIcon} />
                  <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    placeholderTextColor={Colors.dark.text.tertiary}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
              </View>

              {/* Password Input */}
              <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                  <Lock size={20} color={Colors.dark.text.tertiary} style={styles.inputIcon} />
                  <TextInput
                    style={[styles.textInput, styles.passwordInput]}
                    placeholder="Password"
                    placeholderTextColor={Colors.dark.text.tertiary}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeIcon}
                  >
                    {showPassword ? (
                      <EyeOff size={20} color={Colors.dark.text.tertiary} />
                    ) : (
                      <Eye size={20} color={Colors.dark.text.tertiary} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              {/* Demo Credentials */}
              <View style={styles.demoSection}>
                <Text style={styles.demoTitle}>Demo Credentials:</Text>
                <Text style={styles.demoText}>Email: user@example.com (User)</Text>
                <Text style={styles.demoText}>Email: admin@example.com (Admin)</Text>
                <Text style={styles.demoText}>Password: any password</Text>
              </View>

              {/* Login Button */}
              <GradientButton
                title={isLoading ? 'Signing In...' : 'Sign In'}
                onPress={handleLogin}
                disabled={isLoading}
                style={styles.loginButton}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.screenPadding,
    paddingVertical: Spacing.xl,
  },
  logoSection: {
    alignItems: 'center',
    paddingTop: Spacing['2xl'],
    paddingBottom: Spacing.xl,
  },
  logoContainer: {
    width: 100,
    height: 100,
    backgroundColor: Colors.dark.surface.secondary,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.primary[500],
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
    shadowColor: Colors.primary[500],
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 12,
  },
  logoText: {
    ...Typography.styles.h4,
    color: Colors.dark.text.primary,
    fontFamily: Typography.families.bold,
    letterSpacing: 2,
    marginBottom: Spacing.md,
  },
  welcomeText: {
    ...Typography.styles.h2,
    color: Colors.dark.text.primary,
    marginBottom: Spacing.sm,
  },
  subtitleText: {
    ...Typography.styles.body,
    color: Colors.dark.text.secondary,
    textAlign: 'center',
    maxWidth: 280,
  },
  formSection: {
    flex: 1,
    paddingTop: Spacing.xl,
  },
  inputContainer: {
    marginBottom: Spacing.lg,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.dark.surface.secondary,
    borderWidth: 1,
    borderColor: Colors.dark.border.primary,
    borderRadius: 12,
    paddingHorizontal: Spacing.md,
    paddingVertical: Platform.OS === 'ios' ? Spacing.md : Spacing.sm,
  },
  inputIcon: {
    marginRight: Spacing.sm,
  },
  textInput: {
    ...Typography.styles.body,
    color: Colors.dark.text.primary,
    flex: 1,
    paddingVertical: Platform.OS === 'android' ? Spacing.sm : 0,
  },
  passwordInput: {
    paddingRight: Spacing.md,
  },
  eyeIcon: {
    padding: Spacing.xs,
  },
  demoSection: {
    backgroundColor: Colors.dark.surface.secondary,
    borderWidth: 1,
    borderColor: Colors.dark.border.primary,
    borderRadius: 12,
    padding: Spacing.md,
    marginBottom: Spacing.xl,
  },
  demoTitle: {
    ...Typography.styles.caption,
    color: Colors.primary[400],
    fontFamily: Typography.families.semibold,
    marginBottom: Spacing.xs,
  },
  demoText: {
    ...Typography.styles.caption,
    color: Colors.dark.text.tertiary,
    marginBottom: 2,
  },
  loginButton: {
    marginTop: Spacing.md,
  },
});