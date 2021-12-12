const bingoCardStorage = document.querySelector('.bingo-card-mass-storage');
const achievementGuideStorage = document.querySelector('.achievements');
const randomColorThemes = ['linear-gradient(90deg, #2f5d94,#339761)']

function setTileHeight() {
    const cardEL = document.querySelector('.bingo-card');
    document.documentElement.style.setProperty('--bingo-item-height',cardEL.offsetWidth / 5 + 'px');
}

function generateCards() {
    let cardsHTML = '';
    for (i=0; i<bingoCards.length; i++) {
        cardsHTML += `
        <div class="bingo-card">
            <div class="bingo-card-title">Card ${i + 1}<span class="msg">(Click to expand)</span></div>
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
            tilesHTML += `<div class="bingo-free-space complete"><div class="bingo-background" style="background-image: url('images/tilebg/bundle.png')"></div><span>Free Space</span></div>`
        } else {
            tilesHTML += `
            <div class="bingo-item">
                <div class="bingo-background" style="background-image: url('images/tilebg/${tile.tileBackground}')"></div>
                <p class="bingo-title">${tile.title}</p>
                <div class="bingo-item-inner">
                    <p class="bingo-description">${tile.shortDescription}</p>
                    <div class="bingo-button-container">
                        <button class="bingo-button mark-done" title="Mark as done">✔</button>
                        <a class="bingo-button fancy-link" href="#${convertTitleToID(tile.title)}" title="More information"><span>?</span></a>
                    </div>
                </div>
            </div>
            `;
        }
    });
    return tilesHTML;
}

function generateAchievementGuide() {
    achievementHTML = `<div id="abundleofjoy" class="achievement">
    <p class="achievement-title">A Bundle of Joy (FREE SPACE)</p>
    <p class="achievement-description">${fancifyDescription(`The bundle has been given a custom crafting recipe since it is currently  unobtainable in survival. You will be given a free one at the start of the game, but you can craft additional bundles with 6 leather or rabbit hides and 2 string.`)}</p>
    <img class="achievement-image" src="images/bundleofjoy.png" />
    </div>`;
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
    return `<a class="achievement-link fancy-link" data-index="${num}" href="#${convertTitleToID(bingoTiles[Number.parseInt(num) - 1].title)}">${bingoTiles[Number(num) - 1].title}</a>`;
}
function fancifyDescription(description) {
    return description.replace(/(number )?@(\d+)/g,epiclyReplaceNumberWithLink);
}
function fancyTitleFlash(tileID) {
    const tileTitleEL = document.getElementById(tileID).firstElementChild;
    tileTitleEL.classList.add('flash');
    setTimeout(()=>{
        tileTitleEL.classList.remove('flash');
    }, 1000)
}

document.body.addEventListener('click',e=>{
    if (e.target.classList.contains('bingo-card-title')) {
        document.querySelectorAll('.bingo-card.shown').forEach(el=>{
            if (el === e.target.parentElement) return;
            el.classList.remove('shown');
        });
        e.target.parentElement.classList.toggle(`shown`);
    } else if (e.target.classList.contains('mark-done')) {
        e.target.parentElement.parentElement.parentElement.classList.add('complete');
    } else if (e.target.classList.contains('complete')) {
        e.target.classList.remove('complete');
    } else if (e.target.classList.contains('fancy-link')) {
        fancyTitleFlash(e.target.href.split('#')[1]);
    }
});

window.addEventListener('resize',setTileHeight);

generateAchievementGuide();
generateCards();
setTileHeight();
