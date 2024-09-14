module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003865',
        secondary: '#FF6347',
        accent: '#F0C808',
        background: '#F5F5F5',
        text: '#333333',

        dark: {
          primary: '#1E3A8A',  
          secondary: '#FF4500', 
          background: '#1A202C', 
          text: '#E5E7EB',      
          cardBackground: '#2D3748', 
          cardText: '#CBD5E0',       
          titleText: '#FFFFFF',      
          accent: '#F0C808',        
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
    },
  },
  darkMode: 'class', 
  plugins: [],
}