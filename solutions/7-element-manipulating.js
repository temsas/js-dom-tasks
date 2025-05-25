import camelCase from 'lodash/camelCase';

// BEGIN
const camel = (document) => {
    const allElements = document.body.getElementsByTagName('*')

    for (let i = 0; i < allElements.length; i++) {
        const element = allElements[i]
        const classList = Array.from(element.classList)

        classList.forEach(className => {
            const camelCaseName = camelCase(className)
            if (camelCaseName !== className) {
                element.classList.replace(className, camelCaseName)
            }
        })
    }
}
export  default camel;
// END