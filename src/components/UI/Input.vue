<template>
  <label class="ui-input">
    <div v-if="label" class="ui-input__label">{{ label }}</div>
    <input type="text" :value="val" class="ui-input__input" v-on="listeners" />
    <span class="ui-input__icon" />
    <span class="ui-input__text">
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  name: "UiInput",
  props: {
    value: {
      type: [Number, String],
      default: ""
    },
    label: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      val: this.value
    };
  },
  watch: {
    value(val) {
      this.val = val;
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.handleInput,
        change: this.handleChange
      };
    }
  },
  methods: {
    handleInput(e) {
      this.val = e.target.value;
      this.$emit("input", this.val);
    },
    handleChange(e) {
      this.val = e.target.value;
      this.$emit("change", this.val);
    }
  }
};
</script>
