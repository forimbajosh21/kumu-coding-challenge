import { createStyles, makeStyles, Theme } from '@material-ui/core'

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    imageContainer: {
      position: 'relative',
      height: 600,
      width: '100%',
      backgroundColor: palette.common.black,
      padding: spacing(1, 0),
      marginBottom: spacing(2),
    },
    cover: {
      position: 'absolute',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'top center',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    avatarContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    badge: {
      '& span': {
        height: 25,
        fontSize: 16,
        letterSpacing: 1,
        textTransform: 'uppercase',
        border: `2px solid ${palette.common.white}`,
        borderRadius: 15,
        backgroundColor: palette.kumu.primary.radicalRed,

        right: '59%',
        bottom: 2,
      },
    },
    avatar: {
      width: 80,
      height: 80,
      border: `4px solid ${palette.kumu.primary.radicalRed}`,
      marginRight: spacing(2),
    },
    content: {
      '& > p:first-child': {
        fontWeight: 'bold',
      },
    },
    circular: {
      color: palette.kumu.primary.radicalRed,
    },
  })

export default makeStyles(styles)
