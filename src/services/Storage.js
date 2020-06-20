/**
 * Get notes from LocalStorage
 * @returns {Array}
 */
export const getNotes = () => {
  const storageNotes = localStorage.getItem("todo_notes")

  if (!storageNotes) {
    return []
  }

  try {
    return JSON.parse(storageNotes)
  } catch (err) {
    console.error(err)
    return []
  }
}

/**
 * Set notes in LocalStorage
 * @param {Array} notes 
 */
export const setNotes = notes => {
  localStorage.setItem("todo_notes", JSON.stringify(notes))
}

/**
 * Add note
 * @param {String} title
 */
export const addNote = title => {
  const notes = getNotes()
  const element = {
    id: getLastId(notes),
    title: title,
    todos: []
  };

  notes.unshift(element);
  setNotes(notes);

  return element
}

/**
 * Get last ID in Array
 * @param {Array} arr
 * @returns {Number}
 */
export const getLastId = arr => {
  return arr.reduce((acc, element) => Math.max(acc, element.id), 0) + 1;
}

/**
 * Get note by ID from LocalStorage
 * @param {Number, String} id 
 */
export const getNoteById = id => {
  return getNotes().find(note => note.id === Number(id));
}

/**
 * Remove note by ID
 * @param {Number, String} id 
 */
export const removeNoteById = id => {
  const notes = getNotes().filter(element => {
    return element.id != id;
  })
  setNotes(notes);
}

/**
 * Edit note
 * @param {Number, String} id 
 * @param {object} data 
 */
export const editNote = (id, data) => {
  const notes = getNotes()
  const index = notes.findIndex(element => element.id === Number(id))
  notes[index] = data
  setNotes(notes)
}

/**
 * Remove todo by index
 */
export const removeTodoByIndex = (todos, index) => {
  todos.splice(index, 1)
}
