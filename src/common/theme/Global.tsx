import withStyles from '@material-ui/core/styles/withStyles'

const Global = withStyles((theme) => ({
  '@global': {
    // Define any global styles/classes here
    body: {
      overflowY: 'auto',
      backgroundColor: theme.palette.kumu.primary.cetaceanBlue,
    },

    'body, #root': {
      height: '100vh',
    },

    'body[style*="overflow: hidden;"]': {
      paddingRight: theme.spacing(1),
    },

    '::-webkit-scrollbar': {
      width: theme.spacing(1),
    },

    '::-webkit-scrollbar-track': {
      borderRadius: theme.shape.borderRadius,
      background: '#E0E0E0',
    },

    '::-webkit-scrollbar-thumb': {
      borderRadius: theme.shape.borderRadius,
      background: '#CCCCCC',
    },

    '::-webkit-scrollbar-thumb:hover': {
      background: '#B8B8B8',
    },

    '::placeholder': {
      color: '#CCCCCC',
    },
  },
}))(() => null)

export default Global
