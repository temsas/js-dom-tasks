
export default () => {
  // BEGIN
    const tabRow = document.querySelectorAll('.row');

    tabRow.forEach((row) => {
        const tabList = row.querySelectorAll('[role="tab"]');

        const handleClickOnTab = (event) => {
            const currentTab = event.target;
            const activeNavLink = row.querySelector('.nav-link.active');
            const activeTabPane = row.querySelector('.tab-pane.active');
            const targetTabPane = row.querySelector(currentTab.getAttribute('data-bs-target'));

            activeNavLink.classList.remove('active');
            activeTabPane.classList.remove('active');
            targetTabPane.classList.add('active');
            currentTab.classList.add('active');
        };

        tabList.forEach((tab) => {
            tab.addEventListener('click', handleClickOnTab);
        });
    });
  // END
};
