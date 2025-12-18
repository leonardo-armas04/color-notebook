<script setup lang="ts">
import NotesForm from '../components/NotesForm.vue';
import type { NoteJSON } from '../models/note-model';
const voidNote: NoteJSON = {
    _id: "",
    title: "",
    body: "",
    color: "",
    createdAt: "",
    longDate: ""
}
</script>

<template>
    <h1>New note</h1>
    <NotesForm :note="voidNote"/>
</template>