<template>
  <label
    :class="[
      'ui-checkbox',
      {
        'ui-checkbox--active': value,
        'ui-checkbox--disabled': disabled
      }
    ]"
  >
    <input
      type="checkbox"
      :checked="value"
      class="ui-checkbox__input"
      :disabled="disabled"
      @change="handleChange"
    />
    <span class="ui-checkbox__icon" />
    <span class="ui-checkbox__text">
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  name: "UiCheckbox",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: Boolean,
    disabled: Boolean
  },
  methods: {
    handleChange(e) {
      this.$emit("change", e.target.checked);
    }
  }
};
</script>
