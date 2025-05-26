module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#4F46E5', // indigo-600
                    dark: '#7C3AED' // violet-600
                },
                secondary: {
                    light: '#10B981', // emerald-500
                    dark: '#059669' // emerald-600
                }
            }
        },
    },
    plugins: [],
}