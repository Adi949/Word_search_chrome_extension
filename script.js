chrome.contextMenus.create({
  id: '1',
  title: 'Search meaning for the word "%s""',
  contexts: ['selection'],
})

chrome.contextMenus.onClicked.addListener(async function (info) {
  fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + info.selectionText)
    .then((res) => res.json())
    .then((data) => {
      const text = data[0].meanings[0].definitions[0].definition

      console.log(text)
      alert(text)
    })
})
