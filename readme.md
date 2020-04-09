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
