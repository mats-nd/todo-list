<template>
  <div class="home">
    <template v-if="notes.length">
      <ui-card v-for="(note, idx) in notes" :key="`note_${idx}`">
        <template slot="heading">
          <h2>{{ note.title }}</h2>
          <div class="ui-card__controls">
            <ui-button tag="router-link" :to="`/note/${note.id}`" theme="secondary">Edit</ui-button>
            <ui-button theme="danger" class="ml-3" @click="removeNote(note.id)">Remove</ui-button>
          </div>
        </template>
        <template v-if="note.todos.length">
          <div class="mt-4 mb-4">
            <div
              v-for="(todo, idx) in limitTodos(note.todos)"
              class="mb-2"
              :key="`todo-item-${idx}`"
            >
              <ui-checkbox v-model="todo.completed" disabled>{{ todo.title }}</ui-checkbox>
            </div>
          </div>
          <router-link :to="`/note/${note.id}`">View all todos</router-link>
        </template>
      </ui-card>
    </template>
    <div v-else class="alert alert--warning">No matches</div>

    <ui-confirmbox v-model="confirmModal" @confirm="onConfirm" />
  </div>
</template>

<script>
import { getNotes, removeNoteById } from "@/services/Storage";

export default {
  name: "Home",
  data() {
    return {
      notes: getNotes(),
      confirmModal: false
    };
  },
  methods: {
    removeNote(id) {
      this.removeId = id;
      this.confirmModal = true;
    },
    onConfirm() {
      removeNoteById(this.removeId);
      this.notes = getNotes();
      this.$toast.success("Note deleted");
    },
    limitTodos(todos) {
      if (todos.length > 3) {
        return todos.slice(0, 3);
      } else {
        return todos;
      }
    }
  }
};
</script>
