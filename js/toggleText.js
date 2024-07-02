// 当DOM内容完全加载后执行的函数
document.addEventListener("DOMContentLoaded", function () {
    const toggleTextElement = document.getElementById("toggleText");
    const texts = [
        "bin1site1.github.io",
        "@bin1",
    ];

    // 随机选择一个文本内容
    const randomIndex = Math.floor(Math.random() * texts.length);
    let originalText = texts[randomIndex];
    toggleTextElement.innerText = originalText;
    let isOriginalText = true;

    // 每3秒钟切换一次文本内容
    setInterval(function () {
        if (isOriginalText) {
            toggleTextElement.innerText = "bin1site1.github.io"; // 替换为你要切换的文字内容
        } else {
            toggleTextElement.innerText = originalText;
        }
        isOriginalText = !isOriginalText;
    }, 3000); // 3000毫秒 = 3秒
});
