const btnsArea = document.querySelector('.btns');
const btns = document.querySelectorAll('.btn');

function addActiveStyle (element) {
    btns.forEach((item) => {
        if (item == element) {
            item.classList.add('btn_on')
        } else {
            item.classList.remove('btn_on');
        }
    })
}

btnsArea.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn') && !e.target.classList.contains('convert_btn')) {
        addActiveStyle(e.target);
    }
})