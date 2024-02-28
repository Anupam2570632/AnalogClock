
setInterval(clock = () => {
    date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    const rotateH = h * 30 + m * (1 / 2) + s * (30 / 3600);
    const rotateM = m * 6 + s * (1 / 10);
    const rotateS = s * 6;

    document.getElementById('hour').style.transform = `rotate(${rotateH}deg)`;
    document.getElementById('minute').style.transform = `rotate(${rotateM}deg)`;
    document.getElementById('second').style.transform = `rotate(${rotateS}deg)`;

    document.getElementById('hour').style.transformOrigin = 'bottom';
    document.getElementById('minute').style.transformOrigin = 'bottom';
    document.getElementById('second').style.transformOrigin = 'bottom';

    console.log(h, m, s)
}, 1000)
