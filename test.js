import assert from 'node:assert/strict'
import test from 'node:test'
import {iso15924} from './index.js'

test('iso15924', function () {
  assert.ok(Array.isArray(iso15924), 'should be an `array`')
  const script = iso15924.find((d) => d.code === 'Latn')

  assert(script, 'should include `Latn`')
  assert.equal(script.code, 'Latn', 'should have a four-character code')
  assert.equal(script.numeric, '215', 'should have a three-character code')
  assert.equal(script.name, 'Latin', 'should have a name')
  assert.equal(script.pva, 'Latin', 'should have a pva')
  assert.equal(script.date, '2004-05-01', 'should have a date')
})
