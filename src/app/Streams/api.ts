/* eslint-disable import/prefer-default-export, camelcase */

import { AxiosResponse } from 'axios'
import axiosApi from 'common/utils/axios'
import {
  StreamListApiParams,
  StreamListApiResponse,
  StreamDetailsApiParams,
  StreamDetailsApiResponse,
} from 'common/models/apis/StreamApi'

export const streamsListApi = async ({
  mode = 'all',
  page = 1,
  prev_ids = '',
}: StreamListApiParams) => {
  const result = await axiosApi.get<
    StreamListApiParams,
    AxiosResponse<StreamListApiResponse>
  >('/site/get-browse-live', {
    params: {
      mode,
      page,
      prev_ids,
    },
  })
  return result.data.data
}

export const streamDetailsApi = async ({
  channelId,
  uid,
}: StreamDetailsApiParams) => {
  const urlencoded = new URLSearchParams()
  urlencoded.append('id', channelId)

  const result = await axiosApi.post<
    StreamDetailsApiParams,
    AxiosResponse<StreamDetailsApiResponse>
  >('/live/regular-data', urlencoded, {
    headers: {
      'device-Id': uid,
    },
  })
  return result.data.data
}
