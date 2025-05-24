// BEGIN
const content = document.body.innerHTML.trim();
const lines = content.split('\n');
const wrappedLines = lines.map(line => {
    const trimmedLine = line.trim();
    return trimmedLine ? `<p>${trimmedLine}</p>` : '';
}).filter(line => line);
document.body.innerHTML = wrappedLines.join('');
// END