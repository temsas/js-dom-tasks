// BEGIN
const solution = (url) =>{
    const browserInfo = navigator.userAgent.split(' ')[0]
    return browserInfo + ' ' + url;
}
export  default  solution;
// END