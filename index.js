
const searchBar = document.querySelector('.search-bar');
const dropdown = document.querySelector('.dropdown');
const searchIcon = document.querySelector('.search-icon');


searchBar.addEventListener('click', (e) => {
  dropdown.style.display = 'block';
  e.stopPropagation();
});
searchIcon.addEventListener('click', (e) => {
  searchBar.focus();
  dropdown.style.display = 'block';
  e.stopPropagation();
});

document.addEventListener('click', (e) => {
  if (!searchBar.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});

const showMoreBtn = document.getElementById('show-more-btn');
showMoreBtn.style.display = 'flex'
showMoreBtn.style.alignItems = 'center'
showMoreBtn.style.justifyContent = 'center'
showMoreBtn.style.gap = '4px'
const moreNews = document.querySelector('.more-news');

showMoreBtn.addEventListener('click', () => {
  moreNews.classList.toggle('hidden');
  if (!moreNews.classList.contains('hidden')) { showMoreBtn.innerHTML = 'show less <i class="fa-solid fa-chevron-up"></i>' }
  else {
    showMoreBtn.innerHTML = 'show more <i class="fa-solid fa-chevron-down"></i>'
  }
});


const popup = document.querySelector('.popup')
const infoIcon = document.querySelector('.info-icon')

infoIcon.addEventListener('click', (e) => {
  popup.classList.toggle('hidden')
  e.stopPropagation();
})

document.addEventListener('click', (event) => {
  if (popup.contains(event.target)) return;
  popup.classList.add('hidden')
})

const navbarRight = document.querySelector('.navbar-right')
const profileMenu = document.querySelector('.profile-menu-wrap')

navbarRight.addEventListener('click', (e) => {
  profileMenu.classList.toggle('hidden')
  e.stopPropagation();
})

document.addEventListener('click', (e) => {
  if (!profileMenu.contains(e.target) || profileMenu.contains(e.target))  {
    profileMenu.classList.add('hidden')
  }
})


  function showPage(pageId) {
   document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active')
   })
   document.getElementById(pageId).classList.add('active')
}

const ProfileImg = document.querySelector('.profile-img-routing');
const PostImg = document.querySelector('.post-img-routing');
const homeIcon = document.getElementById('home-icon');
const viewProfileBtn = document.querySelector('.view-profile-btn');

ProfileImg.addEventListener('click' , ()=> {

  homeIcon.classList.remove('active')
})

PostImg.addEventListener('click' , ()=> {
  homeIcon.classList.remove('active')
})

homeIcon.addEventListener('click' , () => {
  homeIcon.classList.add('active')
})
viewProfileBtn.addEventListener('click' , () => {
  homeIcon.classList.remove('active')
})

