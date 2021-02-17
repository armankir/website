module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                blue: {
                    'dark-contrast': '#1d2838'
                },
                discord: {
                    'DEFAULT': '#7289DA'
                }
            }
        }
    },
    plugins: [require('@flybywiresim/tailwind-config')],
};
