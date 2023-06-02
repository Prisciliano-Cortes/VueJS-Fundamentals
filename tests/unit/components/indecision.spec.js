import { shallowMount } from "@vue/test-utils";
import Indecision from '@/components/Indecision.vue'

describe('Indecision component', () => {

    let wrapper;
    let clgSpy;

    global.fetch = jest.fn( () => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image:  'https://yesno.wtf/assets/yes/2.gif'
        })
    }))

    beforeEach( () => {
        wrapper = shallowMount( Indecision )

        clgSpy = jest.spyOn( console, 'log')

        jest.clearAllMocks();
    })

    test('You must match the snapshot', () => {

        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('Writing to input should not trigger anything', async() => {

        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

        const input = wrapper.find("input")

        await input.setValue('Hello world')

        expect( clgSpy ).toHaveBeenCalled()
        expect( clgSpy ).toHaveBeenCalledTimes(1)

        expect( getAnswerSpy ).not.toHaveBeenCalled()
    })

    test('Write ? must shoot the getAnswer', async() => {
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

        const input = wrapper.find('input')
        await input.setValue('Hello world?')

        expect( clgSpy ).toHaveBeenCalledTimes(1)
        expect( getAnswerSpy ).toHaveBeenCalled()
    })

    test('Test in getAnswer', async() => {
        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect( img.exists() ).toBeTruthy()

        expect( wrapper.vm.img ).toBe('https://yesno.wtf/assets/yes/2.gif')

        expect( wrapper.vm.answer ).toBe('SI')
    })

    test('Test in getAnswer - failed API', async() => {
        fetch.mockImplementationOnce( () => Promise.reject('API is down') )

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect( img.exists() ).toBeFalsy()
        
        expect( wrapper.vm.answer ).toBe('Failed to load from API')
    })
})