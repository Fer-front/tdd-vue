<template>
  <div class="c-input-text">
    <input
      type="text"
      name="input"
      class="input-text"
      :class="{
        'input-error': error,
        'input-success': success,
      }"
    />
    <DisclameInput v-if="status && text" :status="status" :text="text" />
  </div>
</template>

<script>
import { FIELD_REQUIRED } from "../enum/error";

// components
// ============================================================================
import DisclameInput from "./DisclameInput.vue";

export default {
  name: "InputText",
  components: { DisclameInput },
  props: {
    error: String,
    success: String,
    required: Boolean,
  },
  computed: {
    _required() {
      return this.required ? FIELD_REQUIRED : "";
    },
    status() {
      if (this.error) return "error";
      if (this.success) return "success";

      return null;
    },
    text() {
      return this._required || this.success || this.error ||  "";
    },
  },
};
</script>

<style lang="scss">
</style>