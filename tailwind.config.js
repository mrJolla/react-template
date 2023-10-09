/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    lineClamp: ['responsive', 'hover'],
  },
  corePlugins: {
    container: false,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    function ({ addUtilities, theme, addVariant }) {
      const spacing = theme('width');

      const sizeUtility = Object.entries(spacing).reduce(
        (acc, [key, value]) => {
          acc[`.size-${key.replace(/[./]/g, '\\$&')}`] = {
            width: value,
            height: value,
          };
          acc[`.min-size-${key.replace(/[./]/g, '\\$&')}`] = {
            'min-width': value,
            'min-height': value,
          };
          acc[`.max-size-${key.replace(/[./]/g, '\\$&')}`] = {
            'max-width': value,
            'max-height': value,
          };
          return acc;
        },
        {},
      );

      addVariant('children', '& > *');
      addVariant('children-after', '& > *:after');

      addUtilities({
        ...sizeUtility,
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.pos-abs': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.pos-abs-x': {
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        },
        '.pos-abs-y': {
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        },
      });
    },
  ],
}

