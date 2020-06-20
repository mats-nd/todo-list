<template>
  <div
    :class="[
      'ui-confirmbox',
      {
        'ui-confirmbox--open': isOpen ,
      }
    ]"
  >
    <transition name="slide-y-up">
      <div v-show="isOpen" class="ui-confirmbox__wrapper">
        <div ref="dialog" role="dialog" class="ui-confirmbox__dialog">
          <div ref="content" class="ui-confirmbox__content">
            <div class="ui-confirmbox__header">
              <div class="ui-confirmbox__heading">
                <h2>Confirm</h2>
                <ui-button theme="secondary" class="ui-confirmbox__close" @click="close">&times;</ui-button>
              </div>
            </div>
            <div
              class="ui-confirmbox__body"
              role="document"
            >Do you confirm your action? This action cannot be undone.</div>
            <div class="ui-confirmbox__footer">
              <ui-button @click="confirm">Confirm</ui-button>
              <ui-button theme="secondary" class="ml-3" @click="close">Cancel</ui-button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-show="isOpen" class="ui-confirmbox__overlay"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "UiConfirmbox",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: Boolean
  },
  data() {
    return {
      isOpen: this.value
    };
  },
  watch: {
    value(val) {
      this.isOpen = val;
    }
  },
  methods: {
    open() {
      this.isOpen = true;
      this.$emit("change", this.isOpen);
    },
    close() {
      this.isOpen = false;
      this.$emit("change", this.isOpen);
    },
    confirm() {
      this.isOpen = false;
      this.$emit("change", this.isOpen);
      this.$emit("confirm");
    }
  }
};
</script>
