/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'serif':["ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      'mono': ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],

    },
    extend: {
      keyframes: {
        big: {
          '0%': {width : '260px'},
          '50%': {width : '460px'},
          '70%': {width : '560px'},
          '100%': {width : '720px'}
        }  ,
        small:{
             '100%': {width : '260px'},
          '70%': {width : '460px'},
          '50%': {width : '560px'},
          '0%': {width : '720px'}
        }
      },
      animation: {
        'new': 'big 0.5s ease-in-out 1',
        'old': 'small 0.3s ease-out 1'
      }
    },
    screens: {
      'level1': '120px',
      'level2': '240px',
      'level3': '370px',
      'level6': '300px',

      'level4': '480px',
      'level5': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
        50: '#f9fafb',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
      },
      grayish:{
        50:'#f8f9fa',
        100:'#e9ecef',
        200:'#dee2e6',
        300:'#ced4da',
        400:'#adb5bd',
        500:'#6c757d',
        600:'#495057',
        700:'#343a40',
        800:'#212529',
        900:'#000',
      }
    },
  },
  plugins: [],
}
