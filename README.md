###AC學期2-3_A3_restaurant_List
此為AlphaCamp學期2-3，A3作業專案的Restaurant_List
透過Express, Node. js, express-handlebars打造而成的餐廳搜尋網站 

##功能描述
-搜尋列可輸入餐廳名稱、類別、地址的關鍵字，即可顯示出相關餐廳。
-如搜尋無所需餐廳，相會顯示「找不到相關結果，請嘗試其他的關鍵字。」提示用戶下個步驟。
-點選欲檢視餐廳，即呈現該餐廳詳細資訊，包含類別、地址、電話、google map指標、評分、餐廳描述、餐廳照片、google map 顯示欄
-RWD 功能，依照不同螢幕尺寸變換照片呈列方式，方便手機版使用者瀏覽。

##Screenshots
![image](https://imgur.com/adKiuiu)
![image](https://imgur.com/sAjtRBR)
https://imgur.com/sAjtRBR

##安裝與執行步驟
-開啟終端機(Terminal) cd 到存放專案本機位置並執行:
git clone https://github.com/Tingching0602/restaurant_list.git
-初始
cd restaurant_list  //切至專案資料夾
npm install  //安裝套件
-啟動專案
npm run start  //執行程式
-開始使用 終端顯示 Express is listening on http://localhost:3000 即啟動完成
請至http://localhost:3000開始使用程式

##環境建置與需求
-Visual Studio Code -1.57.1
-Node Version Manager (nvm) for macOS 
-npm -6.4.1
-Express
-Express-Handlebars
-nodemon
