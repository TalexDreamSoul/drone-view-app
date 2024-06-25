import { createAlova } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';

export const alovaInstance = createAlova({
  requestAdapter: GlobalFetch()
});
