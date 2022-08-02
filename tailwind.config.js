/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    fontFamily:{
      'inter-extrabold':['inter extrabold','Ubuntu','Roboto'],
      'inter-bold':['inter bold','Ubuntu','Roboto'],
      'inter-semibold':['inter semibold','Ubuntu','Roboto'],
      'inter-medium':['inter medium','Ubuntu','Roboto'],
      'inter-normal':['inter normal','Ubuntu','Roboto'],
      'inter-light':['inter light','Ubuntu','Roboto'],
      'inter-extralight':['inter extralight','Ubuntu','Roboto'],

      'karla-extrabold':['karla extrabold','Ubuntu','Roboto'],
      'karla-bold':['karla bold','Ubuntu','Roboto'],
      'karla-semibold':['karla semibold','Ubuntu','Roboto'],
      'karla-medium':['karla medium','Ubuntu','Roboto'],
      'karla-normal':['karla normal','Ubuntu','Roboto'],
      'karla-light':['karla light','Ubuntu','Roboto'],
      'karla-extralight':['karla extralight','Ubuntu','Roboto'],
    }
  },
  plugins: [],
}
