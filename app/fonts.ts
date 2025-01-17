import { Nanum_Pen_Script } from 'next/font/google'
import { Poppins } from 'next/font/google'

export const nanumPen = Nanum_Pen_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const poppins = Poppins({
  weight: ['400', '700'], // 可選權重
  subsets: ['latin'],
  display: 'swap',
})
