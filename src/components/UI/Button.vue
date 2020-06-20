<template>
  <component
    :is="tag"
    :class="[
      'ui-button',
      'ui-button--is-' + theme,
      {
        'ui-button--small' : small
      }
    ]"
    :to="to"
    v-on="$listeners"
  >
    <span class="ui-button__slot">
      <slot />
    </span>
  </component>
</template>

<script>
export default {
  name: "UiButton",
  props: {
    tag: {
      type: String,
      default: "button"
    },
    to: {
      type: [String, Object],
      default: null
    },
    theme: {
      type: String,
      default: "primary"
    },
    small: Boolean
  }
};
</script>
