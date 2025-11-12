'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export default function ThemeColorMeta() {
  const { theme } = useTheme();

  useEffect(() => {
    const themeColor = theme === 'dark' ? '#000814' : '#f9fbff';
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themeColor);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = themeColor;
      document.head.appendChild(meta);
    }
  }, [theme]);

  return null;
}