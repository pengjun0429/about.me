// 要輪播顯示的稱呼或技能字串陣列
const textArray = ["創作者", "前端開發者", "網頁設計師"];
const typingDelay = 120;   // 打字速度 (毫秒)
const erasingDelay = 80;   // 刪除速度 (毫秒)
const newTextDelay = 1800; // 打完一個詞後停留的時間 (毫秒)

let textIndex = 0;
let charIndex = 0;

const typingTextElement = document.getElementById("typing-text");

// 打字邏輯
function type() {
  if (charIndex < textArray[textIndex].length) {
    typingTextElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    // 打字完成，等待一段時間後開始刪除
    setTimeout(erase, newTextDelay);
  }
}

// 刪除邏輯
function erase() {
  if (charIndex > 0) {
    typingTextElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    // 刪除完成，切換到下一個詞
    textIndex++;
    if (textIndex >= textArray.length) textIndex = 0; // 循環回到第一個
    setTimeout(type, typingDelay + 300);
  }
}

// 頁面載入完成後啟動效果
document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, 500);
});
