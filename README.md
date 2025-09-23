# HtmlSample
# 📘 React + TypeScript 學習專案

這是一個用來學習 **React + TypeScript** 的練習專案，內容包含物件導向 (`interface`, `class`)、事件處理 (button, input, loading)、以及簡單的 `http.post` 範例。  
同時，本專案也會部署到 **GitHub Pages**，作為展示與學習紀錄。

---

## 🛠️ 開發環境需求
- [Node.js](https://nodejs.org/) (建議 LTS 版本，例如 20.x)
- [npm](https://www.npmjs.com/) 或 [yarn](https://yarnpkg.com/)
- [VS Code](https://code.visualstudio.com/)

---

## 🚀 專案安裝與啟動

```bash
# 下載專案
git clone https://github.com/你的帳號/react-typescript-learning.git

cd react-typescript-learning

# 安裝套件
npm install

# 啟動本地開發伺服器
npm start
```

開啟瀏覽器，進入 [http://localhost:3000](http://localhost:3000) 就能看到頁面。

---

## 🎯 學習任務表

### 🔹 第一階段：基礎
- [x] 建立 React + TypeScript 專案
- [x] 熟悉 VS Code 基本操作
- [ ] 建立第一個 Component（顯示文字）
- [ ] 在畫面上使用 props / state
- [ ] 練習事件（Button click、Input change）

---

### 🔹 第二階段：物件與型別
- [ ] 定義 `User` 型別（`interface`）
- [ ] 定義 `User` 類別（`class`）
- [ ] 使用 `User` 型別綁定輸入框
- [ ] 顯示 `User` 資料於畫面
- [ ] 學習 `export` 與 `import` 差異

---

### 🔹 第三階段：事件與 API
- [ ] 頁面 Loading 狀態控制
- [ ] 滑鼠事件（mouseover, click）
- [ ] 表單送出與驗證
- [ ] 使用 `fetch` or `axios` 實作 `http.post`
- [ ] 處理回傳 JSON 與錯誤控制

---

### 🔹 第四階段：展示與 GitHub
- [ ] 建立 GitHub Repository
- [ ] 撰寫 `README.md`
- [ ] 使用 GitHub Pages 部署
- [ ] 測試與除錯
- [ ] 最終專案展示

---

## 🌍 GitHub Pages 部署

部署步驟：
1. 安裝 GitHub Pages 套件
   ```bash
   npm install gh-pages --save-dev
   ```
2. 修改 `package.json`
   ```json
   {
     "homepage": "https://你的帳號.github.io/react-typescript-learning",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```
3. 執行部署
   ```bash
   npm run deploy
   ```
4. 開啟網址 [https://你的帳號.github.io/react-typescript-learning](https://你的帳號.github.io/react-typescript-learning)

---

## 📌 學習筆記
- `interface` 用來定義物件型別
- `class` 可同時包含屬性與方法，較接近 C# / Java 的寫法
- 使用 `props` 傳資料，`state` 管理元件狀態
- 事件處理使用 `onClick`, `onChange` 等
- HTTP 請求可用 `fetch` 或 `axios`

---

## 📜 授權
本專案僅供學習使用。
