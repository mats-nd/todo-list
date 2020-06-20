<template>
  <div class="add">
    <ui-card>
      <template slot="heading">
        <h1>Add note</h1>
      </template>
      <ui-input v-model="title" label="Note name" class="mb-4" />
      <ui-button
        tag="router-link"
        :to="`/note/${getLastId(notes)}`"
        @click.native="addNote(title)"
      >Continue</ui-button>
    </ui-card>
  </div>
</template>

<script>
import { getNotes, addNote, getLastId } from "@/services/Storage";

export default {
  data() {
    return {
      notes: getNotes(),
      title: ""
    };
  },
  mounted() {
    document.querySelector("input").focus();
  },
  methods: {
    getLastId,
    addNote
  }
};
</script>
