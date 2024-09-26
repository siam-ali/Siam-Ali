// Query selectors for buttons and tabs
const tabBtns = document.querySelectorAll("[data-tab-btn]");
const tabs = document.querySelectorAll("[data-tab-content]");

// Initializing the active tab (default: 'project')
let activeTabBtn = document.querySelector("[data-tab-btn='project']");
let activeTab = document.querySelector(`[data-tab-content="project"]`);

// Function to activate a tab
const activateTab = (button, tabContent) => {
  // Remove active class from previous tab and button
  activeTabBtn.classList.remove("active");
  activeTab.classList.remove("active");

  // Add active class to the clicked button and corresponding tab content
  button.classList.add("active");
  tabContent.classList.add("active");

  // Update the current active tab/button
  activeTabBtn = button;
  activeTab = tabContent;
};

// Attach event listeners to all tab buttons
tabBtns.forEach(button => {
  button.addEventListener("click", () => {
    const tabContent = document.querySelector(`[data-tab-content="${button.dataset.tabBtn}"]`);
    activateTab(button, tabContent);
  });
});

// Set the default active tab on page load
activateTab(activeTabBtn, activeTab);



