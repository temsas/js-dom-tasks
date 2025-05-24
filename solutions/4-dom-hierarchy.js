// BEGIN
const extractData = (documentElement) =>{
    const body = documentElement.querySelector('body')
    if(!body){
        return []
    }

    const paragraphs = [];

    for ( let i =0; i <body.children.length; i++){
        const child = body.children[i]
        if(child.tagName.toLowerCase() === 'p'){
            paragraphs.push(child.textContent.trim())
        }
    }
    return paragraphs
}
export  default extractData;
// END