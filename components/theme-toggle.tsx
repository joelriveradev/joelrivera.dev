'use client'

import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='size-4 rounded-full cursor-pointer bg-transparent border-2 border-neutral-400 dark:bg-white dark:border-transparent transition-all md:hover:scale-125'
      aria-label='Toggle theme'
    />
  )
}
