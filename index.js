const makeShadow = require('shadow-callbag').default;

const skip = max => source => (start, sink) => {
  if (start !== 0) return;
  let skipped = 0;
  let talkback;
  let shadow;
  source(0, (t, d, s) => {
    if (t === 0) {
      shadow = makeShadow('skip', s);
      talkback = d;
      sink(0, talkback, shadow);
    } else if (t === 1) {
      if (skipped < max) {
        skipped++;
        talkback(1);
      } else {
        shadow(t, d);
        sink(t, d);
      }
    } else {
      sink(t, d);
    }
  });
};

module.exports = skip;
