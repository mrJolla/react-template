/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
          acc[`.min-size-${key.replaceAll(/[./]/g, '\\$&')}`] = {
            'min-height': value,
            'min-width': value,
          };
          acc[`.max-size-${key.replaceAll(/[./]/g, '\\$&')}`] = {
            'max-height': value,
            'max-width': value,
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
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        },
        '.pos-abs': {
          left: '50%',
          position: 'absolute',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.pos-abs-x': {
          left: '50%',
          position: 'absolute',
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
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    lineClamp: ['responsive', 'hover'],
  },
}

