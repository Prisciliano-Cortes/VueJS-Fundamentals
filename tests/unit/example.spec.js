
describe('Example Component', () => {
    test('Must be greater than 10', () => {
        //*** Arrange */
        let value = 10;

        //*** Stimulus */
        value = value + 2

        //*** Observer */
       expect( value ).toBeGreaterThan( 10 )
    })
})