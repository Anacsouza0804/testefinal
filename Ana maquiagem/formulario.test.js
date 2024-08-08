const {validatePassword} = require('./formulario')

it('teste se contem 8 caracteres', () => {
    expect(validatePassword('aaaaaaaaaaaaa')).toBe(true);
    })

it('teste se não contem  8 caracteres', () => {
    expect(validatePassword('aaaaaa')).toBe(false);
})

it('Teste deve contem pelo menos um caractere especial', () => {
    expect(validatePassword('aaaaaaa$')).toBe(false);
})

it('A senha não contem caractere especial', () => {
    expect(validatePassword('aaaaaaaa')).toBe(true);
})

it('Teste se as senhas são iguais', () => {
    expect(validatePassword('aaaaaaa*','aaaaaaa*')).toBe(false);
})

it('Teste se a senha são diferentes', () => {
    expect(validatePassword('!aaaaaaaa','aaaaaaa*')).toBe(false);
})










