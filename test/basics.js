const test = require('tape');
const nm = require('nodemock');
const fallbackImage = require('../index.js');

test('Fallback image works', t => {
  t.plan(2);

  const img = {
    target: { src: 'shit.jpg' },
    onerror: ''
  };

  const fallback = 'good.jpg';

  const imageEl = nm.mock('addEventListener')
    .takes('error', () => {})
    .calls(1, [img])

  fallbackImage(imageEl, fallback);

  t.strictEquals(img.target.src, 'good.jpg', 'target.src gets set to fallback image');

  t.strictEquals(img.onerror, null, 'img.onerror gets set to null');
});
