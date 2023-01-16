import type { jsonPhImages } from '../../types';

import { axiosClient } from '../config';

export async function getImages(
  page: number,
  limit: number,
  controller: AbortController
) {
  let data: jsonPhImages = [];
  try {
    const response = await axiosClient.get<jsonPhImages>(``, {
      signal: controller.signal,
      params: { _page: page, _limit: limit },
    });
    data = response.data;

    return { data, error: null };
  } catch (err) {
    if (err instanceof Error) {
      // handle the specific case of canceled request
      if (controller.signal.aborted) {
        return { data, error: 'canceled' };
      }
      return { data, error: err.message };
    }
    return { data, error: 'error without message' };
  }
}
