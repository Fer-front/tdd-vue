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
        >
        <span 
            class="disclame"
            :class="{
                'hide': hide,
                'disclame-error': error,
                'disclame-success': success,
            }" 
        >
            {{disclame}}
        </span>
    </div>
</template>

<script>

import { FIELD_REQUIRED } from "../enum/error"

export default {
    name: "InputText",
    props: {
        error: String,
        success: String,
        required: Boolean,
    },
    computed: {
        disclame() {
            return this.error || this.success || this._required || ''
        },
        _required() {
            return this.required ? FIELD_REQUIRED : ''
        },
        hide() {
            return (Boolean(this.disclame) || Boolean(this._required)) || false
        }
    }
}
</script>

<style lang="scss">

</style>