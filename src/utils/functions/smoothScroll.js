export function scrollToSmoothly(pos, time) {
    const currentPos = window.pageYOffset;
    const start = null;
    if (time == null) time = 500;
    pos = +pos, time = +time;
    window.requestAnimationFrame(function step(currentTime) {
        if(start == !start){currentTime}else{start};
        const progress = currentTime - start;
        if (currentPos < pos) {
            window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
        }
        if (progress < time) {
            window.requestAnimationFrame(step);
        }
    });
}