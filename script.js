document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.querySelector(".like-Btn");
    const postMedia = document.querySelector (".post-media");
if (!likeBtn) return; 

const likesCountSpan = liekBtn.querySelector (".likes-count");
const bookmarkBtn = document.querySelector (".bookmark-btn")

let IsLiked = false;
let baseLikes = 0;

if (likesCountSpan){
    likesCountSpan.textContent = "0";
}

//números grandes

function formatLikes(num) {
    if(num >=1000){
        return (num/1000).toFixed(1)+"K";
    }
    return num.toString();

}

function addLike(){
    basedLikes++; 
    isLiked = true;
    likeBtn.classList.add("liked");

    if(likesCountSpan){
        likesCountSpan.textContent = formatLikes(baseLikes);
    }
    }
}

})