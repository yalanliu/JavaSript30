## JavaScript30 學習紀錄
跟著WES BOS一系列的影片，練習JavaSript，並記錄下來每篇學習到的內容

[WES BOS的GitHub](https://github.com/wesbos/JavaScript30)  
[JavaScript30官網](https://javascript30.com/)

## 01_JavaScript-Drum-Kit
#### 思考方向: 
1. 監聽鍵盤按下去的動作 `'keydown'` ，利用傳入的 keycode 來判斷是否有對應 data-key 的 audio，若有的話則取得對應的 div 和 audio
2. 使具有對應 data-key 的 audio 播放 `audio.play()` 與設置撥放時間 `audio.currentTime = 0`
3. 由於這邊我們希望再按下鍵盤的時候加上特效，所以將取得 div 的 class 加上 `playing` ，並在 CSS 加上樣式
4. 加上 `playing` ，就需要處理移除，否則會一直保持特效。所以先監聽所有 `.key` 具有 `transitionend` 事件時，移除 `playing` (這邊先判斷傳入的 propretyName 是否為 transform，若否則退出)

#### 筆記:
````
if (e.propertyName !== 'transform') {return}; //return可去除大括弧,寫成 if (e.propertyName !== 'transform') return


const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //其中.k其中也可寫div
````
1. `.classList` 後面可以加上 `.add()` 或 `.remove()` ，可對 `class` 屬性裡面的值進行新增或移除，另外還有 `.toggle()` 和 `.contains()` 等方法
2. `transitionend` 事件是伴隨著 `transition` 結束時觸發的，所以 CSS 裡面的 `.key` 需設置該屬性
3. `querySelectorAll(selectors)` 與 `querySelector(selectors)` 皆是取得符合的元素，但前者是回傳 `NodeList` (類似Array的集合)，後者則是回傳第一個符合的元素

## 02_CSS + JS Clock
#### 思考方向: 
1. 製作時鐘的秒針、分針、時針
2. 使用 `let now = new Date()` 得當前時區的時間，搭配 `getSeconds()` 、 `getMinutes()` 、 `getHours()` 個別取得秒、分、時。再計算轉換成角度，替秒/分/時針的 style 屬性 `transform` 添值
#### 筆記:
1. `transform-origin` 屬性可以設定元素變化的原點(旋轉基礎點的位置)
2. `transition-timing-function` 可設定動畫的速度曲線，亦可將值寫在 `transition` 內
3. 由於 `transition` 有設定延遲 0.05秒，所以會造成秒針走到0秒時會有很明顯反彈，可以再寫判斷式，當角度為 90度 時，將 `transition` 的延遲設為0。或是若不在意延遲秒數的視覺感的話，就暫不設計這個部分
4. `setInterval(setDate, 1000)` 表示 每1000毫秒 觸動 `setDate` 函式; 與 `setTimeout()` 不同之處在於前者會不斷觸發函式，而後者則是單次觸發

## 03_Playing-with-CSS-Variables-and-JS
#### 思考方向:
1. 先利用 CSS 原生的變數設定各個初始值
2. 抓到 inputs 的集合，用 `forEach` 監聽鼠標指針在指定的元素中移動和改變的事件，去更動 CSS 的變數中的值
#### 筆記:
1. CSS 選取器: `:root` 是一種 `pseudo-class` ，基本上與 `<html>` 相同，但前者的優先權高於後者
2. CSS 內宣告變數用法: `--custom-property-name` (前面加兩個破折號)
3. CSS 呼叫變數: `var( <custom-property-name> , <declaration-value> )` ，若前者無效，則會使用 `declaration-value` 
4. `filter` 是CSS內的濾鏡效果， `blur` 是其中一種用來控制元素模糊程度的特效
5. `addEventListene` 可監聽 HTML DOM 的事件 [可參考MDN](https://developer.mozilla.org/zh-TW/docs/Web/Events)
6. JavaSript 可以用 `dataset` 取得 DOM 裡設置的自定義資料屬性 `data-*`

## 05_Flex-Panels-Image-Gallery
#### 思考方向:
這篇著重在CSS排版的部分， JavaSript 的思考方向與第一篇 (JavaScript-Drum-Kit) 較雷同

1. 先用 CSS 將版面排出
2. 利用 JavaSript 的 `.classList.toggle()` 技巧，對 `class` 屬性裡面的值 `open` 及 `open-active` 進行: 開關切換 (新增&刪除，像是電燈按鈕一樣) 的功能
3. 針對 `open` 及 `open-active` 想要的特效也寫在 CSS 裡面
4. 抓到 `.panel` 的集合，用 `forEach` 監聽鼠標指針在指定的元素中 `click` 和 `transitionend` 進行步驟2. `.classList.toggle()` 的效果
5. 步驟4. 中 `transitionend` 可下一個判斷式， 用 `e.propertyName` 抓到觸發 `transitionend` 的屬性名稱，若含有 `flex` 的話，則
#### 筆記:
1. 作者有提到瀏覽器的差異，所以判斷式中是使用 `.includes('flex')` 而非 `===` ， `.includes()` 前面可以判斷字串內的是否含有某字詞，會得到 `true` 或 `false`

````
  Safari transitionend event.propertyName === flex
  Chrome + FireFox transitionend event.propertyName === flex-grow
````

## 06_Ajax-Type-Ahead
#### 思考方向:
1. 用 `fetch` 發送請求， 再使用 `json()` 去讀取跟解析 `json` 資料，用 `then` 連結 [參考](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise)。
2. 監聽 `input` 的 `change` 事件和 `keyup` 事件，進行 `displayMatches` 函式處理字串比對，建立了一個 `RegExp` 用於 `match` 來進行字串比對 (將此抽出獨立寫成 `findMatches` 函式)，將比對結果用 `map` 來 `return` (返回) 寫進去 HTML 中。

#### 筆記:
1. 不同於第一篇的監聽的 `keydown`，此篇是監聽 `keyup` ，會在手指離開按鍵時觸發，試著將此篇範例換成 `keydown` 卻是不合適的，會在打下一個字母時，才出現上一個字母的比對結果。 又想著既然是監聽 `keyup` ，那是否不監聽 `change` 也可有相同效果? 於是嘗試了一下是可行的。 但若反之，會與 `keydown` 出現相同的結果
2. 第五篇也有使用到的 偽類選取器 `:nth-child(an + b)` 裡面的 `an + b` 除了可以按順序選取 `an + b項` 之外，也可以輸入關鍵字 `even(偶數) 也可寫成 2n` 或 `odd(奇數) 也可寫成 2n + 1` 
3. 除了 `json` 之外，也有其他種解析種類， 像是: `text()` ，可[參考] (https://developer.mozilla.org/en-US/docs/Web/API/Body)
