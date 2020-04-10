## JavaScript30 學習紀錄
跟著WES BOS一系列的影片，練習JavaSript，並記錄下來每篇學習到的內容

[WES BOS的GitHub](https://github.com/wesbos/JavaScript30)  
[JavaScript30官網](https://javascript30.com/)

## 01_JavaScript-Drum-Kit
#### 思考方向: 
1. 監聽鍵盤按下去的動作`'keydown'`，利用傳入的keycode來判斷是否有對應data-key的audio，若有的話則取得對應的div和audio
2. 使具有對應data-key的audio播放`audio.play()`與設置撥放時間`audio.currentTime = 0`
3. 由於這邊我們希望再按下鍵盤的時候加上特效，所以將取得div的class加上`playing`，並在Css加上樣式
4. 加上`playing`，就需要處理移除，否則會一直保持特效。所以先監聽所有`.key`具有`transitionend`事件時，移除`playing`(這邊先判斷傳入的propretyName是否為transform，若否則退出)

#### 筆記:
````
if (e.propertyName !== 'transform') {return}; //return可去除大括弧,寫成 if (e.propertyName !== 'transform') return


const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //其中.k其中也可寫div
````
1. `.classList`後面可以加上`.add()`或`.remove()`，可對`class`屬性裡面的值進行新增或移除，另外還有`.toggle()`和`.contains()`等方法
2. `transitionend`事件是伴隨著`transition`結束時觸發的，所以Css裡面的`.key`需設置該屬性
3. `querySelectorAll`與`querySelector`


## 02_CSS + JS Clock
#### 思考方向: 
1. 製作時鐘的秒針、分針、時針
2. 使用`let now = new Date()`得當前時區的時間，搭配`getSeconds()`、`getMinutes()`、`getHours()`個別取得秒、分、時。再計算轉換成角度，替秒/分/時針的style屬性`transform`添值
#### 筆記:
1. `transform-origin`屬性可以設定元素變化的原點(旋轉基礎點的位置)
2. `transition-timing-function`可設定動畫的速度曲線，亦可將值寫在`transition`內
3. 由於`transition`有設定延遲0.05秒，所以會造成秒針走到0秒時會有很明顯反彈，可以再寫判斷式，當角度為90度時，將`transition`的延遲設為0。或是若不在意延遲秒數的視覺感的話，就暫不設計這個部分
4. `setInterval(setDate, 1000)`表示每1000毫秒觸動`setDate`函式; 與`setTimeout()`不同之處在於前者會不斷觸發函式，而後者則是單次觸發
