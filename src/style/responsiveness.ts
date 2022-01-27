import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { Dimensions } from 'react-native'

export const screenWidth = Math.round(Dimensions.get('window').width)
export const screenHeight = Math.round(Dimensions.get('window').height)

const getComputed = (value: number, type: string) => {
  const dpiBuffer = screenWidth < 360 ? 1.08 : 1

  if (type === 'w') {
    const dpi = 0.267 * dpiBuffer
    return wp(`${value * dpi}%`)
  }

  if (type === 'h') {
    const dpi = 0.123 * dpiBuffer
    return hp(`${value * dpi}%`)
  }

  return value
}

export const getComputedWidth = (value: number) => getComputed(value, 'w')
export const getComputedHeight = (value: number) => getComputed(value, 'h')
