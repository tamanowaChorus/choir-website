// 合唱団たまのわ サイト共通スクリプト
(function(){
  // 画像のドラッグ・右クリック保存を抑止
  document.querySelectorAll('img').forEach(function(img){
    img.setAttribute('draggable', 'false');
    img.addEventListener('contextmenu', function(e){ e.preventDefault(); });
  });

  // フッター著作権年を自動更新（©2024–現在年 / 同年なら©2024）
  var foundingYear = 2024;
  var currentYear = new Date().getFullYear();
  var text = currentYear > foundingYear
    ? foundingYear + '–' + currentYear
    : String(foundingYear);
  document.querySelectorAll('.copyright-years').forEach(function(el){
    el.textContent = text;
  });
})();
