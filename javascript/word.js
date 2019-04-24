$(document).ready(() => {
    const page = (location.search.substr(location.search.length - 1, 1));
    if (page == 1) {
        $('#show').append(
            "<div id='showP1'>" +
            "<p><img class='showImage' src='../images/w1.png' /></p>" +
            "<p>剛進入青春期的女孩，因為正要開始發育，</p>" +
            "<p>對自己身體的變化感到惶恐、不安、不知所措，</p>" +
            "<p>使得身體跟心靈都變得特別敏感。</p>" +
            "<p>&nbsp;</p>" +
            "<p>部分青春期的少女缺乏應有的啟蒙教育，</p>" +
            "<p>對胸部發育不重視，有人甚至感覺胸部太大很不好意思，</p>" +
            "<p>選擇穿外套或駝背來遮掩突出的胸部，</p>" +
            "<p>也因為胸部有些女孩因而變得內向，不敢放心活動。</p>" +
            "<p>&nbsp;</p>" +
            "<p>&nbsp;</p>" +
            "<p><span style='color:#ea5dff'><strong><span style='font-size:20px'>在發達的國家，少女內衣早已盛行</span></strong></span></p>" +
            "<p>少女內衣與成人內衣被區分得很清楚，</p>" +
            "<p>這也是歐美國家很多女性胸部發育豐滿，曲線完美的原因。</p>" +
            "<p>&nbsp;</p>" +
            "<p>因為觀念的落後，在很長一段時間裡，</p>" +
            "<p>我國正值發育期的少女都是穿尺碼比較小的成人內衣，</p>" +
            "<p>而少女的胸部發育與成人不同，所以穿起來不適合也不舒服，</p>" +
            "<p><strong>影響乳房的正常發育</strong>，嚴重的會導致<strong>乳房發育不良</strong>、<strong>下垂外擴</strong>，</p>" +
            "<p>也有因為衣服質量問題導致乳房疾病。</p>" +
            "<p><img class='showImage' src='../images/w2.png' /></p>" +
            "<p><img class='showImage' src='../images/w3.png' /></p>" +
            "<p><img class='showImage' src='../images/w4.jpg' /></p>" +
            "<p><img class='showImage' src='../images/w5.png' /></p>" +
            "<p><img class='showImage' src='../images/w6.png' /></p>" +
            "<p><img class='showImage' src='../images/w7.png' /></p>" +
            "<p><img class='showImage' src='../images/w8.png' /></p>" +
            "</div>"
        );
    } else {
        $('#show').append(
            "<p><img style='width:100%;' src='../images/ww1.jpg' /></p>" +
            "<div id='showP1'>" +
            "<div class=\"title\" ng-non-bindable>" +
            "<h2 style=\"font-weight: bold; color: #000000; font-size: 30px;\">內衣尺寸? 32C? 36D?</h2>" +
            "<hr/></div>" +
            "<div class=\"description\" ng-non-bindable>" +
            "<p>「<span style=\"color:#de3b87;\">我穿什麼尺寸的內衣?</span>」「<span style=\"color:#de3b87;\">罩杯要怎麼算啊?</span>」「<span style=\"color:#de3b87;\">32? 75? 那是什麼意思啊?</span>」每次購買內衣總是冒出來這樣的問題，去店家讓店員量有點害羞又不好意思&gt;////&lt;</p>" +
            "<p>別擔心!跟著凱芮絲一起認識學習測量自已的罩杯尺寸吧<br>" +
            "其實挑選內衣尺寸最重要的就是兩個東西，一個是<span style=\"color:#de4040;\">上下胸圍</span>，另一個是<span style=\"color:#de4040;\">罩杯</span></p></div>" +
            "<div class=\"title\" ng-non-bindable>" +
            "<h2 style=\"font-weight: bold; color: #000000; font-size: 30px;\">" +
            "<span style=\"color:#fb469b;\">" +
            "<span style=\"color:#de3d7f;\">上胸圍</span>" +
            "<span style=\"color:#000000;\">與</span>" +
            "<span style=\"color:#de3d7f;\">下胸圍</span>" +
            "</span></h2><hr/></div>" +
            "<div class=\"description dataShow2\" ng-non-bindable><p> </p>" +
            "<p>上胸圍是指以BP點（即乳頭點 bustpoint）為測點，用軟皮尺水平測量胸部最豐滿處一圈，即為上胸圍尺寸喔，簡單來說就是胸部最飽滿的胸圍長度。</p>" +
            "<p>而下胸圍則是使用軟皮尺水平測量胸部底部一圈的長度喔。</p>" +
            "<p>而常見的尺寸32/34/36/38就是指下胸圍的尺寸，單位是英吋(這是美制算法，不等於英吋唷)，而另外70/75/80/85則是指公分數(為英日常用尺碼)</p>" +
            "<p>" +
            "<span style=\"color: rgb(0, 0, 0); font-family: 微軟正黑體, Verdana, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">換算表如下(以此類推)：</span>" +
            "</p>" +
            "<p style=\"text-align: center;\">" +
            "<span style=\"color: rgb(0, 0, 0); font-family: 微軟正黑體, Verdana, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">32英吋＝70公分</span>" +
            "<br style=\"color: rgb(0, 0, 0); font-family: 微軟正黑體, Verdana, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">" +
            "<span style=\"color: rgb(0, 0, 0); font-family: 微軟正黑體, Verdana, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">34英吋＝75公分</span>" +
            "<br style=\"color: rgb(0, 0, 0); font-family: 微軟正黑體, Verdana, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">" +
            "<span style=\"color: rgb(0, 0, 0); font-family: 微軟正黑體, Verdana, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">" +
            "36英吋＝80公分" +
            "</span><br style=\"color: rgb(0, 0, 0); font-family: 微軟正黑體, Verdana, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">" +
            "<span style=\"color: rgb(0, 0, 0); font-family: 微軟正黑體, Verdana, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">" +
            "38英吋＝85公分" +
            "</span>" +
            "<br style=\"color: rgb(0, 0, 0); font-family: 微軟正黑體, Verdana, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">" +
            "<span style=\"color: rgb(0, 0, 0); font-family: 微軟正黑體, Verdana, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">" +
            "40英吋＝90公分" +
            "</span></p>" +
            "<p style=\"text-align: center;\"> </p>" +
            "<p>" +
            "<span style=\"color: rgb(0, 0, 0); font-family: 微軟正黑體, Verdana, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">" +
            "凱芮絲為了方便大家選購則是在規格的地方將2種制式規格都顯示出來喔! " +
            "</span>" +
            "</p>" +
            "<p>" +
            "<span style=\"color: rgb(0, 0, 0); font-family: 微軟正黑體, Verdana, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">" +
            "所以 32B=70B=32/70B</span>" +
            "</p></div>" +
            "<div class='dataShow2'><img class='showImage' src='../images/ww2.png' /></div>" +
            "<div class='dataShow3'>" +
            "<div class='description' ng-non-bindable><p><span style='font-size:24px;'><span style='color:#ff5f9b;'>上下胸圍怎麼量呢?</span></span></p>" +
            "<p>準備一條布尺，以公分那面來測量，<br>" +
            "建議穿著沒有襯墊的內衣測量，計算會更準確。</p>" +
            "<p>女性的身體較為敏感，盡量避免在生理期脹奶、水腫或飯後測量，以免產生尺寸誤差唷！<br>" +
            "1.測量上胸圍：<br>" +
            "先將布尺水平環繞背部至BP點，照鏡子檢視，一樣要注意背部是否和前面維持同樣水平的高度，慢慢彎腰45度，將我們背部跟腋下的肉肉慢慢往胸前集中，再慢慢調整布尺就可以記好數字了。</p>" +
            "<p>2.測量下胸圍：<br>" +
            "布尺水平環繞胸部下圍(即胸部下面肋骨處)一圈，照鏡子檢視，注意布尺前後維持同樣水平高度，這樣即可記下數字了。</p></div>" +
            "</div>" +
            "<div class='dataShow3'>" +
            "<img class='showImage' src='../images/ww3.jpg' />" +
            "</div>" +
            "</div>"
        );
    }
});