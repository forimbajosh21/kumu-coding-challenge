import { createStyles, makeStyles, Theme } from '@material-ui/core'

const styles = ({ palette, spacing, breakpoints }: Theme) =>
  createStyles({
    title: {
      color: palette.kumu.primary.radicalRed,
    },
    content: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: spacing(3),
      marginBottom: spacing(5),
      listStyle: 'none',
      [breakpoints.down('md')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      [breakpoints.down('sm')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
    },
    contentCollapsed: {
      gridTemplateColumns: 'repeat(5, 1fr)',
      [breakpoints.down('md')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      [breakpoints.down('sm')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
    },
    button: {
      textTransform: 'none',
      color: palette.kumu.primary.radicalRed,
      fontSize: 18,
      textDecoration: 'underline',

      '&:hover': {
        textDecoration: 'underline',
      },
    },
    circular: {
      width: 18,
      height: 18,
      color: palette.kumu.primary.radicalRed,
      marginLeft: spacing(1),
    },
  })

export default makeStyles(styles)
