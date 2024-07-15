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

    function getCurrentText() {
        const now = new Date();
        const hours = now.getHours();

        if (hours >= 0 && hours < 8) {
            return texts[0];
        } else if (hours >= 8 && hours < 16) {
            return texts[1];
        } else {
            return texts[2];
        }
    }

    colourfultextElement.innerText = getCurrentText(); // 初始显示当前时间段的文本

    // 每小时更新一次文本内容
    setInterval(function () {
        colourfultextElement.innerText = getCurrentText(); // 显示当前时间段的文本
    }, 3600000); // 3600000毫秒 = 1小时
});
