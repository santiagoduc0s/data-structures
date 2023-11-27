import { Stack, StackEmpty } from '../../index'

describe('Stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  test('debería estar vacía al inicializar', () => {
    expect(stack.isEmpty()).toBe(true)
  })

  test('debería permitir añadir un elemento', () => {
    stack.push(1)
    expect(stack.isEmpty()).toBe(false)
  })

  test('debería retornar el tamaño correcto', () => {
    stack.push(1)
    stack.push(2)
    expect(stack.size()).toBe(2)
  })

  test('debería seguir el comportamiento LIFO al añadir y remover elementos', () => {
    stack.push(1)
    stack.push(2)
    expect(stack.pop()).toBe(2)
    expect(stack.pop()).toBe(1)
  })

  test('debería lanzar una excepción StackEmpty al intentar hacer pop en una pila vacía', () => {
    expect(() => stack.pop()).toThrow(StackEmpty)
  })

  test('debería permitir ver el último elemento con peek sin removerlo', () => {
    stack.push(1)
    stack.push(2)
    expect(stack.peek()).toBe(2)
    expect(stack.size()).toBe(2)
  })

  test('debería lanzar una excepción StackEmpty al intentar hacer peek en una pila vacía', () => {
    expect(() => stack.peek()).toThrow(StackEmpty)
  })

  test('debería estar vacía después de remover todos los elementos', () => {
    stack.push(1)
    stack.pop()
    expect(stack.isEmpty()).toBe(true)
  })

  // Aquí puedes agregar más pruebas si es necesario
})
