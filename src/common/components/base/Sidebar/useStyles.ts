import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const sidebarWidth = 240

const styles = ({ transitions, spacing, palette }: Theme) =>
  createStyles({
    root: {
      width: sidebarWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    paper: {
      color: palette.common.white,
      backgroundColor: palette.kumu.primary.cetaceanBlue,
      borderRight: `1px solid ${palette.common.white} !important`,
      paddingTop: 56,
      '@media (min-width:0px) and (orientation: landscape)': {
        paddingTop: 48,
      },
      '@media (min-width:600px)': {
        paddingTop: 64,
      },
    },
    open: {
      width: sidebarWidth,
      transition: transitions.create('width', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
    },
    close: {
      transition: transitions.create('width', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: spacing(10),
    },
    itemAvatar: {
      minWidth: spacing(6),
    },
    avatar: {
      height: `${spacing(6)}px !important`,
      width: `${spacing(6)}px !important`,
    },
    hidden: {
      display: 'none',
    },
  })

export default makeStyles(styles)
