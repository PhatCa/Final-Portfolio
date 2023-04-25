let navLinks = document.querySelectorAll('a.inner-link');

navLinks.forEach((item) => {
  item.addEventListener('click',function(){
    document.querySelector('nav ul li a.active').classList.remove('active')
    document.querySelector(`nav ul li a[href='${item.getAttribute('href')}']`).classList.add('active')
    document.querySelector('main > section.active').classList.remove('active')
    document.querySelector(`main > section${item.getAttribute('href')}`).classList.add('active')
  })
})



document.querySelector('#sidebar .toggle-sidebar').addEventListener('click',function(){
  document.querySelector('#sidebar').classList.toggle('open')
})

var typed = new Typed('.field h2', {
  strings: ['Software Engineer', 'Backend Developer', 'Frontend Developer'],
  loop: true,
  typeSpeed: 90,
  backSpeed: 15,
});

const shuffleInstance = new Shuffle(document.querySelector('#my_work .work-items'),{
  itemSelector: '.item',
});

const filterButtons = document.querySelectorAll('#my_work .filters button')

filterButtons.forEach((item)=>{
  item.addEventListener('click', workFilter)
})

function workFilter(){
  const clickedButton = event.currentTarget;
  const clickedButtonGroup = clickedButton.getAttribute('data-group')
  const activeButton = document.querySelector('#my_work .filters button.active')

  activeButton.classList.remove('active');
  clickedButton.classList.add('active');

  shuffleInstance.filter(clickedButtonGroup)
}

var workModal = new bootstrap.Modal(document.getElementById('workModal'))

const workElements = document.querySelectorAll("#my_work .work-items .wrap")
workElements.forEach((item)=>{
  item.addEventListener('click', function(){
    workModal.show()
  })
})

var workModalElement = document.getElementById('workModal')
workModalElement.addEventListener('show.bs.modal', function (event){
  document.getElementById('my_work').classList.add('blur')
  document.getElementById('sidebar').classList.add('blur')

})

workModalElement.addEventListener('hidden.bs.modal', function (event){
  document.getElementById('my_work').classList.remove('blur')
  document.getElementById('sidebar').classList.remove('blur')
})

workElements.forEach((item)=>{
  item.addEventListener('click',function (){
    document.querySelector('#workModal .modal-body img').setAttribute('src', item.getAttribute('data-image'))
    document.querySelector('#workModal .modal-body .title').innerText = item.getAttribute('data-title')
    document.querySelector('#workModal .modal-body .description').innerText = item.getAttribute('data-description')
    document.querySelector('#workModal .modal-body .client .value').innerText = item.getAttribute('data-client')
    document.querySelector('#workModal .modal-body .completed .value').innerText = item.getAttribute('data-completed')
    document.querySelector('#workModal .modal-body .skills .value').innerText = item.getAttribute('data-skills')
    document.querySelector('#workModal .modal-body .live-project-link a').setAttribute('href', item.getAttribute('data-live-project-link'))
    document.querySelector('#workModal .modal-body .github-project-link a ').setAttribute('href', item.getAttribute('data-github-project-link'))
    workModal.show()
  })
})

let contactFromItems = document.querySelectorAll('#contact_me .form input, #contact_me .form textarea')

contactFromItems.forEach((item)=>{
  item.addEventListener('focus', function(){
    item.parentElement.classList.add('focus')
  })

  item.addEventListener('blur', function(){
    if(!item.value){
      item.parentElement.classList.remove('focus')
    }
  })
})

// get the toggle-mode element
const toggleMode = document.querySelector('.toggle-mode');

// add a click event listener to toggle mode
toggleMode.addEventListener('click', () => {
  // toggle the body class to change the background color
  document.body.classList.toggle('dark-mode');
  // toggle the light-mode class to change other styles
  document.body.classList.toggle('light-mode');
});

