<template>
    <div class="c-input-email">
        <input ref="input" type="email" class="input-email" v-model="email">
        <DisclameInput v-if="status && text" :status="status" :text="text" />
    </div>
</template>

<script>
import DisclameInput from "../components/DisclameInput.vue"
import { FIELD_REQUIRED } from "../enum/error.js"

export default {
    name: 'InputMail',
    components: {
        DisclameInput
    },
    props: {
        required: Boolean,
    },
    data() {
        return {
            email: '',
            text: '',
            status: '',
        }
    },
    methods: {
        requiredExeption() {
            if (this.required && !this.email ) {
                this.text = FIELD_REQUIRED
                this.status = 'error'

                throw new Error(FIELD_REQUIRED)
            }
        }
    },
    mounted() {
        this.$refs.input.addEventListener('blur', () => {
            this.requiredExeption()
        }) 
    } 
}
</script>

<style>

</style>