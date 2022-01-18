import { createStyles, makeStyles, Theme } from '@material-ui/core'

const styles = ({ palette, shape, spacing }: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      height: 350,
      width: '100%',
      border: `4px solid ${palette.kumu.primary.radicalRed}`,
      borderRadius: shape.borderRadius * 2,
      cursor: 'pointer',
    },
    cover: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: shape.borderRadius,
    },
    audienceCount: {
      position: 'absolute',
      top: 16,
      right: 16,
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.40)',
      borderRadius: 24,
      padding: spacing(0.5, 1),

      '& svg': {
        marginRight: spacing(0.5),
      },
      '& p': {
        lineHeight: 1,
      },
    },
    content: {
      position: 'absolute',
      right: 8,
      bottom: 8,
      left: 8,
      zIndex: 1,
      backgroundColor: '#260f67',
      borderRadius: shape.borderRadius * 2,
      padding: spacing(0.5, 1),

      '& > p:first-child': {
        fontWeight: 'bold',
      },
    },
  })

export default makeStyles(styles)
