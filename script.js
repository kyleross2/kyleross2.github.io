const nav = document.querySelector('.top-nav');
const menuToggle = document.querySelector('.menu-toggle');
const cardToggles = document.querySelectorAll('.card-toggle');
const filterButtons = document.querySelectorAll('.filter-button');
const accomplishmentCards = document.querySelectorAll('.accomplishment-card');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

cardToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const card = toggle.closest('.accomplishment-card');
    const isOpen = card.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.querySelector('.toggle-indicator').textContent = isOpen ? 'Hide details' : 'View details';
  });
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((filterButton) => filterButton.classList.remove('is-active'));
    button.classList.add('is-active');

    accomplishmentCards.forEach((card) => {
      const categories = card.dataset.category.split(' ');
      const shouldShow = selectedFilter === 'all' || categories.includes(selectedFilter);
      card.classList.toggle('is-hidden', !shouldShow);
    });
  });
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
