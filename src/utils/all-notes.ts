import { type NoteJSON } from "../models/note-model"

function sortByDate(a: NoteJSON, b: NoteJSON): number {
    return b.longDate.localeCompare(a.longDate)
}

function loadNotes(): NoteJSON[] {
    const notes: NoteJSON[] = Object.keys(localStorage) // Array of localStorage keys
        .map(key => localStorage.getItem(key)) // Array of localStorage items
        .filter(value => value !== null) // Erase nulls
        .map(note => JSON.parse(note)) // Return notes interface
        .sort(sortByDate)
    return notes
}

export default loadNotes