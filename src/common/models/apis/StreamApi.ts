import { StreamerDetails } from '../typings/StreamerDetails'
import { StreamerInfo } from '../typings/StreamerInfo'

export interface StreamListApiParams {
  mode?: string
  page: number
  prev_ids?: string
}

export interface StreamListApiResponse {
  data: {
    lives: StreamerInfo[]
    count: {
      lives_count: number
    }
  }
}

export interface StreamDetailsApiParams {
  channelId: string
  uid: string
}

export interface StreamDetailsApiResponse {
  data: StreamerDetails
}
