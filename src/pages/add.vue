<template>
  <div class="add">
    <ui-card>
      <h1 slot="heading">Add note</h1>
      <form class="mt-4" @submit.prevent="onSubmit">
        <ui-input v-model="title" label="Note name" class="mb-4" />
        <ui-button type="submit">Continue</ui-button>
      </form>
    </ui-card>
  </div>
</template>

<script>
import { getNotes, addNote } from "@/services/Storage";

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
    onSubmit() {
      const note = addNote(this.title);
      this.$router.push({ name: "note_id", params: { id: note.id } });
      this.$toast.success("Note created");
    }
  }
};
</script>
