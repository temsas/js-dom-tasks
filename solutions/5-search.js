export default (document) => {
  // BEGIN
    const contentDiv = document.querySelector('.content')
    const titleElement = contentDiv.querySelector('h1')
    const descriptionElement = contentDiv.querySelector('.description')
    const articleElements = contentDiv.querySelectorAll('.links > div')

    const title = titleElement ? titleElement.textContent.trim() : ''
    const description = descriptionElement ? descriptionElement.textContent.trim() : ''

    const items = Array.from(articleElements).map(articleElement => {
        const titleLink = articleElement.querySelector('h2 a')
        const descriptionParagraph = articleElement.querySelector('p')

        const articleTitle = titleLink ? titleLink.textContent.trim() : ''
        const articleDescription = descriptionParagraph ? descriptionParagraph.textContent.trim() : ''

        return {
            title: articleTitle,
            description: articleDescription,
        }
    })
    return {
        title: title,
        description: description,
        items: items,
    }
  // END
};
