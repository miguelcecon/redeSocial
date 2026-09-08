document.addEventListener("DOMContentLoaded", () => {

    const likeBtn = document.querySelector(".like-btn");
    const likesCountSpan = document.querySelector(".likes-count");
    const likesText = document.querySelector(".likes");
    const postMedia = document.querySelector(".post-media");

    const bookmarkBtn = document.querySelector(".bookmark-btn");

    if (!likeBtn) return;

    // Estado da curtida
    let isLiked = false;

    // Curtidas iniciais
    let baseLikes = 1200;

    // Formata números
    function formatLikes(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + "K";
        }

        return num.toString();
    }

    // Atualiza a quantidade ao lado do coração
    function updateLikeButton() {
        if (likesCountSpan) {
            likesCountSpan.textContent = formatLikes(baseLikes);
        }
    }

    // Atualiza o texto abaixo da publicação
    function updateLikesText() {
        if (!likesText) return;

        likesText.innerHTML =
            `Liked by <strong>GeorgeHarrison</strong> and <strong>${baseLikes - 1} others</strong>`;
    }

    // Anima o coração
    function animateHeart() {
        const svg = likeBtn.querySelector("svg");

        if (!svg) return;

        svg.style.transform = "scale(1.4)";

        setTimeout(() => {
            svg.style.transform = "scale(1)";
        }, 150);
    }

    // Curtir
    function likePost() {

        if (isLiked) return;

        isLiked = true;
        baseLikes++;

        likeBtn.classList.add("liked");

        updateLikeButton();
        updateLikesText();
        animateHeart();
    }

    // Descurtir
    function unlikePost() {

        if (!isLiked) return;

        isLiked = false;
        baseLikes--;

        likeBtn.classList.remove("liked");

        updateLikeButton();
        updateLikesText();
        animateHeart();
    }

    // Clique no coração
    likeBtn.addEventListener("click", (event) => {

        event.stopPropagation();

        if (isLiked) {
            unlikePost();
        } else {
            likePost();
        }

    });

    // Dois cliques na foto para curtir
    if (postMedia) {

        postMedia.addEventListener("dblclick", (event) => {

            event.stopPropagation();

            likePost();

        });

    }

    // Botão salvar
    if (bookmarkBtn) {

        let isBookmarked = false;

        bookmarkBtn.addEventListener("click", (event) => {

            event.stopPropagation();

            isBookmarked = !isBookmarked;

            bookmarkBtn.classList.toggle(
                "bookmarked",
                isBookmarked
            );

            const svg = bookmarkBtn.querySelector("svg");

            if (svg) {

                svg.style.transform = "scale(1.2)";

                setTimeout(() => {
                    svg.style.transform = "scale(1)";
                }, 150);

            }

        });

    }

    // Inicializa os valores
    updateLikeButton();
    updateLikesText();

});
