import * as signing from '../src/signing';

/* set in package.json:
process.env.RTM_API_KEY = 'abc123',
process.env.RTM_API_SECRET = 'BANANAS',
*/

const args = { yxz: 'foo', feg: 'bar', abc: 'baz' };

describe('signature', () => {
  let subject = signing.signature;

  it('should work with website example', () => {
    expect(subject(args)).to.eq('82044aae4dd676094f23f1ec152159ba');
  });
});

describe('signed', () => {
  let subject = signing.signed;

  it('should add api_key and api_sig', () => {
    expect(subject(args)).to.deep.eq({
      ...args,
      api_key: 'abc123',
      api_sig: '6cd1c006f870abc4686215610f5b8249',
    });
  });
});

