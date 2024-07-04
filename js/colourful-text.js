// 当DOM内容完全加载后执行的函数
document.addEventListener("DOMContentLoaded", function () {
    const colourfultextElement = document.getElementById("colourful-text");
    const texts = [
        "世味年来薄似纱，谁令骑马客京华？",
        "长风破浪会有时，直挂云帆济沧海。",
        "沉舟侧畔千帆过，病树前头万木春。",
        "未觉池塘春草梦，阶前梧叶已秋声。",
        "劝君莫惜金缕衣，劝君惜取少年时。",
    ];

    let currentIndex = 0; // 初始化索引
    colourfultextElement.innerText = texts[currentIndex]; // 初始显示第一个文本

    // 每8小时切换一次文本内容
    setInterval(function () {
        currentIndex = (currentIndex + 1) % texts.length; // 更新索引
        colourfultextElement.innerText = texts[currentIndex]; // 显示下一个文本
    }, 28800000); // 28800000毫秒 = 8小时
});
