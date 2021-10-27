import test from 'tape'
import {iso15924} from './index.js'

test('iso15924', function (t) {
  let index = -1

  t.plan(6)

  t.ok(Array.isArray(iso15924), 'should be an `array`')

  while (++index < iso15924.length) {
    const script = iso15924[index]
    if (script.code === 'Latn') {
      t.equal(script.code, 'Latn', 'should have a four-character code')
      t.equal(script.numeric, '215', 'should have a three-character code')
      t.equal(script.name, 'Latin', 'should have a name')
      t.equal(script.pva, 'Latin', 'should have a pva')
      t.equal(script.date, '2004-05-01', 'should have a date')
    }
  }
})
