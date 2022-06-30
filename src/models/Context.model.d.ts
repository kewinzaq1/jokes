import {JokeCategoriesModel} from './JokeCategories.model'
import {Dispatch, SetStateAction} from 'react'
import {JokeModel} from './Joke.model'

export type ContextModel = {
  currentCategory: string | JokeCategoriesModel
  setCurrentCategory: Dispatch<SetStateAction<string>>
  joke: JokeModel | null
  jokeError: Error | undefined
  isJokeLoading: boolean
}
