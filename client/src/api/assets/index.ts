import axios from '../../utils/axios';
import { formatQueryString } from '../../utils/util';
import { AssetsFilter, AssetsResponse } from './assets.d';

export async function getAssetsList(filter?: AssetsFilter): Promise<AssetsResponse[]> {
  const { data } = await axios.get(`/v2/assets${formatQueryString(filter)}`);
  return data;
}

export async function getHelloData() {
  return await axios.get('/api/hello');
}
