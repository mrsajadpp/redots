// Get all the buttons with the specified class
const buttons = document.querySelectorAll('.menu-bar .menu-group ul li a button');
const activeBtn = document.querySelectorAll('.active');

// Iterate through each button and add event listeners
buttons.forEach(button => {
    if (!button.classList.contains('active')) {
        button.addEventListener('mouseover', () => {
            // Change the class to 'material-icons' when hovered
            const icon = button.querySelector('.material-icons-outlined');
            icon.classList.remove('material-icons-outlined');
            icon.classList.add('material-icons');
        });

        button.addEventListener('mouseout', () => {
            // Revert the class to 'material-icons-outlined' when not hovered
            const icon = button.querySelector('.material-icons');
            icon.classList.remove('material-icons');
            icon.classList.add('material-icons-outlined');
        });
    }

});

activeBtn.forEach(button => {
    if (button.classList.contains('active')) {
        const icon = button.querySelector('.material-icons-outlined');
        if (icon) {
            icon.classList.remove('material-icons-outlined');
            icon.classList.add('material-icons');
        }
    }

});

const footerBtn = document.querySelectorAll('footer ul li a button');

footerBtn.forEach(button => {
    if (!button.classList.contains('active')) {
        button.addEventListener('mouseover', () => {
            // Change the class to 'material-icons' when hovered
            const icon = button.querySelector('.material-icons-outlined');
            icon.classList.remove('material-icons-outlined');
            icon.classList.add('material-icons');
        });

        button.addEventListener('mouseout', () => {
            // Revert the class to 'material-icons-outlined' when not hovered
            const icon = button.querySelector('.material-icons');
            icon.classList.remove('material-icons');
            icon.classList.add('material-icons-outlined');
        });
    }

});

// Get the button with the specified class
const favoriteButton = document.querySelector('.menu-bar .menu-group ul li a button.heart');

// Get the icon inside the button
const icons = favoriteButton.querySelector('.material-icons-outlined');


// Add event listeners
favoriteButton.addEventListener('mouseover', () => {
    // Change the icon to 'favorite' when hovered
    icons.classList.remove('material-icons-outlined');
    icons.classList.add('material-icons');
    icons.textContent = 'favorite';
});

favoriteButton.addEventListener('mouseout', () => {
    icons.classList.remove('material-icons');
    icons.classList.add('material-icons-outlined');
    // Revert the icon to 'favorite_border' when not hovered
    icons.textContent = 'favorite_border';
});

const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const menuBar = document.getElementById('menuBar');

menuOpen.addEventListener("click", () => {
    menuBar.classList.remove('hidden');
});

menuClose.addEventListener("click", () => {
    menuBar.classList.add('hidden');
});