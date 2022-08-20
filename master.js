let _imgcover, _titlemusic, _namemusic, _pause, _nexS, _backS, _src, _numberendS
_imgcover = document.getElementById('images')
_titlemusic = document.getElementById('title-music')
_namemusic = document.getElementById('name-music')
_backS = document.getElementsByClassName('bi-skip-backward-fill')[0]
_pause = document.getElementsByClassName('bi-play-fill')[0]
_nexS = document.getElementsByClassName('bi-skip-forward-fill')[0]
_numberendS = document.getElementById('number-end')
_src = document.getElementById('audio_src')
    // audio
const _audio = [{
        name: 'Aaron Smith',
        nsoung: 'Dancin',
        numbertime: '4:16',
        bgCover: 'audio/img-cover/Aaron-smith.jpg',
        src: 'audio/Aaron-smith.mp3'
    }, {
        name: 'Billie Eilish',
        nsoung: 'Bad Guy',
        numbertime: '3:26',
        bgCover: 'audio/img-cover/Billie-Eilish-Bad-Guy.jpg',
        src: 'audio/Billie-Eilish-Bad-Guy.mp3'
    }, {
        name: 'Duke Dumont',
        nsoung: 'Ocean Drive',
        numbertime: '3:17',
        bgCover: 'audio/img-cover/Duke-Dumont.jpg',
        src: 'audio/Duke-Dumont.mp3'
    }, {
        name: 'bob marley',
        nsoung: 'Is This Love',
        numbertime: '3:26',
        bgCover: 'audio/img-cover/Is-This-Love(remix).jpg',
        src: 'audio/Is-This-Love(remix).mp3'
    }]
    // load time bar blue music
let _with_bar = document.getElementById('load-time').clientWidth
    // load time bar blue music



k = 0
if (k == 0) {
    _backS.style.opacity = ".4";
    _backS.style.cursor = "revert";
} else {
    _backS.style.opacity = "1";
    _backS.style.cursor = "pointer";
}


function _clickN() {
    if (k >= 0) {
        _backS.style.opacity = "1";
        _backS.style.cursor = "pointer";
    } else {
        _backS.style.opacity = ".4";
        _backS.style.cursor = "revert";
    }
    if (k == (_audio.length) - 1) {
        _nexS.style.opacity = ".4";
        _nexS.style.cursor = "revert";
    } else {
        _nexS.style.opacity = "1";
        _nexS.style.cursor = "pointer";
        k++
        _click()
    }
}

function _clickB() {
    if (k == 0) {
        _backS.style.opacity = ".4";
        _backS.style.cursor = "revert";
    } else if (k <= (_audio.length) - 1) {
        _backS.style.opacity = "1";
        _backS.style.cursor = "pointer";
        _nexS.style.opacity = "1";
        _nexS.style.cursor = "pointer";
        k--
        _click()
    }
}
// next music

let _append_ = document.getElementById('append-child')

function _click() {
    _namemusic.innerText = _audio[k].name
    _titlemusic.innerText = _audio[k].nsoung
    let _time_balance = _audio[k].numbertime
    _numberendS.innerText = _audio[k].numbertime
    let _stringSrcMusic = _audio[k].src.toString(0, 1000)
    _src.setAttribute('src', _stringSrcMusic)
    let _stringSrcCover = _audio[k].bgCover.toString(0, 1000)
    _imgcover.setAttribute('src', _stringSrcCover)
    if (_pause.getAttribute('data-val') == 'on') {
        _pause.setAttribute('data-val', 'off')
        _pause.classList.add('bi-play-fill')
        _pause.classList.remove('bi-pause')
    }

    // test

}



// ply ands pase music
_pause.addEventListener('click', () => {
        if (_pause.getAttribute('data-val') == 'off') {
            _pause.setAttribute('data-val', 'on')
            _pause.classList.add('bi-pause')
            _pause.classList.remove('bi-play-fill')
            _src.play()






            // setInterval(_started, 1000)





        } else if (_pause.getAttribute('data-val') == 'on') {
            _pause.setAttribute('data-val', 'off')
            _pause.classList.add('bi-play-fill')
            _pause.classList.remove('bi-pause')
            _src.pause()
        }
    })
    // let _secnds = 0

// function _started() {
//     // console.log(_with_bar)
//     console.log(_audio[k].numbertime)
//     _secnds++
//     // console.log(_secnds == _audio[k].numbertime)
//     if (_secnds <= (_audio[k].numbertime.toString(0, 4))) {
//         clearInterval(_secnds)
//         _clickN()
//     } {
//         let _time_balance = (281 - (_audio[k].numbertime))
//         _with_bar.style.width = _time_balance + "px"
//     }
// }







num = 0
    // Document createElement()

for (i = 0; i <= _audio.length; i++) {

    let _div = document.createElement('div')
    _div.innerHTML = `
        <div class="col-12 ply-list">
                <div class="row align-items-center justify-content-center">
                    <div class="col-4">
                        <img class="img-ply-list" src="${_audio[i].bgCover.toString(0, 10)}" alt="cover music">
                    </div>
                    <div class="col-6 title-ply-list">
                        <p>${_audio[i].nsoung}</p>
                        <p>${_audio[i].name}</p>
                    </div>
                    <div class="col-2 timer-ply-list">
                        <p>${_audio[i].numbertime}</p>
                    </div>
                </div>
            </div>
        `
    _append_.appendChild(_div)
    let _selected = document.getElementsByClassName('col-12 ply-list')[i]
    console.log(_selected)
    if (_selected.length == 1) {
        _selected.classList.add('bacg-acctiv')
    } else {
        _selected.classList.remove('bacg-acctiv')
    }



}
// if (i == _audio[i]) {
//     __selected = classList.add('bacg-acctiv')
// }
// console.log(_selected)