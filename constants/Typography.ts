import { Platform } from 'react-native';

export const Typography = {
  // Font families (easily customizable)
  families: {
    regular: Platform.OS === 'web' ? 'Inter, system-ui, sans-serif' : 'Inter-Regular',
    medium: Platform.OS === 'web' ? 'Inter, system-ui, sans-serif' : 'Inter-Medium',
    semibold: Platform.OS === 'web' ? 'Inter, system-ui, sans-serif' : 'Inter-SemiBold',
    bold: Platform.OS === 'web' ? 'Inter, system-ui, sans-serif' : 'Inter-Bold',
  },
  
  // Font sizes
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
  },
  
  // Line heights
  lineHeights: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  
  // Text styles
  styles: {
    h1: {
      fontSize: 48,
      fontFamily: Platform.OS === 'web' ? 'Inter, system-ui, sans-serif' : 'Inter-Bold',
      fontWeight: Platform.OS === 'web' ? '700' : 'normal',
      lineHeight: 1.25,
    },
    h2: {
      fontSize: 36,
      fontFamily: Platform.OS === 'web' ? 'Inter, system-ui, sans-serif' : 'Inter-Bold',
      fontWeight: Platform.OS === 'web' ? '700' : 'normal',
      lineHeight: 1.25,
    },
    h3: {
      fontSize: 30,
      fontFamily: Platform.OS === 'web' ? 'Inter, system-ui, sans-serif' : 'Inter-SemiBold',
      fontWeight: Platform.OS === 'web' ? '600' : 'normal',
      lineHeight: 1.25,
    },
    h4: {
      fontSize: 24,
      fontFamily: Platform.OS === 'web' ? 'Inter, system-ui, sans-serif' : 'Inter-SemiBold',
      fontWeight: Platform.OS === 'web' ? '600' : 'normal',
      lineHeight: 1.25,
    },
    body: {
      fontSize: 16,
      fontFamily: Platform.OS === 'web' ? 'Inter, system-ui, sans-serif' : 'Inter-Regular',
      fontWeight: Platform.OS === 'web' ? '400' : 'normal',
      lineHeight: 1.5,
    },
    bodyLarge: {
      fontSize: 18,
      fontFamily: Platform.OS === 'web' ? 'Inter, system-ui, sans-serif' : 'Inter-Regular',
      fontWeight: Platform.OS === 'web' ? '400' : 'normal',
      lineHeight: 1.5,
    },
    caption: {
      fontSize: 14,
      fontFamily: Platform.OS === 'web' ? 'Inter, system-ui, sans-serif' : 'Inter-Regular',
      fontWeight: Platform.OS === 'web' ? '400' : 'normal',
      lineHeight: 1.5,
    },
    button: {
      fontSize: 16,
      fontFamily: Platform.OS === 'web' ? 'Inter, system-ui, sans-serif' : 'Inter-SemiBold',
      fontWeight: Platform.OS === 'web' ? '600' : 'normal',
      lineHeight: 1.25,
    },
  },
};