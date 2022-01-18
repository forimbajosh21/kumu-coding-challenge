import React from 'react'
import { Box, Container, Hidden } from '@material-ui/core'
import { Outlet } from 'react-router-dom'
import clsx from 'clsx'

import { useAppSelector, useAppDispatch } from 'app/hooks'
import { getStreamsList } from 'app/Streams/actions'
import { toggleSidebarCollapsed } from 'app/Ui'

import Appbar from 'common/components/base/Appbar'
import Sidebar from 'common/components/base/Sidebar'

import useStyles from './useStyles'

const LayoutDashboard: React.FC = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const { sidebarCollapsed } = useAppSelector((state) => state.ui)
  const { list } = useAppSelector((state) => state.streams)

  React.useEffect(() => {
    dispatch(getStreamsList())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleToggleSidebar = React.useCallback(
    () => dispatch(toggleSidebarCollapsed()),
    [dispatch],
  )

  return (
    <>
      <Appbar />
      <Box className={classes.root}>
        <Hidden xsDown>
          <Sidebar
            collapsed={sidebarCollapsed}
            ontoggle={handleToggleSidebar}
            list={list}
          />
        </Hidden>
        <div
          className={clsx(classes.content, {
            [classes.contentCollapsed]: sidebarCollapsed,
          })}
        >
          <Container maxWidth="xl" className={classes.container}>
            <Outlet />
          </Container>
        </div>
      </Box>
    </>
  )
}

export default LayoutDashboard
