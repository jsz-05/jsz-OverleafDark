document.addEventListener('DOMContentLoaded', function() {
  const blackThemeButton = document.getElementById('blackThemeButton');
  const purpleThemeButton = document.getElementById('purpleThemeButton');
  const blueThemeButton = document.getElementById('blueThemeButton'); // Add blue theme button
  const offButton = document.getElementById('offButton');
  
  const buttons = [blackThemeButton, purpleThemeButton, blueThemeButton, offButton];

  // Helper function to set active state on buttons
  function setActiveButton(button) {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  }

  // Retrieve the current theme setting and update the button text
  chrome.storage.sync.get(['theme'], function(result) {
    if (result.theme === 'black') {
      setActiveButton(blackThemeButton);
    } else if (result.theme === 'purple') {
      setActiveButton(purpleThemeButton);
    } else if (result.theme === 'blue') {
      setActiveButton(blueThemeButton); // Handle blue theme
    } else {
      setActiveButton(offButton);
    }
  });

  // Add click event listener to toggle themes
  blackThemeButton.addEventListener('click', function() {
    chrome.storage.sync.set({ theme: 'black' }, function() {
      setActiveButton(blackThemeButton);
    });
  });

  purpleThemeButton.addEventListener('click', function() {
    chrome.storage.sync.set({ theme: 'purple' }, function() {
      setActiveButton(purpleThemeButton);
    });
  });

  blueThemeButton.addEventListener('click', function() { // Handle blue theme click
    chrome.storage.sync.set({ theme: 'blue' }, function() {
      setActiveButton(blueThemeButton);
    });
  });

  offButton.addEventListener('click', function() {
    chrome.storage.sync.set({ theme: 'off' }, function() {
      setActiveButton(offButton);
    });
  });
});
