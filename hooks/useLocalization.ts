import { useState, useEffect } from 'react';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';

import enTranslations from '../locales/en';
import esTranslations from '../locales/es';

const translations = {
  en: enTranslations,
  es: esTranslations,
};

type Language = keyof typeof translations;
type TranslationKey = keyof typeof enTranslations;

export const useLocalization = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSavedLanguage();
  }, []);

  const loadSavedLanguage = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem('user-language');
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
        setLanguage(savedLanguage as Language);
      } else {
        // Use device locale if available
        const deviceLanguage = (Localization.locale && Localization.locale.startsWith('es')) ? 'es' : 'en';
        setLanguage(deviceLanguage);
      }
    } catch (error) {
      console.error('Error loading language:', error);
      setLanguage('en');
    } finally {
      setIsLoading(false);
    }
  };

  const changeLanguage = async (newLanguage: Language) => {
    try {
      await AsyncStorage.setItem('user-language', newLanguage);
      setLanguage(newLanguage);
    } catch (error) {
      console.error('Error saving language:', error);
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return {
    language,
    changeLanguage,
    t,
    isLoading,
    availableLanguages: Object.keys(translations) as Language[],
  };
};