import type { Pictures } from '../../../types';
import { unsplashAxios } from '../../config';

export async function getPictures(
  page: number,
  limit: number,
  controller: AbortController
) {
  let data: Pictures = [];
  try {
    const response = await unsplashAxios.get<Pictures>(``, {
      signal: controller.signal,
      params: { page, per_page: limit },
    });
    data = response.data;

    return { data, error: null };
  } catch (err) {
    if (err instanceof Error) {
      // handle the specific case of canceled request
      if (controller.signal.aborted) {
        return { data: data, error: 'canceled' };
      }
      return { data, error: err.message };
    }
    return { data, error: 'error without message' };
  }
}
