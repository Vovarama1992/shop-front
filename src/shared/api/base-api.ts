import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from './base-query-with-reauth'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Articles', 'session'],
})
