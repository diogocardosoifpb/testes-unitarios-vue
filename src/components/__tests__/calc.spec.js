import { describe, it, expect } from 'vitest'
import { add, subtract, multiply, divide } from '@/components/calc.js'

describe('Calculator functions', () => {
  it('should add two numbers', () => {
    expect(add(2, 3)).toBe(5)
    expect(add(-1, 1)).toBe(0)
    expect(add(0, 0)).toBe(0)
  })

  it('should subtract two numbers', () => {
    expect(subtract(5, 3)).toBe(2)
    expect(subtract(-1, -1)).toBe(0)
    expect(subtract(0, 0)).toBe(0)
  })

  it('should multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6)
    expect(multiply(-1, 1)).toBe(-1)
    expect(multiply(0, 5)).toBe(0)
  })

  it('should divide two numbers', () => {
    expect(divide(6, 3)).toBe(2)
    expect(divide(-6, -3)).toBe(2)
    expect(divide(-6, 3)).toBe(-2)
  })

  it('should throw an error when dividing by zero', () => {
    expect(() => divide(6, 0)).toThrow('Cannot divide by zero')
  })
})
