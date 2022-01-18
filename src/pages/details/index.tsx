import React from 'react'
import { useParams } from 'react-router-dom'
import {
  Avatar,
  Badge,
  Box,
  CircularProgress,
  Typography,
} from '@material-ui/core'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { getStreamDetails } from 'app/Streams/actions'

import useStyles from './useStyles'

const DetailsPage = () => {
  const classes = useStyles()
  const params = useParams()
  const dispatch = useAppDispatch()
  const { loading, list, details } = useAppSelector((state) => state.streams)

  React.useEffect(() => {
    if (Array.isArray(list) && list.length > 0) {
      const streamer = list.find((li) => li.channel_id === params.channel_id)
      if (streamer !== undefined) {
        dispatch(getStreamDetails(params.channel_id || '', streamer.uid))
      }
    }
  }, [dispatch, list, params.channel_id])

  if (loading === 'list' || loading === 'details' || details === null) {
    return (
      <Box
        height="100%"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress className={classes.circular} />
      </Box>
    )
  }

  return (
    <>
      <div className={classes.imageContainer}>
        <div
          className={classes.cover}
          style={{ backgroundImage: `url(${details.cover_image})` }}
        />
      </div>
      <div className={classes.avatarContainer}>
        <Badge
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent="live"
          className={classes.badge}
        >
          <Avatar src={details.liveuser.avatar} className={classes.avatar} />
        </Badge>
        <div className={classes.content}>
          <Typography>{details.title}</Typography>
          <Typography>{details.liveuser.username}</Typography>
        </div>
      </div>
    </>
  )
}

export default DetailsPage
