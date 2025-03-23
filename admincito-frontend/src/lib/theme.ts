
// Default theme settings
export const defaultTheme = {
  colors: {
    primary: '#3b82f6',
    secondary: '#64748b',
    accent: '#f59e0b',
    background: '#f8fafc',
  },
  typography: {
    fontFamily: 'sans',
    fontSize: 16,
  },
  layout: {
    borderRadius: 8,
    spacing: 8,
    animationsEnabled: true,
  }
};

// Function to get theme from localStorage
export const getTheme = () => {
  const savedTheme = localStorage.getItem('app-theme');
  return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
};

// Function to update theme in localStorage and apply CSS variables
export const updateTheme = (theme: typeof defaultTheme) => {
  // Save to localStorage
  localStorage.setItem('app-theme', JSON.stringify(theme));
  
  // Apply CSS variables to :root
  const root = document.documentElement;
  
  // Apply colors
  root.style.setProperty('--primary-hue', extractHue(theme.colors.primary));
  root.style.setProperty('--primary-saturation', extractSaturation(theme.colors.primary) + '%');
  root.style.setProperty('--primary-lightness', extractLightness(theme.colors.primary) + '%');
  
  // Apply other theme properties
  root.style.setProperty('--radius', `${theme.layout.borderRadius}px`);
  root.style.setProperty('--font-size', `${theme.typography.fontSize}px`);
  
  // Apply font family
  document.body.className = document.body.className
    .replace(/font-\w+/, '')
    .concat(` font-${theme.typography.fontFamily}`);
    
  return theme;
};

// Helper functions to extract HSL values from hex colors
function extractHue(hexColor: string): string {
  const rgb = hexToRgb(hexColor);
  if (!rgb) return '210';
  
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  
  let hue = 0;
  
  if (delta === 0) {
    hue = 0;
  } else if (max === r) {
    hue = ((g - b) / delta) % 6;
  } else if (max === g) {
    hue = (b - r) / delta + 2;
  } else {
    hue = (r - g) / delta + 4;
  }
  
  hue = Math.round(hue * 60);
  if (hue < 0) hue += 360;
  
  return hue.toString();
}

function extractSaturation(hexColor: string): string {
  const rgb = hexToRgb(hexColor);
  if (!rgb) return '100';
  
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  
  const lightness = (max + min) / 2;
  
  let saturation = 0;
  if (delta !== 0) {
    saturation = delta / (1 - Math.abs(2 * lightness - 1));
  }
  
  return Math.round(saturation * 100).toString();
}

function extractLightness(hexColor: string): string {
  const rgb = hexToRgb(hexColor);
  if (!rgb) return '50';
  
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  
  const lightness = (max + min) / 2;
  
  return Math.round(lightness * 100).toString();
}

function hexToRgb(hex: string) {
  // Remove # if present
  hex = hex.replace(/^#/, '');
  
  // Parse hex values
  const bigint = parseInt(hex, 16);
  
  if (isNaN(bigint)) return null;
  
  // Extract rgb components
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}
