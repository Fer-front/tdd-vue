import { shallowMount, before } from "@vue/test-utils";

import InputText from "../../src/components/InputText.vue"
import { FIELD_NOT_NULL, FIELD_REQUIRED } from "../../src/enum/error.js"


describe('Componente: InputText', () => {

    it('Deve possuir tag input', () => {
        const wrapper = shallowMount(InputText, {})
        const input = wrapper.find('input')

        expect(input.exists()).toBe(true)
    })

    it('Input-text por default deve ser rederizando com seu disclamer oculto', () => {
        const wrapper = shallowMount(InputText, {})
        const disclame = wrapper.find('.disclame')

        expect(disclame.classes()).not.toContain('hide')
    })


    it('Input-text possuir alguma das props [error, success] disclamer deve ser exibido', () => {
        const wrapper = shallowMount(InputText, {
            propsData: {
                error: 'error'
            }
        })
        const disclame = wrapper.find('.disclame')
        expect(disclame.classes()).toContain('hide')
    })

    it('Deve possuir campo de disclame', () => {
        const wrapper = shallowMount(InputText, {})
        const disclame = wrapper.find('.disclame')

        expect(disclame.exists()).toBe(true)
    }) 

    it('Component deve possuir prop [ erro ]', () => {
        const wrapper = shallowMount(InputText, {})
        expect(wrapper.props()).toHaveProperty('error')
    })
    
    it('Caso prop error receba valor disclame deve ser exibido msg de erro no template', () => {
        const wrapper = shallowMount(InputText, {
            propsData: {
                error: FIELD_NOT_NULL,
            }
        })
        
        const disclame = wrapper.find('.disclame')
        expect(disclame.text()).toEqual(FIELD_NOT_NULL)
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

    it('Caso prop error receba valor, disclame deve exibir texto vermelha ', () => {
        const wrapper = shallowMount(InputText, {
            propsData: {
                error: FIELD_NOT_NULL,
            }
        })
        
        const input = wrapper.find('.disclame')

        expect(input.classes()).toContain('disclame-error')
    }) 

    it('Caso prop success receba valor, disclame deve exibir texto verde ', () => {
        const wrapper = shallowMount(InputText, {
            propsData: {
                success: 'valido!',
            }
        })
        
        const input = wrapper.find('.disclame')

        expect(input.classes()).toContain('disclame-success')
    })

    it(`Input requirido sem valor ao perder o foco: deve ser emitido msg no disclame "${FIELD_REQUIRED}}" `, async () => {
        const wrapper = shallowMount(InputText, {})

        wrapper.setProps({ required: true }) 

        const input = wrapper.find('.input-text')
        const disclame = wrapper.find('.disclame')

        await input.trigger('blur')

        expect(await disclame.text()).toEqual(FIELD_REQUIRED)
    })
})