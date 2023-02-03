<template>
  <span
    class="disclame"
    :class="[
      hide ? 'hide' : '',
      getStatus
    ]"
  >
    {{ text || "" }}
  </span>
</template>

<script>
export default {
  name: "DisclameInput",
  props: {
    status: {
      type: String,
      validator(value) {
        return ["error", "success"].includes(value);
      },
    },
    text: {
        type: String,
    },
  },
  computed: {
    hide() {
      return this.status === undefined && this.text === undefined;
    },
    getStatus() {
      if (this.status) {
        return this.status === "error" ? "disclame-error" : "disclame-success";
      }

      return "";
    },
  },
};
</script>

<style>
</style>