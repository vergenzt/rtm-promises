import _ from 'lodash';
import md5 from 'md5';

import {apiKey, apiSecret} from './config';

export const signature = (args) => md5(
  apiSecret + _(args).toPairs().sortBy(0).flatten().join('')
);

export const signed = (args) => {
  const withApiKey = {...args, api_key: apiKey};
  const withApiSig = {...withApiKey, api_sig: signature(withApiKey)};
  return withApiSig;
};
