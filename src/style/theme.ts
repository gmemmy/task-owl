import { Context, useContext, createContext } from 'react'

export const themeColors = {
  light: {},
  dark: {}
}

export type ThemeColors = typeof themeColors.light & typeof themeColors.dark

export type UseTheme = {
  theme: ThemeColors
  toggle: () => void
  mode: Mode
}

type Mode = 'light' | 'dark'

export const getTheme = (mode: Mode) => themeColors[mode]

export const ThemeManagerContext: Context<any> = createContext({
  mode: 'light',
  theme: getTheme('light'),
  toggle: () => {}
})

export const useTheme = () => useContext(ThemeManagerContext)
