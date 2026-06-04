const question ="ゲーム機で一番売れたものは？";
const answers = ["ファミコン","プレステ2","スイッチ","DS"];
const correct = "DS";

document.getElementById('js-question').textContent = question; //html内のjs-questionをQuestionの内容に書き換える

const $button = document.getElementsByTagName("button"); 
// doucument.getElementsByTagName("button")[0]は、$button[0]と書き換える事ができる

$button[0].textContent = answers[0];// $はこの場合、index.html内のオブジェクトを表している
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

//クリックで正解判定
$button[0].addEventListener("click", () => {
    if(correct === $button[0].textContent){
        window.alert("正解!");
    } else {
        window.alert("不正解!");
    }
});

$button[1].addEventListener("click", () => {
    if(correct === $button[1].textContent){
        window.alert("正解!");
    } else {
        window.alert("不正解!");
    }
});

$button[2].addEventListener("click", () => {
    if(correct === $button[2].textContent){
        window.alert("正解!");
    } else {
        window.alert("不正解!");
    }
});

$button[3].addEventListener("click", () => {
    if(correct === $button[3].textContent){
        window.alert("正解!");
    } else {
        window.alert("不正解!");
    }
});
