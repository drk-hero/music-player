let _imgcover, _titlemusic, _namemusic, _pause, _nexS, _backS, _src, _numberendS, _numberendM, _numberendT, _clear
_imgcover = document.getElementById('images')
_titlemusic = document.getElementById('title-music')
_namemusic = document.getElementById('name-music')
_backS = document.getElementsByClassName('bi-skip-backward-fill')[0]
_pause = document.getElementsByClassName('bi-play-fill')[0]
_nexS = document.getElementsByClassName('bi-skip-forward-fill')[0]
_numberendS = document.getElementById('number-s')
_numberendM = document.getElementById('number-m')
_numberendT = document.getElementById('time-ended')
_src = document.getElementById('audio_src')
    // audio
const _audio = [{
        name: 'Aaron Smith',
        nsoung: 'Dancin',
        numbertime: 256,
        bgCover: 'audio/img-cover/Aaron-smith.jpg',
        src: 'audio/Aaron-smith.mp3',
        timeended: '4:16'
    }, {
        name: 'Billie Eilish',
        nsoung: 'Bad Guy',
        numbertime: 206,
        bgCover: 'audio/img-cover/Billie-Eilish-Bad-Guy.jpg',
        src: 'audio/Billie-Eilish-Bad-Guy.mp3',
        timeended: '3:26'
    }, {
        name: 'Duke Dumont',
        nsoung: 'Ocean Drive',
        numbertime: 197,
        bgCover: 'audio/img-cover/Duke-Dumont.jpg',
        src: 'audio/Duke-Dumont.mp3',
        timeended: '3:17'
    }, {
        name: 'bob marley',
        nsoung: 'Is This Love',
        numbertime: 266,
        bgCover: 'audio/img-cover/Is-This-Love(remix).jpg',
        src: 'audio/Is-This-Love(remix).mp3',
        timeended: '3:26'
    }]
    // load time bar blue music

let _with_bar = document.getElementById('load-time')

// load time bar blue music

k = 0
if (k == 0) {
    _backS.style.opacity = ".4";
    _backS.style.cursor = "revert";
} else {
    _backS.style.opacity = "1";
    _backS.style.cursor = "pointer";
}

let _selectur = document.getElementsByClassName('vinyl')

function _clickN() {
    _selected[k].style.backgroundColor = "#27468400"
    _selectur[k].style.opacity = "0"
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
    _selected[k].style.backgroundColor = "#27468400"
    _selectur[k].style.opacity = "0"
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
let _time_balance

function _click() {
    _namemusic.innerText = _audio[k].name
    _titlemusic.innerText = _audio[k].nsoung
    _time_balance = _audio[k].numbertime
    _numberendT.innerHTML = _audio[k].timeended
    let _stringSrcMusic = _audio[k].src.toString(0, 1000)
    _src.setAttribute('src', _stringSrcMusic)
    let _stringSrcCover = _audio[k].bgCover.toString(0, 1000)
    _imgcover.setAttribute('src', _stringSrcCover)
    if (_pause.getAttribute('data-val') == 'on') {
        _pause.setAttribute('data-val', 'off')
        _pause.classList.add('bi-play-fill')
        _pause.classList.remove('bi-pause')
    }
    _selected[k].style.backgroundColor = "#274684"
    _Reaset()
}


// ply ands pase music
_pause.addEventListener('click', () => {
    if (_pause.getAttribute('data-val') == 'off') {
        _pause.setAttribute('data-val', 'on')
        _pause.classList.add('bi-pause')
        _pause.classList.remove('bi-play-fill')
        _clear = setInterval(_started, 999)
        _selectur[k].style.opacity = "1"
        _src.play()
    } else if (_pause.getAttribute('data-val') == 'on') {
        _pause.setAttribute('data-val', 'off')
        _pause.classList.add('bi-play-fill')
        _pause.classList.remove('bi-pause')
        clearInterval(_clear)
        _selectur[k].style.opacity = "0"
        _src.pause()
    }
})
let _minet = 0,
    _secnds = 0,
    _checktime = 0

function _started() {
    // console.log(_with_bar)
    let _time_S = _audio[k].numbertime
    _secnds++
    _checktime++
    _with_bar.style.width = ((_checktime * 100) / _time_S) + "%"
    if (_checktime < _time_S) {
        if (_secnds <= 60) {
            if (_secnds < 10) {
                _numberendS.innerText = "0" + _secnds
            } else {
                _numberendS.innerText = _secnds
            }
        } else {
            _secnds = 0
            _minet++
            if (_minet < 10) {
                _numberendM.innerText = "0" + _minet
            } else {
                _numberendM.innerText = _minet++
            }
        }
    } else {
        _Reaset()
        _numberendS.innerText = "0" + _secnds
        _numberendS.innerText = "0" + _minet
        _clickN()
    }
}

function _Reaset() {
    clearInterval(_clear)
    _minet = 0
    _secnds = 0
    _checktime = 0
    _with_bar.style.width = "0%"
    _numberendS.innerText = "00"
    _numberendM.innerText = "00"
}





// Document createElement()
let _selected
for (i = 0; i <= _audio.length; i++) {
    let _div = document.createElement('div')
    _div.innerHTML = `
        <div class="col-12 ply-list">
                <div class="row align-items-center justify-content-center">
                    <div class="col-4">
                        <img class="img-ply-list" src="${_audio[i].bgCover.toString(0, 10)}" alt="cover music">
                        <img class="vinyl" src="audio/img-cover/vinyl.png" alt="cover music">
                    </div>
                    <div class="col-6 title-ply-list">
                        <p>${_audio[i].nsoung}</p>
                        <p>${_audio[i].name}</p>
                    </div>
                    <div class="col-2 timer-ply-list">
                    <p>${_audio[i].timeended}</p>
                    </div>
                </div>
            </div>
        `
    _append_.appendChild(_div)
    _selected = document.getElementsByClassName('col-12 ply-list')
    _selected[i].setAttribute('data-select', 'off')

    // if (_selected == _audio[k]) {
    //     _selected.classList[i].add('bacg-acctiv')
    // } else {
    //     _selected.classList.remove('bacg-acctiv')
    // }
}