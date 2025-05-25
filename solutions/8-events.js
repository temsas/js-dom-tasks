export default () => {
  // BEGIN
    let alertCounter = 1
    const button = document.querySelector('#alert-generator')
    const alertsContainer = document.querySelector('.alerts')

    button.addEventListener('click', () => {
        const alertDiv = document.createElement('div')

        alertDiv.className = 'alert alert-primary';
        alertDiv.textContent = `Alert ${alertCounter++}`;

        alertsContainer.prepend(alertDiv)
    })
  // END
};