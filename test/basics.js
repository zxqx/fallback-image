var test = require('tape');
var nm = require('nodemock');
var fallbackImage = require('../index.js');

test('Fallback image works', function(t) {
  t.plan(2);

  var img = {
    srcElement: { src: 'shit.jpg' },
    onerror: '' 
  };

  var fallback = 'good.jpg';

  var imageEl = nm.mock('addEventListener')
    .takes('error', function() {})
    .calls(1, [img])

  fallbackImage(imageEl, fallback);
  
  t.strictEquals(img.srcElement.src, 'good.jpg', 'srcElement.src gets set to fallback image');

  t.strictEquals(img.onerror, null);
});
