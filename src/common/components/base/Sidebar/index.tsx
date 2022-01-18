import React from 'react'
import {
  Drawer,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core'
import clsx from 'clsx'

import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import { useNavigate } from 'react-router-dom'

import { StreamerInfo } from 'common/models/typings/StreamerInfo'

import useStyles from './useStyles'

export interface SibarProps {
  collapsed?: boolean
  ontoggle?: () => void
  list?: StreamerInfo[]
}

const Sibebar: React.FC<SibarProps> = ({ collapsed, ontoggle, list }) => {
  const classes = useStyles()
  const navigate = useNavigate()

  const handleClick = React.useCallback(
    (channelId: string) => navigate(`/details/${channelId}`),
    [navigate],
  )

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.root, {
        [classes.open]: collapsed,
        [classes.close]: !collapsed,
      })}
      classes={{
        paper: clsx(classes.paper, {
          [classes.open]: collapsed,
          [classes.close]: !collapsed,
        }),
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent={collapsed ? 'flex-end' : 'center'}
      >
        <IconButton onClick={ontoggle}>
          {collapsed ? (
            <MenuIcon htmlColor="#ffffff" />
          ) : (
            <MenuOpenIcon htmlColor="#ffffff" />
          )}
        </IconButton>
      </Box>
      <List>
        {React.useMemo(
          () =>
            Array.isArray(list) &&
            list.length > 0 &&
            list?.slice(0, 6).map((li) => (
              <ListItem
                key={li.uid}
                button
                onClick={() => handleClick(li.channel_id)}
              >
                <ListItemAvatar
                  className={clsx({ [classes.itemAvatar]: !collapsed })}
                >
                  <Avatar src={li.avatar} className={classes.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={li.username}
                  className={clsx({ [classes.hidden]: !collapsed })}
                />
              </ListItem>
            )),
          [
            classes.avatar,
            classes.hidden,
            classes.itemAvatar,
            collapsed,
            handleClick,
            list,
          ],
        )}
      </List>
    </Drawer>
  )
}

export default Sibebar
