module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            primary: '#FF8B8C',
            secondary: '#D1004E',
            error: '#ED3742',
            success: '#00BA77',
            warning: '#F4B740',
            titleActive: '#2C2C2C',
            body: '#3F3F3F',
            label: '#B8BCC1',
            placehholder: '#E2E2E2'
        },
        fontFamily: {
            'body': ['Lato'],
        }
    },
    variants: {
        extend: {
            borderStyle: ['hover', 'focus'],
        },
    },
    plugins: [],
}