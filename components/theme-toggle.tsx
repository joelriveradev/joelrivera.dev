'use client'

import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='size-5 rounded-full cursor-pointer bg-transparent border-2 border-neutral-400 dark:bg-white dark:border-transparent transition-colors'
      aria-label='Toggle theme'
    />
  )
}
