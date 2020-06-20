<template>
  <div id="app">
    <app-header />
    <main class="content container">
      <transition name="slide-y-up" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  components: {
    AppHeader
  }
};
</script>
