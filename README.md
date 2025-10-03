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
- [V] 建立 React + TypeScript 專案
- [V] 熟悉 VS Code 基本操作
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
4.開啟網址 [https://你的帳號.github.io/react-typescript-learning](https://你的帳號.github.io/react-typescript-learning)

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


## 備註記事

- 忽略檔案放置位置-專案資料夾/.gitignore檔案
- 日誌記事位置- 跟目錄 /README.md檔案


## =====================編譯備註=====================
- 1️⃣ 單檔編譯（沒有 tsconfig.json）
如果你只是單純要編譯某個檔案，例如 src/models/user.ts：
編譯指令如下:
tsc src/models/user . ts
✅ 你可以在專案根目錄或任何地方執行，但要給 完整路徑。
❌ 如果你只輸入 tsc user . ts，就必須要在 src/models/ 這個目錄下，否則會找不到檔案。 

2️⃣ 專案編譯（有 tsconfig.json）
通常 React + TypeScript 專案會在 專案根目錄 建立一個 tsconfig.json。
 這個檔案會定義：
來源檔案的位置 (include / files / exclude)

編譯輸出的資料夾 (outDir)

編譯規則（嚴格模式、ES 版本等等）

此時只要在 專案根目錄 輸入：
tsc


TypeScript 會自動依照 tsconfig.json 搜尋並編譯所有 .ts / .tsx 檔案。
✅ 優點：不用管檔案放在哪一層，統一由 tsconfig.json 管理。
 ❌ 缺點：需要先設定好 tsconfig.json。

3️⃣ 常見建議做法
在 React + TS 專案中：
學習階段 → 你可以先用單檔編譯 (tsc xxx.ts)。

專案開發 → 建議使用 tsconfig.json，然後在根目錄執行 tsc 或 tsc -w（監聽模式，自動編譯）。


# ========================================================

📌 流程說明

.ts → tsc 編譯器 → .js → HTML

編譯：由 TypeScript 轉換成 JavaScript

輸出 JS：生成 .js 檔案供執行

HTML 使用：前端程式永遠引用 .js

⚠️ 檔案依賴關係

刪除 .ts → 仍能執行 .js，但失去原始碼維護能力

刪除 .js → 前端會報錯，必須用 tsc 重新編譯

# ===============編譯語法================

指令(tsc)
單一檔案：
tsc 要編譯的ABC.ts

會輸出 ABC.js

# ============執行測試==============

node 編譯出的ABC.js





# ======編譯前後簡易差異說明=======

# TypeScript 與 JavaScript Enum 對照表

以下展示 TypeScript `enum` 在編譯後於 JavaScript 的輸出結果。

## 編譯前 TypeScript 原始碼
#ts
enum Color 
{
  Red,
  Green,
  Blue
}
## ========編譯後的 JavaScript
"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));

console.log(Color.Red);   // 0
console.log(Color.Green); // 1
console.log(Color.Blue);  // 2


| 名稱  | TypeScript 寫法 | JavaScript 編譯結果 |
| ----- | ------------- | --------------- |
| Red   | `Color.Red`   | `0`             |
| Green | `Color.Green` | `1`             |
| Blue  | `Color.Blue`  | `2`             |
