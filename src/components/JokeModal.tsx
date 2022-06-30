import {useState} from 'react'
import {Button, Modal, Paper, Typography} from '@mui/material'
import {useJokes} from '../context'

export const JokeModel = () => {
  const {joke} = useJokes()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      {joke && (
        <Button
          id={'display-joke-button'}
          onClick={handleOpen}
          variant={'contained'}
          style={{marginTop: 10}}
        >
          Show Joke
        </Button>
      )}
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="joke-modal-title"
        aria-describedby="joke-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Paper
          sx={{
            background: '#fff',
            padding: '1rem',
            maxWidth: '400px',
            borderRadius: '.25rem'
          }}
        >
          <Typography
            id="joke-modal-title"
            variant="h6"
            component="p"
            data-testid={'joke-modal-title'}
          >
            {joke?.value}
          </Typography>
        </Paper>
      </Modal>
    </div>
  )
}
