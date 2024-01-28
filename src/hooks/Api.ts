import axios from 'axios';
// eslint-disable-next-line import/named
import queryString, { StringifyOptions } from 'query-string';

export const QUERY_OPTIONS = { arrayFormat: 'index' };

const instance = axios.create({ 
  baseURL: import.meta.env.VITE_APP_END_POINT,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface API_OPTIONS {
  url: string;
  payload?: any;
  params?: any;
  // eslint-disable-next-line no-unused-vars
  transformer?: (f: any) => any;
}

class Api {
  constructor(args: any) {
    this.request = instance;

    this.onError = args?.onError;

    this.getError = ({ response, request, message }) => {
      if (response) return response;
      if (request) return request;
      if (message) return message;

      return null;
    };

    this.result = {};
  }

  getError = (err: any) => err;
  onError = (err: any) => err;
  request = instance;
  result = {};

  get = async ({
    url,
    params,
    transformer,
  }: API_OPTIONS) => {
    try {
      const res = await this.request.get(`${url}?${queryString.stringify(
        params,
        QUERY_OPTIONS as StringifyOptions
      )}`);
      
      return transformer ? transformer(res?.data) : res?.data;
    } catch (err) {
      const error = this.getError(err);

      this.onError?.(error);

      throw error;
    }
  };
}

export default Api;
