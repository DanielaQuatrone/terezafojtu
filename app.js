let divRight = document.querySelector('.js-text');
const icons = document.querySelectorAll('.icons');
let timeoutID;

function highlightIcons(iconIndex) {
  // Remove any existing timeout
  clearTimeout(timeoutID);

  timeoutID = setTimeout(() => {
      // Remove 'active' class from any previously active icon
      const activeIcon = document.querySelector('.active');
      if (activeIcon) {
          activeIcon.classList.remove('active');
      }

      // Add 'active' class to the current icon
      icons[iconIndex].classList.add('active');

      // Set text content from dataset.text
      const text = icons[iconIndex].dataset.text;
      divRight.innerText = text;

      // Move to the next icon index
      const nextIndex = (iconIndex + 1) % icons.length;

      // Call the function recursively with the next index
      highlightIcons(nextIndex);
  }, 3000); // 3 seconds
}

// Start the loop by calling the function with index 0
highlightIcons(0);

icons.forEach(icon => {
  icon.addEventListener('mouseover', function(){
    // Remove the timeout when hovering over an icon
    clearTimeout(timeoutID);

    document.querySelector('.active')?.classList.remove('active');
    icon.classList.add('active');
    let text = icon.dataset.text; // Use let instead of const
    divRight.innerText = text;
  });

  icon.addEventListener('mouseleave', function() {
    // Restart the timeout when mouse leaves the icon
    highlightIcons([...icons].indexOf(icon));
  });
});

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active-mobile");
})