const toggleBtn = document.getElementById('sidebar-toggle')
const closeBtn = document.getElementById('close-button')
const sidebar = document.getElementById('sidebar')
const show = document.getElementsByClassName('show-sidebar')
const hide = document.getElementsByClassName('hide-sidebar')

toggleBtn.addEventListener('click', () => {
    sidebar.classList.replace('hide-sidebar', 'show-sidebar')
    
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.replace('show-sidebar', 'hide-sidebar')
});


