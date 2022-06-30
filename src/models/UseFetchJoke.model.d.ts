import {JokeModel} from './Joke.model'

export type UseFetchJokeModel = {
  isJokeLoading: boolean
  jokeError: Error | undefined
  joke: JokeModel | null
}
