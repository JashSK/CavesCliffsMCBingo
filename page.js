const bingoCardStorage = document.querySelector('.bingo-card-mass-storage');
const achievementGuideStorage = document.querySelector('.achievements');

function generateCards() {
    let cardsHTML = '';
    for (i=0; i<bingoCards.length; i++) {
        cardsHTML += `
        <div class="bingo-card">
            <div class="bingo-card-title">Card ${i + 1}</div>
            <div class="bingo-tiles-container">${generateTiles(bingoCards[i])}</div>
        </div>
        `
    }
    bingoCardStorage.innerHTML = cardsHTML;
}

function generateTiles(card) {
    let tilesHTML = '';
    card.forEach(tile=>{
        if (tile === amogus) {
            tilesHTML += `<div class="bingo-free-space">Free Space</div>`
        } else {
            tilesHTML += `
            <div class="bingo-item">
                <p class="bingo-title">${tile.title}</p>
                <div class="bingo-item-inner">
                    <p class="bingo-description">${tile.shortDescription}</p>
                    <div class="bingo-button-container">
                        <button class="bingo-button">✔</button>
                        <button class="bingo-button">?</button>
                    </div>
                </div>
            </div>
            `
        }
    });
    return tilesHTML;
}

function generateAchievementGuide() {
    achievementHTML = '';
    bingoTiles.forEach(tile=>{
        achievementHTML += `<div id=${convertTitleToID(tile.title)} class="achievement">
        <p class="achievement-title">${tile.title}</p>
        <p class="achievement-description">${fancifyDescription(tile.longDescription)}</p>
        ${tile.imageDescription ? `<img class="achievement-image" src="images/${tile.imageDescription}" />` : ''}
        </div>`
    });
    achievementGuideStorage.innerHTML = achievementHTML;
}
function convertTitleToID(title) {
    return title.toLowerCase().replace(/[^a-z]/g,'');
}
function epiclyReplaceNumberWithLink(match, oof, num) {
    return `<a class="achievement-link" data-index="${num}" href="#${convertTitleToID(bingoTiles[Number.parseInt(num) - 1].title)}">${bingoTiles[Number(num) - 1].title}</a>`;
}
function fancifyDescription(description) {
    return description.replace(/(number )?@(\d+)/g,epiclyReplaceNumberWithLink);
}

document.body.addEventListener('click',e=>{
    if (e.target.classList.contains('bingo-card-title')) {
        document.querySelectorAll('.bingo-tiles-container.shown').forEach(el=>{
            if (el === e.target.parentElement.lastElementChild) return;
            el.classList.remove('shown');
        });
        e.target.parentElement.lastElementChild.classList.toggle(`shown`);
    }
});

generateAchievementGuide();
generateCards();
