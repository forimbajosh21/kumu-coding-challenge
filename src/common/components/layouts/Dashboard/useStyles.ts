import { createStyles, makeStyles, Theme } from '@material-ui/core'

import { sidebarWidth } from 'common/components/base/Sidebar/useStyles'

const styles = ({ spacing, transitions, palette, breakpoints }: Theme) =>
  createStyles({
    root: {
      height: '100%',
      '@media (min-width:0px) and (orientation: landscape)': {
        height: 'calc(100% - 48px)',
      },
      '@media (min-width:600px)': {
        height: 'calc(100% - 64px)',
      },
    },
    container: {
      height: '100%',
    },
    content: {
      height: '100%',
      color: palette.common.white,
      marginLeft: spacing(10),
      paddingTop: spacing(5),

      transition: transitions.create('margin-left', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen,
      }),

      [breakpoints.down('xs')]: {
        marginLeft: 'unset',
      },
    },
    contentCollapsed: {
      marginLeft: sidebarWidth,
      [breakpoints.down('xs')]: {
        marginLeft: 'unset',
      },
    },
  })

export default makeStyles(styles)
