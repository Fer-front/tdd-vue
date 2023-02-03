import { shallowMount } from "@vue/test-utils";
import DisclameInput from "../../src/components/DisclameInput.vue"


describe('Component DisclameInput:', () => {
    it('Component é carregado', () => {
        const wrapper = shallowMount(DisclameInput, {})

        expect(wrapper.vm).toBeDefined()
    })

    it('Caso nenhuma das props forem passadas deve ficar oculto com a classe hide', () => {
        const wrapper = shallowMount(DisclameInput, {})

        expect(wrapper.classes()).toContain('hide')
    })

    it('Caso as props "status" e "text" seja setadas o componente deve ser renderizado e class hide removida', () => {
        const wrapper = shallowMount(DisclameInput, {
            propsData: {
                status: 'error',
                text: 'sdfasfdasdf'
            }
        })

        expect(wrapper.classes()).not.toContain('hide')
    })

    it('Caso prop "status" receba success texto deve ser exibido em verde', () => {
        const wrapper = shallowMount(DisclameInput, {
            propsData: {
                status: 'success',
                text: 'success'
            }
        })

        const disclame = wrapper.find('.disclame')

        expect(disclame.classes()).toContain('disclame-success')
    })

    it('Caso a props "status" receba "error" o texto deve ser exibido em vermelho', () => {
        const wrapper = shallowMount(DisclameInput, {
            propsData: {
                status: 'error'
            }
        })

        const disclame = wrapper.find('.disclame')

        expect(disclame.classes()).toContain('disclame-error')
    })

    it('Caso seja setado valor na prop text o mesmo deve ser rederizado no componente', () => {
        const textValue = 'valor qualquer'
        
        const wrapper = shallowMount(DisclameInput, {
            propsData: {
                text: textValue
            }
        })

        expect(wrapper.text()).toEqual(textValue)
    })
})