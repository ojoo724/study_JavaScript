
function showTitle(e) {
	if(e.target.dataset.title){
        const title = document.createElement('span');
        title.textContent = e.target.dataset.title;
        title.classList.add('title');
        e.target.append(title);
    }
}


function removeTitle(e) {
	if(e.target.dataset.title){
        e.target.lastElementChild.remove();;
    }
}

// '대상'과 '타입'을 수정해 주세요
const map = document.querySelector('.map');
map.addEventListener('mouseover', showTitle);
map.addEventListener('mouseout', removeTitle);