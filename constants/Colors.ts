export const Colors = {
  // Primary Theme Colors (easily customizable)
  primary: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444', // Main red
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  
  secondary: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316', // Main orange
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  
  accent: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef', // Purple/Pink accent
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
  },
  
  // Dark theme colors
  dark: {
    background: {
      primary: '#0a0f1c',
      secondary: '#1a1f2e',
      tertiary: '#252a3a',
    },
    surface: {
      primary: 'rgba(255, 255, 255, 0.05)',
      secondary: 'rgba(255, 255, 255, 0.1)',
      tertiary: 'rgba(255, 255, 255, 0.15)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#9ca3af',
      tertiary: '#6b7280',
    },
    border: {
      primary: 'rgba(255, 255, 255, 0.1)',
      secondary: 'rgba(255, 255, 255, 0.05)',
    }
  },
  
  // Gradients
  gradients: {
    primary: ['#ef4444', '#f97316'], // Red to orange
    secondary: ['#f97316', '#d946ef'], // Orange to pink
    background: ['#0a0f1c', '#1a1f2e', '#252a3a'], // Dark gradient
    card: ['rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.02)'],
  },
  
  // Status colors
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
};

// Easy theme switching
export const currentTheme = Colors;