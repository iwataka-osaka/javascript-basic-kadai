 // btnというidを持つHTML要素を取得し、定数に代入する
 const Btn = document.getElementById('btn');
 // btnというidを持つHTML要素を取得し、定数に代入する
 const text = document.getElementById('text');
 
 // HTML要素がクリックされたときにイベント処理を実行する
 Btn.addEventListener('click', () => {
  // ボタンをクリックしました。
  text.textContent="ボタンをクリックしました";
 });
