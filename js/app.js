const sections = document.getElementsByTagName('section');//declare global variable

//create Navbar with self invoking function
(function () {
    const navList = document.getElementById('navbar__list');
    for (let section of sections) {
        let listItem = document.createElement('li');
        listItem.innerHTML = `<li>
        <a href="#${section.getAttribute('id')}" class="menu__link" data-nav="${section.getAttribute('data-nav')}">${section.getAttribute('data-nav')}</a>
      </li>`;
        navList.appendChild(listItem);
    }
})();

// add scroll event whit arrow function 
document.addEventListener('scroll', () => {
    const navItems = document.getElementsByClassName('menu__link');
    for (let section of sections) {
        if (section.getBoundingClientRect().top <= 150 &&
            section.getBoundingClientRect().top >= -400) {
            section.classList.add('your-active-class');//add active class to section
            for (let item of navItems) {
                if (item.getAttribute('data-nav') == section.getAttribute('data-nav'))
                    item.classList.add('active__nav');//add active class to nav list
            }
        } else {
            section.classList.remove('your-active-class');//remove active class from section
            for (let item of navItems) {
                if (item.getAttribute('data-nav') == section.getAttribute('data-nav'))
                    item.classList.remove('active__nav');//remove active class from nav list
            }
        }
    }
});