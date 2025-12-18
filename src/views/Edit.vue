<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { type NoteJSON, Note } from '../models/note-model';
import loadNotes from '../utils/all-notes';

import NotesForm from '../components/NotesForm.vue';
const route = useRoute()
const router = useRouter()
const noteId = route.params.noteid as string

const notes: NoteJSON[] = loadNotes()
const thisNote: NoteJSON = Note.searchNote(noteId,notes)

if (!thisNote._id) {
    router.replace("/404")
}

</script>

<template>
    <h1>Edit note</h1>
    <NotesForm :note="thisNote"/>
</template>