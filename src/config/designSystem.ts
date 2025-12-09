/**
 * 全域設計系統配置
 * 在這裡統一管理字型、顏色、間距等設計 token
 */

export const designSystem = {
  // 字型系統
  fonts: {
    // 標題字型 - 使用 Playfair Display 展現奢華感
    heading: "'Playfair Display', serif",
    // 內文字型 - 使用 Inter 保持現代與易讀性
    body: "'Inter', sans-serif",
    // 特殊裝飾字型
    display: "'Cormorant Garamond', serif",
  },

  // 字型大小
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
    '8xl': '6rem',    // 96px
    '9xl': '8rem',    // 128px
  },

  // 色彩系統
  colors: {
    primary: '#0A0A0A',      // 深黑
    secondary: '#C9A961',    // 奢華金
    accent: '#8B7355',       // 古銅色
    background: '#FAFAFA',   // 淺灰背景
    text: {
      primary: '#0A0A0A',
      secondary: '#4A4A4A',
      muted: '#9CA3AF',
    },
  },

  // 間距系統
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
    '4xl': '8rem',
  },

  // 動畫時長
  transition: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
    slower: '800ms',
  },

  // 斷點
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

export type DesignSystem = typeof designSystem;
