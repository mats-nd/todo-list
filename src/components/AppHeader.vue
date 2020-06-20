<template>
  <header class="app-header">
    <div class="container">
      <div class="app-header__body">
        <router-link to="/" class="logo">Todo List</router-link>
        <div class="spacer"></div>
        <ui-button tag="router-link" to="/add" theme="dark">New note</ui-button>
      </div>
    </div>
  </header>
</template>
