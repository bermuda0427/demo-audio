# GitHub Pages 部署指南

## 🚀 快速部署步驟

### 步驟 1：更新 Astro 配置

`astro.config.mjs` 已經更新完成，內容如下：

```javascript
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bermuda0427.github.io',
  base: '/demo-audio',
  vite: {
    plugins: [tailwindcss()],
  },
});
```

✅ **這個檔案已經準備好，無需修改。**

---

### 步驟 2：建立 GitHub Actions 工作流程

由於權限限制，您需要**手動在 GitHub 網站上建立**這個檔案。

#### 操作步驟：

1. **前往您的 GitHub Repository**：
   https://github.com/bermuda0427/demo-audio

2. **建立新檔案**：
   - 點擊「Add file」→「Create new file」
   - 檔案路徑輸入：`.github/workflows/deploy.yml`
   - 貼上以下內容：

```yaml
name: Deploy to GitHub Pages

on:
  # 當推送到 main 分支時觸發
  push:
    branches: [main]
  # 允許手動觸發
  workflow_dispatch:

# 設定 GITHUB_TOKEN 的權限
permissions:
  contents: read
  pages: write
  id-token: write

# 只允許一個部署同時進行
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build with Astro
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. **提交檔案**：
   - Commit message：`ci: add GitHub Pages deployment workflow`
   - 點擊「Commit changes」

---

### 步驟 3：啟用 GitHub Pages

1. **前往 Repository Settings**：
   - 在您的 repo 頁面，點擊「Settings」

2. **找到 Pages 設定**：
   - 左側選單找到「Pages」

3. **配置 Source**：
   - **Source**：選擇「GitHub Actions」（不是 Deploy from a branch）
   - 這樣 GitHub 就會使用我們剛才建立的 workflow

4. **儲存設定**

---

### 步驟 4：觸發部署

建立 workflow 檔案後，GitHub Actions 會自動執行部署。

您可以在以下位置查看部署進度：
- **Actions 頁面**：https://github.com/bermuda0427/demo-audio/actions

部署完成後（約 1-2 分鐘），您的網站將可以在以下網址訪問：

🌐 **https://bermuda0427.github.io/demo-audio/**

---

## 📋 檢查清單

- [ ] 步驟 1：確認 `astro.config.mjs` 已更新（已完成）
- [ ] 步驟 2：在 GitHub 上建立 `.github/workflows/deploy.yml`
- [ ] 步驟 3：在 Settings → Pages 設定 Source 為「GitHub Actions」
- [ ] 步驟 4：等待 Actions 執行完成
- [ ] 步驟 5：訪問 https://bermuda0427.github.io/demo-audio/

---

## 🔧 故障排除

### 如果部署失敗

1. **檢查 Actions 日誌**：
   - 前往 Actions 頁面查看錯誤訊息

2. **常見問題**：
   - **權限錯誤**：確認 Settings → Actions → General → Workflow permissions 設定為「Read and write permissions」
   - **建置失敗**：檢查 `package.json` 中的依賴是否正確

### 如果頁面顯示 404

1. **確認 Pages 設定**：
   - Source 必須是「GitHub Actions」
   - 不是「Deploy from a branch」

2. **檢查部署狀態**：
   - Actions 頁面確認部署成功（綠色勾勾）

3. **等待 DNS 生效**：
   - 首次部署可能需要等待幾分鐘

---

## 🎯 完成後的網址

部署成功後，您的網站將在以下網址上線：

**🌐 https://bermuda0427.github.io/demo-audio/**

---

## 💡 提示

- 每次推送到 `main` 分支都會自動觸發部署
- 您也可以在 Actions 頁面手動觸發部署
- 建置時間約 1-2 分鐘
- 部署完成後會自動更新網站

---

## 📞 需要協助？

如果遇到任何問題，請提供：
1. Actions 頁面的錯誤訊息截圖
2. Settings → Pages 的設定截圖

我會協助您解決！
