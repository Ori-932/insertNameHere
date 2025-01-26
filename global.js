console.log('IT’S ALIVE!');

function $$(selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}
const REPO_BASE = '/insertNameHere';
const navLinks = $$("nav a");
console.log(navLinks); 

const currentLink = navLinks.find(
    (a) => a.host === location.host && a.pathname === location.pathname
);
const ARE_WE_HOME = document.documentElement.classList.contains('home');


if (currentLink) {
    currentLink.classList.add("current");
}

let pages = [
    { url: 'index.html', title: 'Home' },
    { url: 'projects/', title: 'Projects' },
    { url: 'contact/', title: 'Contact' },
    { url: 'resume.html', title: 'Resume' }
];

let nav = document.createElement('nav');
document.body.prepend(nav);

for (let p of pages) {
    let url = p.url;
    let title = p.title;
    if (title == 'Home' || title == 'Resume' )   {
        url = `/${REPO_BASE}/${url}`;
    } else {
        url = `/${REPO_BASE}/../${url}`;
    }
    let a = document.createElement('a');
    a.href = url;
    a.textContent = title;

    a.classList.toggle('current', a.host === location.host && a.pathname === location.pathname);


    if (a.host !== location.host) {
        a.target = '_blank';
    }
    nav.append(a);
}

document.body.insertAdjacentHTML(
    'afterbegin',
    `
    <label class="color-scheme">
        Theme:
        <select id="theme-switch">
            <option value="auto">Automatic</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </label>
    `
);
const themeSwitch = document.getElementById('theme-switch');

const savedTheme = localStorage.getItem('color-scheme');
if (savedTheme) {
    document.documentElement.style.colorScheme = savedTheme;
    themeSwitch.value = savedTheme === 'light dark' ? 'auto' : savedTheme;
    document.documentElement.style.setProperty('color-scheme', savedTheme);
    themeSwitch.value = savedTheme;
}

themeSwitch.addEventListener('change', (event) => {
    const selectedTheme = event.target.value;
    localStorage.setItem('colorScheme', selectedTheme);
    document.documentElement.style.setProperty('color-scheme', selectedTheme);
    if (selectedTheme === 'auto') {
        document.documentElement.style.colorScheme = 'light dark'; 
        localStorage.removeItem('color-scheme'); 
    } else {
        document.documentElement.style.colorScheme = selectedTheme;
        localStorage.setItem('color-scheme', selectedTheme);
    }
});
