import {CategorySelect} from './components/CategorySelect'
import {JokeModel} from './components/JokeModal'
import {Box, Typography} from '@mui/material'

export const App = () => {
  return (
    <Box
      component={'main'}
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: 'auto'
      }}
    >
      <Typography variant={'h3'} component={'h1'}>
        Jokes
      </Typography>
      <Typography variant={'h6'} component={'h2'} marginBottom={5}>
        Choose category and display random joke
      </Typography>
      <CategorySelect />
      <JokeModel />
    </Box>
  )
}
