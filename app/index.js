(() => {
    const e = document.querySelector("form"),
        t = ["B", "D", "A", "D", "C"],
        l = document.querySelector("span");
    e.addEventListener("submit", (n) => {
        n.preventDefault();
        let o = 0;
        [e.q1.value, e.q2.value, e.q3.value, e.q4.value, e.q5.value].forEach(
            (e, l) => {
                e === t[l] && (o += 20);
            }
        );
        let r = 0;
        const c = setInterval(() => {
            (l.textContent = `${r}%`), r === o ? clearInterval(c) : r++;
        }, 80);
        (document.querySelector(".popupContainer").style.display = "block"),
            scrollTo(0, 0);
    }),
        document.querySelector("button").addEventListener("click", () => {
            location = "index.html";
        });
})();
