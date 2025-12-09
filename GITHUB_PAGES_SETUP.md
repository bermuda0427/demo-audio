# 🚀 GitHub Pages 部署 - 3 步驟完成

## 📋 您需要做的事情

### ✅ 步驟 1：建立 GitHub Actions 工作流程檔案

1. 前往：https://github.com/bermuda0427/demo-audio

2. 點擊「Add file」→「Create new file」

3. 檔案路徑輸入：`.github/workflows/deploy.yml`

4. 貼上以下完整內容：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

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

5. 點擊「Commit changes」

---

### ✅ 步驟 2：啟用 GitHub Pages

1. 在您的 repo 頁面，點擊「**Settings**」

2. 左側選單找到「**Pages**」

3. 在「Build and deployment」區塊：
   - **Source**：選擇「**GitHub Actions**」（如您截圖所示的下拉選單）
   - **不要**選「Deploy from a branch」

4. 點擊「**Save**」（如果有的話）

---

### ✅ 步驟 3：等待部署完成

1. 前往「**Actions**」頁籤：
   https://github.com/bermuda0427/demo-audio/actions

2. 您會看到一個正在執行的工作流程（黃色圓圈）

3. 等待約 1-2 分鐘，直到變成綠色勾勾 ✅

4. 部署完成！訪問您的網站：

   **🌐 https://bermuda0427.github.io/demo-audio/**

---

## 🎯 完成！

部署成功後，您的高端音響網站將在以下網址上線：

### **https://bermuda0427.github.io/demo-audio/**

---

## 💡 自動部署

從現在開始，每次您推送程式碼到 `main` 分支，網站都會自動更新！

---

## ❓ 常見問題

### Q: 顯示 404 怎麼辦？
A: 確認 Settings → Pages 的 Source 是「GitHub Actions」，不是「Deploy from a branch」

### Q: 部署失敗怎麼辦？
A: 前往 Actions 頁面查看錯誤訊息，通常是權限問題

### Q: 需要多久才能看到網站？
A: 首次部署約 1-2 分鐘，後續更新也是 1-2 分鐘

---

**準備好了嗎？開始步驟 1 吧！** 🚀
