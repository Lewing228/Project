// Scroll до блока при нажатии на кнопку

function slowScroll(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);
}



// Фильтрация блоков по нажатию определенной кнопки

const filterBox = document.querySelectorAll('.panel');

document.getElementById('sorting1').addEventListener('click', event =>{

    if(event.target.tagName !== 'LI')
        return false;

    let filterClass = event.target.dataset['f'];

    filterBox.forEach( elem =>{
        elem.classList.remove('hide')
        if(!elem.classList.contains(filterClass) && filterClass !== 'ALL'){
            elem.classList.add('hide')
        }
    });
});


// Переворот карточки

$('.contact .catalog_btn').click(function(e){
	$(this).closest('.contact').addClass('flip');
	e.preventDefault();
  });
  $('.contact .catalog_btn2').click(function(e){
	$(this).closest('.contact').removeClass('flip');
	e.preventDefault();
  });

// Замена цвета кнопок при нажатии

const sorting = document.getElementById('sorting1');
const changeClass = el =>{

    for(let i = 0; i < sorting.children.length; i++){
        sorting.children[i].classList.remove('active');
    }
    el.classList.add('active');
    
}

sorting.addEventListener('click', e =>{

    if(e.target.tagName !== 'LI') return false;

    changeClass(e.target);
})

// Выпадающий список Explore city

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    let dropdowns = document.getElementsByClassName("explore_links");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Замена содержмого при нажатии на ссылку в выпадающем окне

let HIDDEN_CLASS_NAME = 'hidden';
let TARGET_CLASS_NAME = 'blocks_explore_city';
let SOURCE_CLASS_NAME = 'source';

let targetIdToShow = 1;

function main() {
	let targets = getElements(TARGET_CLASS_NAME)
	let sources = getElements(SOURCE_CLASS_NAME)
	sources.forEach(function (sourceNode) {
		let sourceNodeId = extractId(sourceNode, SOURCE_CLASS_NAME)
		sourceNode.addEventListener('click', function () {
			showTarget(targets, sourceNodeId)
		})
	})
	showTarget(targets, targetIdToShow)
}

function getElements(type) {
	return [].slice.call(document.querySelectorAll('.' + type)).sort(function (targetNode1, targetNode2) {
		let target1Num = extractId(targetNode1, TARGET_CLASS_NAME)
		let target2Num = extractId(targetNode2, TARGET_CLASS_NAME)
		return target1Num > target2Num
	})
}

function extractId(targetNode, baseClass) {
	let currentClassIndex = targetNode.classList.length
	while (currentClassIndex--) {
		let currentClass = targetNode.classList.item(currentClassIndex)
		let maybeIdNum = parseInt(currentClass.split('-')[1])
		if (isNaN(maybeIdNum)) {
			continue
		}
		let classStrinToValidate = baseClass + '-' + maybeIdNum
		if (classStrinToValidate === currentClass) {
			return maybeIdNum
		}
	}
}

function showTarget(targets, targetId) {
	targets.forEach(function (targetNode, targetIndex) {
    let currentTargetNodeId = extractId(targetNode, TARGET_CLASS_NAME)
		if (currentTargetNodeId === targetId) {
			targetNode.classList.remove(HIDDEN_CLASS_NAME)
		} else {
			targetNode.classList.add(HIDDEN_CLASS_NAME)
		}
	})
}

main()


// Модальное окно авторизации

var modal = document.getElementById("myModal");
var btn = document.getElementById("btn_end_page");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "visible";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	document.body.style.overflow = "visible";
  }
}

