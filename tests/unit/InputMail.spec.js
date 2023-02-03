import { shallowMount } from "@vue/test-utils"; 

import InputMail from "../../src/components/InputMail.vue"
import DisclameInput from "../../src/components/DisclameInput.vue"

import { FIELD_REQUIRED } from "../../src/enum/error.js"

describe('Componente InputMail:', () => {

    it('Render do component', () => {
        const wrapper = shallowMount(InputMail, {
            components: {
                DisclameInput
            }
        })

        expect(wrapper.vm).toBeDefined()
    })

    it('Verificacao de prop [ required ]', () => {
        const wrapper = shallowMount(InputMail, {
            propsData: {
                required: true
            }
        })

        expect(wrapper.props()).toHaveProperty('required')
    })


    it('Caso campo de email perder o foco vazio e prop required = true disparar exceção', async () => {
        const wrapper = shallowMount(InputMail, {
            propsData: {
                required: true
            }
        })

        const input = wrapper.find('.input-email')

        await input.trigger('blur')

        console.log(wrapper.vm.text)
        
        expect(wrapper.vm.text).toEqual(FIELD_REQUIRED)
    })



    // caso receba email incorreto exibir exceção

    // caso receba um email de dominio nao permitido exibir exceção
})