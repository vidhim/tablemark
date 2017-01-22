import test from 'ava'

import fn from './'
import cases from './fixtures/inputs'

test('outputs the expected markdown', t => {
  let result = fn(cases.standard.input)
  t.is(result, cases.standard.expected)
})

test('works when provided alignment options', t => {
  let result = fn(cases.alignments.input, cases.alignments.options)
  t.is(result, cases.alignments.expected)
})

test('replaces column names when provided', t => {
  let result = fn(cases.columns.input, cases.columns.options)
  t.is(result, cases.columns.expected)
})

test('the thing', t => {
  console.log(fn([
    { name: 'Bob', age: 21, isCool: false },
    { name: 'Sarah', age: 22, isCool: true },
    { name: 'Lee', age: 23, isCool: true }
  ], {
    columns: [
      'first name',
      { name: 'how old', align: 'center' },
      'are they cool'
    ]
  }))
})