const opensidebar = document.querySelector('.hamburger');
const closesidebar = document.querySelector('.closesidebar');
const sidebar = document.querySelector('.sidebar');

opensidebar.addEventListener('click', function()
{
    sidebar.classList.add('openclose');
});

closesidebar.addEventListener('click', function()
{
    sidebar.classList.remove('openclose');
});