
const hero = document.getElementById("hero");
const walls = document.querySelectorAll(".wall");
const winner = document.querySelector(".winner")
const loser = document.querySelector(".loser");
const arrival = document.querySelector(".chegada")
let isDragging = false;
let offsetX, offsetY;
const posInicial = { top: 100, left: 530 };
hero.style.top = posInicial.top + 'px'
hero.style.left = posInicial.left + 'px';
let jogoAtivo = true;

hero.addEventListener("mousedown", (e) => {
    if (!jogoAtivo) return;
    isDragging = true;
    offsetX = e.clientX - hero.offsetLeft;
    offsetY = e.clientY - hero.offsetTop;
    hero.style.cursor = "grab";
});


document.addEventListener("mousemove", (e) => {
    if (!isDragging || !jogoAtivo) return; {
        hero.style.left = (e.clientX - offsetX) + "px";
        hero.style.top = (e.clientY - offsetY) + "px";
        // Verifica colisão com cada muro
        walls.forEach(wall => {
            if (colisao(hero, wall)) {
                jogoAtivo = false;
                loser.style.display = "block";
                hero.style.top = posInicial.top + 'px';
                hero.style.left = posInicial.left + 'px';
                hero.style.animation = 'none';
                isDragging = false;
            };

            if (chegada(hero, arrival)) {
                jogoAtivo = false;

                winner.style.display = "block";
                hero.style.top = posInicial.top + 'px';
                hero.style.left = posInicial.left + 'px';
                hero.style.animation = 'none';
                isDragging = false;
            }
        });
    }
});

document.addEventListener("mouseup", () => {
    if (!jogoAtivo) return
    isDragging = false;
    hero.style.cursor = "grab";
});

function colisao(el1, el2) {
    const r1 = el1.getBoundingClientRect();
    const r2 = el2.getBoundingClientRect();

    return !(
        r1.top > r2.bottom ||
        r1.bottom < r2.top ||
        r1.left > r2.right ||
        r1.right < r2.left
    );
}

function chegada(el1, el2) {
    const r1 = el1.getBoundingClientRect();
    const r2 = el2.getBoundingClientRect();

    return !(
        r1.top > r2.bottom ||
        r1.bottom < r2.top ||
        r1.left > r2.right ||
        r1.right < r2.left
    );
}

loser.addEventListener("click", function () {
    jogoAtivo = true;
    loser.style.display = "none";

}
);
winner.addEventListener("click", function () {
    jogoAtivo = true;
    winner.style.display = "none";

}
);


