const content = document.querySelector('#main-content');
const drawerButton = document.querySelector('#drawer-button');
const drawerNavigation = document.querySelector('#navigation-drawer');

drawerButton.addEventListener('click', () => {
  drawerNavigation.classList.toggle('open');
});

document.body.addEventListener('click', (event) => {
  if (!drawerNavigation.contains(event.target) && !drawerButton.contains(event.target)) {
    drawerNavigation.classList.remove('open');
  }

  drawerNavigation.querySelectorAll('a').forEach((link) => {
    if (link.contains(event.target)) {
      drawerNavigation.classList.remove('open');
    }
  });
});
