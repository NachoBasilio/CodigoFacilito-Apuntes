/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',//puede ser media, cuando el usuario tiene el modo oscuro activado, class cuando se le da click a un boton para activar el modo oscuro o false
  content: ['./*.{html,js}'],
  theme: {
    container:{
      center:true,
      padding:'2rem'
    },
    extend: {},
  },
  plugins: [],
}

