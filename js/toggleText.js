// 当DOM内容完全加载后执行的函数
document.addEventListener("DOMContentLoaded", function () {
    const toggleTextElement = document.getElementById("toggleText");
    const texts = [
        "bin1site1.github.io",
        "@时光忘忧",
        "@𝙏𝙞𝙢𝙚𝙇𝙤𝙩𝙪𝙨",
    ];

    let currentIndex = 0; // 初始化索引
    toggleTextElement.innerText = texts[currentIndex]; // 初始显示第一个文本

    // 每3秒钟切换一次文本内容
    setInterval(function () {
        currentIndex = (currentIndex + 1) % texts.length; // 更新索引
        toggleTextElement.innerText = texts[currentIndex]; // 显示下一个文本
    }, 3000); // 3000毫秒 = 3秒
});
