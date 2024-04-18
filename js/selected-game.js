$(document).ready(() => {
    const goTop = document.querySelector('#top');
     console.log(goTop);

window.onscroll = () => {
    // console.log('window.pageYOffset = ', window.pageYOffset);
  window.scrollY > 100 ?
    goTop.style.opacity = 1
    :goTop.style.opacity = 0
}
    const gameNames = [];
    const initialBodyState = $('body').html();
    const aList = [...$('.highlight a')];
    const backHomeBtn = `<button class="buttons home back"><a href="#">Home</a></button>`;

   
    const getItemById = (isThereSome) => games.find(item => item.id === isThereSome);
    aList.forEach(a => {
        // console.log($(game).text())
        // gameNames.push($(a).text())

        $(a).click(() => {
            window.scrollTo(0, 0);
            let isThereSome = $(a).text();
            const gameData = getItemById(isThereSome);
            console.log('game selected:', gameData);
            $('body').html(`
            <div class="section1">  
            <h1 class='game-name title' style="${gameData?.name_size}"><span class="shady-letter" >${gameData.name}</span></h1>
            <div class="box border">
                    <div id="triangle" class="border">
                </div>
                <p class="disclaimer border">" ${gameData.disclaimer} "
                </p>
            </div>
            <figure id="sockphoto">
                <img id="image" loading="lazy" src="${gameData.picture}"
                alt="${gameData.alt}" style="${gameData.picture_width}">
                <figcaption id="img-caption" style="${gameData.picture_width}"></figcaption>
            </figure>
            <p class="description">${gameData.description}</p>
            <br>
            <h2>Aperçu du jeu</h2>
            <br>
            <figure>
            <img id="image" loading="lazy" src="${gameData.display}"
            alt="A Mawumag" style="width:60%">
            <figcaption id="img-caption">${gameData.displayDescription}</figcaption>
            </figure>
            <br>
            <p><strong>Nombre de joueurs: </strong> ${gameData.players}</p>
            <p><strong>Durée moyenne:</strong> ${gameData.length}</p>
            <p> <em>${gameData.tags}</em></p>
            <br>
            ${backHomeBtn}
            <br>
        </div>`);

        $('.back').click(() => {
            console.log('I am logged bitch')
            window.scrollTo(0,0);
            location.reload();
        })
    })
    
});
    // console.log(gameNames)
})