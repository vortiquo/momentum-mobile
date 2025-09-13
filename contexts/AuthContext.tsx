import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter, useSegments } from 'expo-router';
import { apiService } from '../services/api';
import { User, AuthTokens, LoginCredentials, AuthState } from '../types/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  checkAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    tokens: null,
    isAuthenticated: false,
    isLoading: true,
  });

  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  useEffect(() => {
    const inAuthGroup = segments[0] === 'auth';

    if (!authState.isLoading) {
      if (!authState.isAuthenticated && !inAuthGroup) {
        // Redirect to auth if not authenticated
        router.replace('/auth');
      } else if (authState.isAuthenticated && inAuthGroup) {
        // Redirect to main app if authenticated
        router.replace('/(tabs)');
      }
    }
  }, [authState.isAuthenticated, authState.isLoading, segments]);

  const checkAuthStatus = async () => {
    try {
      const [tokensJson, userJson] = await Promise.all([
        AsyncStorage.getItem('auth_tokens'),
        AsyncStorage.getItem('user_data'),
      ]);

      if (tokensJson && userJson) {
        const tokens: AuthTokens = JSON.parse(tokensJson);
        const user: User = JSON.parse(userJson);

        // Check if token is expired
        const now = Date.now() / 1000;
        const tokenExpiry = tokens.expiresIn;

        if (now < tokenExpiry) {
          setAuthState({
            user,
            tokens,
            isAuthenticated: true,
            isLoading: false,
          });
          return;
        }
      }

      // No valid auth found
      setAuthState({
        user: null,
        tokens: null,
        isAuthenticated: false,
        isLoading: false,
      });
    } catch (error) {
      console.error('Error checking auth status:', error);
      setAuthState({
        user: null,
        tokens: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  };

  const login = async (credentials: LoginCredentials) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }));
      
      const authResponse = await apiService.login(credentials);
      
      setAuthState({
        user: authResponse.user,
        tokens: authResponse.tokens,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  const logout = async () => {
    try {
      await apiService.logout();
      setAuthState({
        user: null,
        tokens: null,
        isAuthenticated: false,
        isLoading: false,
      });
    } catch (error) {
      console.error('Logout error:', error);
      // Force logout even if API call fails
      setAuthState({
        user: null,
        tokens: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  };

  const contextValue: AuthContextType = {
    ...authState,
    login,
    logout,
    checkAuthStatus,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}