

// 页面加载完成后的动画效果
document.addEventListener('DOMContentLoaded', function () {
    // 为各部分添加延迟动画效果
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100 + index * 150);
    });

    // 运行时间计算
    function updateRuntime() {
        // 设置起始时间（可根据实际情况修改）
        const startTime = new Date('2023-01-01T00:00:00');
        const now = new Date();
        const diff = now - startTime;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('runtime').textContent =
            `${days}天${hours}时${minutes}分${seconds}秒`;
    }

    // 初始化并每秒更新一次
    updateRuntime();
    setInterval(updateRuntime, 1000);

    // 随机背景色渐变效果（轻微变化）
    function changeBackgroundSlightly() {
        const hue = Math.floor(Math.random() * 30) + 135; // 保持在蓝绿色调范围
        const lightness1 = Math.floor(Math.random() * 5) + 95; // 95-100%
        const lightness2 = Math.floor(Math.random() * 5) + 75; // 75-80%

        document.body.style.background =
            `linear-gradient(135deg, hsl(${hue}, 30%, ${lightness1}%) 0%, hsl(${hue + 10}, 30%, ${lightness2}%) 100%)`;
    }

    // 每30秒轻微改变背景色
    setInterval(changeBackgroundSlightly, 30000);
});
