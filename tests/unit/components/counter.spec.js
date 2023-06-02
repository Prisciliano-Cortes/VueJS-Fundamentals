import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount( Counter )
    })

    // test('You must match the snapshot', () => {
        
    //     const wrapper = shallowMount( Counter )

    //     expect( wrapper.html() ).toMatchSnapshot()
    // })

    test('H2 must have the default value Counter', () => {
        //const wrapper = shallowMount( Counter )

        expect( wrapper.find('h2').exists() ).toBeTruthy()

        const h2 = wrapper.find('h2')

        expect( h2.text() ).toBe('Counter')
    })

    test('The default value should be 100 in P', () => {
        //const wrapper = shallowMount( Counter );

        // const pTags = wrapper.findAll('p')
        const value = wrapper.find('[data-test-id="counter"]').text()

        // expect( pTags[1].text() ).toBe('100')
        expect(value).toBe('100')
    })

    test('You must increase and decrease the value of the counter by 1', async() => {
        //const wrapper = shallowMount( Counter );

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-test-id="counter"]').text()

        expect( value ).toBe('101')
    })

    test('You must set the default value', () => {
        const { start } = wrapper.props()

        const value = wrapper.find('[data-test-id="counter"]').text()

        expect( Number(value) ).toBe( start )
    })

    test('It must show the prop title', () => {

        const title = 'Hello world';

        const wrapper = shallowMount( Counter, {
            props: {
                title
            }
        })

        expect( wrapper.find('h2').text() ).toBe(title)
    })
})