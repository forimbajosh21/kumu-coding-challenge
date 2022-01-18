import { createStyles, makeStyles, Theme } from '@material-ui/core'

import { sidebarWidth } from '../Sidebar/useStyles'

const styles = ({ palette, zIndex, spacing, breakpoints }: Theme) =>
  createStyles({
    root: {
      backgroundColor: palette.kumu.primary.cetaceanBlue,
      zIndex: zIndex.drawer + 1,
      borderBottom: '1px solid #fff',
    },
    imageContainer: {
      width: sidebarWidth - spacing(3),
      display: 'flex',
      alignItems: 'center',
      [breakpoints.down('xs')]: {
        flexGrow: 1,
      },
    },
    image: {
      height: 54,
      cursor: 'pointer',
    },
    text: {},
    button: {
      color: palette.kumu.primary.radicalRed,
    },
    drawerPaper: {
      position: 'relative',
      height: '100%',
      backgroundColor: palette.kumu.primary.cetaceanBlue,
    },
    closeButton: {
      color: palette.kumu.primary.radicalRed,
    },
    drawerContent: {
      position: 'relative',
      padding: spacing(5, 5),
      height: '100%',
      color: palette.common.white,
    },
    drawerTitle: {
      color: palette.kumu.primary.radicalRed,
      fontWeight: 'bold',
    },
    avatar: {
      height: `${spacing(6)}px !important`,
      width: `${spacing(6)}px !important`,
    },
    drawerImage: {
      position: 'absolute',
      bottom: 24,
      left: 0,
      right: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 125,
      height: 75,
    },
  })

export default makeStyles(styles)
