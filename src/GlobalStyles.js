import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => (props.theme ? 'gray' : 'black')};
  }
`

export const darkTheme = {
    mainColor: '#3a332b',
    secondaryColor: '#302924',
    darkButtonBG: '#1d1a15',
    dangerColor: '#db3b37',
    borderColor: '#9c622c',
    mainDark: '#fa8212',
    mainMedium: '#fa8212',
    mainLight: '#fcc32f',
    iconColor: '#fcc32f',
    borderRadius: '15px',
};
export const lightTheme = {
    mainColor: '#d4cdc4',
    secondaryColor: '#c8a98c',
    dangerColor: '#db3b37',
    borderColor: '#9b4e23',
    iconColor: '#d5a129',
    borderRadius: '15px',
};
