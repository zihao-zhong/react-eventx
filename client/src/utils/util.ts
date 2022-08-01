import { AnyFilter } from './common.d';

/**
 * 格式化传参
 * @param filter{Object}
 * @return string
 */
export function formatQueryString(filter?: AnyFilter) {
  if (!filter) return '';

  return Object.keys(filter).reduce((prev: string, key: string, index: number) => {
    if (index === 0) {
      return `?${key}=${filter[key]}`;
    }
    return `${prev}&${key}=${filter[key]}`;
  }, '');
}
