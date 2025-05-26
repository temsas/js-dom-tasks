import escapeHtml from 'escape-html';

// BEGIN
export default () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const formData = new FormData(form)
        const email = escapeHtml(formData.get('email'))
        const name = escapeHtml(formData.get('name'))
        const comment = escapeHtml(formData.get('comment'))

        const successHTML = `
      <div>
        <p>Feedback has been sent</p>
        <div>Email: ${email}</div>
        <div>Name: ${name}</div>
        <div>Comment: ${comment}</div>
      </div>
    `
        form.outerHTML = successHTML
    })
}
// END