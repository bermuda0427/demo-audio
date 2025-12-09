# Astro 企業網站通用地基

高擴充性的企業網站 Starter Template，技術堆疊為 **Astro + Tailwind CSS v4 + TypeScript + GSAP**。

這個架構未來只需調整 Config 檔即可套用於任何產業。

## ✨ 特色

- 🚀 **Astro v5** - 現代化靜態網站生成框架
- 🎨 **Tailwind CSS v4** - 原子化 CSS，設計系統中控
- 📝 **TypeScript** - 完整型別支援
- 🎬 **GSAP ScrollTrigger** - 滾動觸發動畫
- 📱 **響應式設計** - 手機、平板、桌面全適配
- 🖼️ **圖片優化** - 自動 WebP/AVIF 轉換

## 📁 檔案結構

```
src/
├── config/
│   └── siteConfig.ts      # 全站配置（公司資訊、導航、社群連結）
├── components/
│   ├── Hero.astro         # 通用 Hero 元件
│   └── ui/
│       └── Section.astro  # 通用區塊容器
├── layouts/
│   └── Layout.astro       # 主佈局（SEO + GSAP 初始化）
├── pages/
│   └── index.astro        # 範例首頁
├── scripts/
│   └── animations.ts      # GSAP 動畫模組
└── styles/
    └── global.css         # 設計系統 (Design Tokens)
```

## 🚀 快速開始

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置產品版本
npm run build
```

## ⚙️ 配置說明

### 1. 修改全站配置

編輯 `src/config/siteConfig.ts`：

```typescript
export const siteConfig: SiteConfig = {
  name: '您的公司名稱',
  description: '您的公司描述',
  url: 'https://your-domain.com',
  contact: {
    phone: '+886-2-1234-5678',
    email: 'contact@example.com',
    address: '台北市...',
  },
  navigation: [
    { label: '首頁', href: '/' },
    { label: '關於我們', href: '/about' },
    // ...
  ],
  // ...
};
```

### 2. 調整設計系統

編輯 `src/styles/global.css` 中的 `@theme` 區塊：

```css
@theme {
  /* 顏色 */
  --color-primary: oklch(0.45 0.12 250);
  --color-secondary: oklch(0.60 0.15 160);
  
  /* 字型 */
  --font-sans: "Inter", "Noto Sans TC", sans-serif;
  
  /* 容器 */
  --container-max: 1280px;
}
```

### 3. 使用 GSAP 動畫

在任意元素加上 `data-animate` 屬性：

```html
<div data-animate="fade-up" data-animate-delay="0.2">
  內容會在滾動時淡入上移
</div>
```

**支援的動畫類型：**
| 動畫 | 效果 |
|------|------|
| `fade-up` | 從下往上淡入 |
| `fade-in` | 淡入 |
| `slide-left` | 從右往左滑入 |
| `slide-right` | 從左往右滑入 |
| `scale-up` | 縮放淡入 |

## 📦 元件說明

### Hero.astro

通用 Hero 元件，支援兩種版型：

```astro
<!-- 置中版型 -->
<Hero
  title="標題"
  subtitle="副標題"
  layout="centered"
  cta={[
    { label: '按鈕文字', href: '/link', variant: 'primary' }
  ]}
/>

<!-- 圖左文右版型 -->
<Hero
  title="標題"
  image={myImage}
  layout="split"
/>
```

### Section.astro

通用區塊容器：

```astro
<Section background="alt" spacing="lg">
  <!-- 內容 -->
</Section>
```

**Props:**
- `background`: `'default'` | `'alt'` | `'dark'` | `'primary'`
- `spacing`: `'sm'` | `'md'` | `'lg'`

## 📄 License

MIT License
