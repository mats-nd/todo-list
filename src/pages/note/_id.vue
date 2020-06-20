<template>
  <div class="note">
    <ui-card v-if="note">
      <!-- Note title -->
      <template slot="heading">
        <h1 v-if="!editNoteTitle">{{ note.title }}</h1>
        <ui-input v-else v-model="note.title" />
        <ui-button @click="editNoteTitle = !editNoteTitle">Edit title</ui-button>
      </template>

      <!-- Add todo -->
      <form class="d-flex align-items-end mb-4" @submit.prevent="addTodo(note, todoTitle)">
        <ui-input v-model="todoTitle" label="Todo title" />
        <ui-button type="submit" theme="secondary" class="ml-3">Add Todo</ui-button>
      </form>

      <!-- Todo list -->
      <div v-if="note.todos.length" class="mb-4 todo-list">
        <div v-for="(todo, idx) in note.todos" class="todo-list__item" :key="`todo-${idx}`">
          <ui-checkbox v-model="todo.completed" />
          <input v-model="todo.title" type="text" />
          <div class="spacer"></div>
          <ui-button
            theme="secondary"
            small
            class="ml-3"
            @click="removeTodoByIndex(note.todos, idx)"
          >Remove</ui-button>
        </div>
      </div>
      <div class="alert alert--warning mb-4" v-else>No todos yet</div>

      <!-- Controls -->
      <div class="d-flex">
        <ui-button @click="saveChanges($route.params.id, note)">Save changes</ui-button>
        <ui-button theme="secondary" class="ml-3" @click="modal.cancel = true">Cancel</ui-button>
        <ui-button theme="secondary" class="ml-3" @click="discardChanges">Discard changes</ui-button>
        <div class="spacer"></div>
        <ui-button theme="danger" class="ml-3" @click="modal.remove = true">Remove note</ui-button>
      </div>
    </ui-card>

    <h1 v-else>404 Not found</h1>

    <!-- ConfirmBox for remove -->
    <ui-confirmbox v-model="modal.remove" @confirm="onConfirm" />
    <!-- ConfirmBox for cancel -->
    <ui-confirmbox v-model="modal.cancel" @confirm="routeToHome" />
  </div>
</template>

<script>
import {
  getNoteById,
  removeNoteById,
  editNote,
  removeTodoByIndex
} from "@/services/Storage";

export default {
  data() {
    return {
      note: getNoteById(this.$route.params.id),
      tempNote: getNoteById(this.$route.params.id),
      editNoteTitle: false,
      todoTitle: "",
      modal: {
        remove: false,
        cancel: false
      }
    };
  },
  methods: {
    removeTodoByIndex,
    addTodo(note, todo) {
      note.todos.push({
        title: todo,
        completed: false,
        edit: false
      });

      this.todoTitle = "";
    },
    saveChanges(id, data) {
      editNote(id, data);
      this.$toast.success("Changes saved");
    },
    removeNote() {
      this.confirmModal = true;
    },
    routeToHome() {
      this.$router.push({ path: "/" });
    },
    onConfirm() {
      removeNoteById(this.$route.params.id);
      this.routeToHome();
      this.$toast.success("Note deleted");
    },
    discardChanges() {
      // destructuring assignment
      [this.note, this.tempNote] = [this.tempNote, this.note];
    }
  }
};
</script>
