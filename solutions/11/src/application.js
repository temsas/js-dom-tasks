import 'whatwg-fetch';

export default () => {
  // BEGIN
    async function fetchSuggestions(url, searchTerm) {
        try {
            const searchParams = new URLSearchParams({ search: searchTerm });
            const fullUrl = new URL(url, window.location.origin)
            fullUrl.search = searchParams.toString()

            const response = await fetch(fullUrl)
            const data = await response.json()
            return data;
        } catch (error) {
            return []
        }
    }
    function updateSuggestionsList(inputElement, suggestions) {
        const autocompleteName = inputElement.dataset.autocompleteName
        const suggestionsList = document.querySelector(`ul[data-autocomplete-name="${autocompleteName}"]`)

        suggestionsList.innerHTML = '';
        if (suggestions.length > 0) {
            suggestions.forEach(suggestion => {
                const listItem = document.createElement('li')
                listItem.textContent = suggestion
                suggestionsList.appendChild(listItem)
            })
        } else {
            const listItem = document.createElement('li')
            listItem.textContent = 'Nothing'
            suggestionsList.appendChild(listItem);
        }
    }

    const autocompleteInputs = document.querySelectorAll('[data-autocomplete]')

    autocompleteInputs.forEach(inputElement => {
        inputElement.addEventListener('input', async (event) => {
            const url = inputElement.dataset.autocomplete
            const searchTerm = event.target.value;

            const suggestions = await fetchSuggestions(url, searchTerm)
            updateSuggestionsList(inputElement, suggestions)
        })
    })
  // END
};
