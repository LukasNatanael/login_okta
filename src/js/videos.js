// Selecionando a BoxVideos
let boxVideos = document.querySelector('.boxVideos')
function drawVideos() {
    console.log('Criando vídeo')

    // Criando TUMBVIDEOS
    let tumbVideos = document.createElement('section')
    tumbVideos.setAttribute('class', 'tumbVideos')
    boxVideos.appendChild(tumbVideos)

    // CRIANDO VIDEOBOX
    let videoBox = document.createElement('div')
    videoBox.setAttribute('class', 'videoBox')
    tumbVideos.appendChild(videoBox)

    // CRIANDO ÁREA DE INTERAÇÃO
    let interagir = document.createElement('div')
    interagir.setAttribute('class', 'interagir')
    tumbVideos.appendChild(interagir)

    // CRIANDO LIKE E DESLIKE
    let esquerda = document.createElement('div')
    esquerda.setAttribute('class', 'esquerda')
    interagir.appendChild(esquerda)

    // LIKE
    let labelLike = document.createElement('label')
    labelLike.setAttribute('for', 'like')
    labelLike.setAttribute('id', 'likeLabel')
    esquerda.appendChild(labelLike)

    let labelInput = document.createElement('input')
    labelInput.setAttribute('type', 'radio')
    // labelInput.setAttribute('name', 'dedo')
    labelInput.setAttribute('id', 'like')
    labelInput.setAttribute('class', 'joia')
    labelLike.appendChild(labelInput)
    
    let iconeLike = document.createElement('i')
    iconeLike.setAttribute('class', 'fa-solid fa-thumbs-up')
    labelLike.appendChild(iconeLike)

    // DESLIKE
    let labelDeslike = document.createElement('label')
    labelDeslike.setAttribute('for', 'dislike')
    labelDeslike.setAttribute('id', 'dislikeLabel')
    esquerda.appendChild(labelDeslike)

    let labelInput2 = document.createElement('input')
    labelInput2.setAttribute('type', 'radio')
    // labelInput.setAttribute('name', 'dedo')
    labelInput2.setAttribute('id', 'dislike')
    labelInput2.setAttribute('class', 'joia')
    labelDeslike.appendChild(labelInput2)
    
    let iconeDeslike = document.createElement('i')
    iconeDeslike.setAttribute('class', 'fa-solid fa-thumbs-down')
    labelDeslike.appendChild(iconeDeslike)
    
    // CRIANDO FAVORITAR
    let direita = document.createElement('div')
    direita.setAttribute('class', 'direita')
    interagir.appendChild(direita)
    
    let labelFavorite = document.createElement('label')
    labelFavorite.setAttribute('for', 'favorite')
    labelFavorite.setAttribute('class', 'star')
    labelFavorite.setAttribute('id', 'starLabel')
    direita.appendChild(labelFavorite)
    
    let inputFavorite = document.createElement('input')
    inputFavorite.setAttribute('type', 'checkbox')
    inputFavorite.setAttribute('id', 'favorite')
    direita.appendChild(inputFavorite)

    let iconeEstrela = document.createElement('i')
    iconeEstrela.setAttribute('class', 'fa-solid fa-star direita')
    iconeEstrela.setAttribute('id', 'estrela')
    labelFavorite.appendChild(iconeEstrela)
}

drawVideos()
drawVideos()
drawVideos()
drawVideos()
drawVideos()
drawVideos()
drawVideos()
drawVideos()