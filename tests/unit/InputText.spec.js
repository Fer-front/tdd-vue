import { shallowMount } from "@vue/test-utils";
import { render } from '@vue/server-test-utils'

import InputText from "../../src/components/InputText.vue"
import DisclameInput from "../../src/components/DisclameInput.vue"
import { FIELD_NOT_NULL, FIELD_REQUIRED } from "../../src/enum/error.js"


describe('Componente: InputText', () => {

    it('Deve possuir tag input', () => {
        const wrapper = shallowMount(InputText, {})
        const input = wrapper.find('input')

        expect(input.exists()).toBe(true)
    })

    it('Input-text por default deve ser rederizando com seu disclamer oculto', () => {
        const wrapper = shallowMount(InputText, {
            components: { DisclameInput }
        })

        const disclame = wrapper.findComponent(DisclameInput)

        expect(disclame.exists()).toBeFalsy()
    })


    it('Input-text possuir alguma das props [error, success] disclamer deve ser exibido', () => {
        const wrapper = shallowMount(InputText, {
            propsData: {
                error: 'error'
            },
            components: {
                DisclameInput
            }
        })
        
        expect(wrapper.findComponent(DisclameInput).exists()).toBe(true)
    })

    it('Component deve possuir prop [ erro ]', () => {
        const wrapper = shallowMount(InputText, {})
        expect(wrapper.props()).toHaveProperty('error')
    })
    
    it('Caso prop error receba valor, input deve exibir borda vermelha ', () => {
        const wrapper = shallowMount(InputText, {
            propsData: {
                error: FIELD_NOT_NULL,
            }
        })
        
        const input = wrapper.find('.input-text')

        expect(input.classes()).toContain('input-error')
    }) 

    it('Caso prop success receba valor, input deve exibir borda verde ', () => {
        const wrapper = shallowMount(InputText, {
            propsData: {
                success: 'valido!',
            }
        })
        
        const input = wrapper.find('.input-text')

        expect(input.classes()).toContain('input-success')
    })


    it(`Input requirido sem valor ao perder o foco: deve ser emitido msg no disclame "${FIELD_REQUIRED}}" `, async () => {
        const wrapper = shallowMount(InputText, {})

        wrapper.setProps({ required: true }) 

        const input = wrapper.find('.input-text')
        const disclame = wrapper.find('.disclame')

        await input.trigger('blur')

        expect(wrapper.vm.text).toEqual(FIELD_REQUIRED)
    })
})