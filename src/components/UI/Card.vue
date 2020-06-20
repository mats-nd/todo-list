<template>
  <div class="ui-card">
    <div v-if="$slots.heading" class="ui-card__heading">
      <slot name="heading" />
    </div>
    <div class="ui-card__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "UiCard"
};
</script>
