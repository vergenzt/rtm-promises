import axios from 'axios';

import { signed } from './signing';
import { restUrl } from './config';

// only invoked if response code is 2XX
const unwrap = (axiosResponse) => {
  const {rsp: {stat, err, ...data}} = axiosResponse.data;
  if (stat !== 'ok') {
    throw new Error(err);
  } else {
    return data;
  }
};

export const request = (method, args) => {
  args = {...args, method};
  args = {...args, format: 'json'};
  args = signed(args);
  return axios(restUrl, { params: args }).then(unwrap);
};

// todo
