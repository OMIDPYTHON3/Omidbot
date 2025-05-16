const botToken = "7766998076:AAFpRXqOsbjph2eQoWz9CpeBCTBzAF5ncpU";
const chatId = "5861650867";

// محاسبه ضرب
const result = 82 * 818;
const message = `نتیجه ۸۲ × ۸۱۸ برابر است با: ${result}`;

// ارسال پیام
fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: new URLSearchParams({
    chat_id: chatId,
    text: message
  })
})
.then(res => res.json())
.then(data => {
  if (data.ok) {
    console.log("پیام با موفقیت ارسال شد");
  } else {
    console.error("خطا در ارسال پیام:", data);
  }
})
.catch(err => console.error("خطای ارتباطی:", err));