import React from 'react'
import { Typography } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'

import useStyles from './useStyles'

export interface StreamerCardProps {
  title: string
  coverPhoto: string
  username: string
  audienceCount: number
}

const StreamerCard: React.FC<StreamerCardProps> = ({
  title,
  coverPhoto,
  username,
  audienceCount,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div
        className={classes.cover}
        style={{ backgroundImage: `url(${coverPhoto})` }}
      />
      <div className={classes.audienceCount}>
        <VisibilityIcon fontSize="small" />
        <Typography>{audienceCount}</Typography>
      </div>
      <div className={classes.content}>
        <Typography noWrap>{title}</Typography>
        <Typography noWrap>{username}</Typography>
      </div>
    </div>
  )
}

export default StreamerCard
