import React from 'react'
import { Typography, Box, Button, CircularProgress } from '@material-ui/core'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { getStreamsList } from 'app/Streams/actions'
import { setPage } from 'app/Streams'

import StreamerCard from 'common/components/features/StreamerCard'

import useStyles from './useStyles'

const HomePage = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { sidebarCollapsed } = useAppSelector((state) => state.ui)
  const { list, loading, page } = useAppSelector((state) => state.streams)

  const [showMore, setShowMore] = React.useState<number>(1)

  const toBeSliced = React.useMemo(() => {
    const count = sidebarCollapsed ? 5 : 6
    return count * (showMore * 2)
  }, [showMore, sidebarCollapsed])

  const handleShowMore = React.useCallback(async () => {
    const comparison = sidebarCollapsed ? 10 : 12
    dispatch(setPage(page + 1))
    if (list.length - toBeSliced < comparison) {
      dispatch(setPage(page + 1))
      await dispatch(getStreamsList())
    }
    setShowMore((prev) => prev + 1)
  }, [dispatch, list.length, page, sidebarCollapsed, toBeSliced])

  const handleCardClick = React.useCallback(
    (id) => navigate(`/details/${id}`),
    [navigate],
  )

  return (
    <>
      <Typography gutterBottom variant="h6" className={classes.title}>
        Streams
      </Typography>
      <div
        className={clsx(classes.content, {
          [classes.contentCollapsed]: sidebarCollapsed,
        })}
      >
        {React.useMemo(
          () =>
            Array.isArray(list) &&
            list.slice(0, toBeSliced).map((li, i) => {
              return (
                <motion.div
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: (i % (sidebarCollapsed ? 10 : 12)) * 0.3,
                    },
                  }}
                  onClick={() => handleCardClick(li.channel_id)}
                >
                  <StreamerCard
                    title={li.title}
                    coverPhoto={li.cover_image}
                    username={li.username}
                    audienceCount={li.audience_count}
                  />
                </motion.div>
              )
            }),
          [handleCardClick, list, sidebarCollapsed, toBeSliced],
        )}
      </div>
      {Array.isArray(list) && list.length > 0 && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <Button
            className={classes.button}
            onClick={handleShowMore}
            disabled={loading === 'list'}
          >
            {loading === 'list' ? (
              <CircularProgress className={classes.circular} />
            ) : (
              'Show More'
            )}
          </Button>
        </Box>
      )}
    </>
  )
}

export default HomePage
