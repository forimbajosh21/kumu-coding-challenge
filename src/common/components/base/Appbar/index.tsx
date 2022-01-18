/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */

import React from 'react'
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Hidden,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from 'app/hooks'

import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

import Logo from 'common/assets/images/logo.png'

import useStyles from './useStyles'

const Appbar: React.FC = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { list } = useAppSelector((state) => state.streams)

  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false)

  const handleClick = React.useCallback(() => navigate('/'), [navigate])

  const handleToggleDrawer = React.useCallback(() => {
    setIsDrawerOpen((prev) => !prev)
  }, [])

  const handleLiClick = React.useCallback(
    (channelId: string) => {
      handleToggleDrawer()
      navigate(`/details/${channelId}`)
    },
    [handleToggleDrawer, navigate],
  )

  return (
    <>
      <MuiAppBar position="fixed" elevation={0} className={classes.root}>
        <Toolbar>
          <div className={classes.imageContainer}>
            <img
              src={Logo}
              alt="Kumu"
              className={classes.image}
              onClick={handleClick}
            />
          </div>
          <Hidden xsDown>
            <Typography variant="h6" className={classes.text}>
              Streams
            </Typography>
          </Hidden>
          <Hidden smUp>
            <IconButton className={classes.button} onClick={handleToggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={isDrawerOpen}
              classes={{ paper: classes.drawerPaper }}
            >
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                <IconButton
                  className={classes.closeButton}
                  onClick={handleToggleDrawer}
                >
                  <CloseIcon fontSize="large" />
                </IconButton>
              </Box>

              <div className={classes.drawerContent}>
                <Typography
                  gutterBottom
                  variant="h6"
                  className={classes.drawerTitle}
                >
                  Streams
                </Typography>
                <List>
                  {React.useMemo(
                    () =>
                      Array.isArray(list) &&
                      list.length > 0 &&
                      list?.slice(0, 6).map((li) => (
                        <ListItem
                          button
                          disableGutters
                          key={li.uid}
                          onClick={() => handleLiClick(li.channel_id)}
                        >
                          <ListItemAvatar>
                            <Avatar
                              src={li.avatar}
                              className={classes.avatar}
                            />
                          </ListItemAvatar>
                          <ListItemText primary={li.username} />
                        </ListItem>
                      )),
                    [classes.avatar, handleLiClick, list],
                  )}
                </List>
                <img src={Logo} alt="Kumu" className={classes.drawerImage} />
              </div>
            </Drawer>
          </Hidden>
        </Toolbar>
      </MuiAppBar>
      <Toolbar />
    </>
  )
}

export default Appbar
