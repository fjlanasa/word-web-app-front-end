export function search(word, body) {
  return {
    type: 'SEARCH',
    word,
    body
  }
}
//save search
export function save(word, definition) {
  return {
    type: 'SAVE',
    word,
    definition
  }
}
