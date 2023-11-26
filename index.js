var quotes = [
    "絶望してる暇あったら,うまいもの食べて寝るかな",
    "二人でする食事はご飯だけど,一人でする食事は餌だ",
    "医学がこんなにも進歩してるのに,恋愛に効く薬だけは開発されないなんて",
    "結婚って頑張ってするものじゃないわよ,自然とそうなるものよ",
    "質問に質問で返す時は正解らしいですよ"
]

var translate = [
    "有工夫绝望的话,还不如吃点好吃的去睡觉呢",
    "两个人一起吃的是饭,一个人吃的是饲料",
    "医学这么发达,却没有对恋爱有效的药",
    "结婚可不是要努力出来的,是自然而然的事",
    "用疑问句回答疑问句时，一般是说中了"
];

// 显示随机名言警句的函数
function displayRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length); // 随机生成一个索引值
    var quoteElement = document.getElementById("quote");
    var transElement = document.getElementById("translate"); // 获取展示名言警句的元素
    quoteElement.textContent = quotes[randomIndex]; 
    transElement.textContent = translate[randomIndex]; // 设置元素的文本内容为随机选中的名言警句
  }
  
  // 页面加载完毕时调用显示名言警句的函数
  window.addEventListener("load", displayRandomQuote);

  function displayGreeting() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
  
    var greetingElement = document.getElementById("greeting");
  
    if (currentHour < 12) {
      greetingElement.textContent = "主人，今天又是美好的一天";
    } else if (currentHour < 18) {
      greetingElement.textContent = "太阳这么好，不出去走走吗？";
    } else {
      greetingElement.textContent = "已经到了这个时间了...准备洗漱休息吧";
    }
  }
  
  // 页面加载完毕时调用显示语句的函数
  window.addEventListener("load", displayGreeting);