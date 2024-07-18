// 当DOM内容完全加载后执行的函数
document.addEventListener("DOMContentLoaded", function () {
    const colourfultextElement = document.getElementById("colourful-text");
    const texts = [
        "世味年来薄似纱，谁令骑马客京华？",
        "长风破浪会有时，直挂云帆济沧海。",
        "未觉池塘春草梦，阶前梧叶已秋声。",
        "劝君莫惜金缕衣，劝君惜取少年时。",
    ];

    function getCurrentText() {
        const now = new Date();
        const hours = now.getHours();

        if (hours >= 0 && hours < 6) {
            return texts[0];
        } else if (hours >= 6 && hours < 12) {
            return texts[1];
        } else if (hours >= 12 && hours < 18) {
            return texts[2];
        } else {
            return texts[3];
        }
    }

    colourfultextElement.innerText = getCurrentText(); // 初始显示当前时间段的文本

    // 每6小时更新一次文本内容
    setInterval(function () {
        colourfultextElement.innerText = getCurrentText(); // 显示当前时间段的文本
    }, 21600000); // 21600000毫秒 = 6小时

    // 确保在0点时更新文本内容
    function updateAtMidnight() {
        const now = new Date();
        const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
        const timeUntilMidnight = midnight - now;

        setTimeout(function () {
            colourfultextElement.innerText = getCurrentText(); // 在0点时更新文本内容
            setInterval(function () {
                colourfultextElement.innerText = getCurrentText(); // 每6小时更新一次文本内容
            }, 21600000); // 21600000毫秒 = 6小时
        }, timeUntilMidnight);
    }

    updateAtMidnight();
});
