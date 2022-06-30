import {JokeCategoriesModel} from '../../models/JokeCategories.model'
import {fetchJoke} from './fetchJoke'
import {UseFetchJokeModel} from '../../models/UseFetchJoke.model'
import {JokeModel} from '../../models/Joke.model'
import {useMemo, useState} from 'react'

export const useFetchJoke = (
  currentCategory: JokeCategoriesModel
): UseFetchJokeModel => {
  const [joke, setJoke] = useState<JokeModel | null>(null)
  const [jokeError, setJokeError] = useState<Error>()
  const [isJokeLoading, setIsJokeLoading] = useState(false)

  useMemo(() => {
    if (!currentCategory.length) {
      return
    }
    setIsJokeLoading(true)
    setJokeError(undefined)
    fetchJoke(currentCategory as JokeCategoriesModel)
      .then(joke => {
        setIsJokeLoading(false)
        setJoke(joke)
      })
      .catch(error => {
        setJokeError(error)
        setIsJokeLoading(false)
      })
  }, [currentCategory])

  return {joke, jokeError, isJokeLoading}
}
// export const useFetchJoke = (
//   category: JokeCategoriesModel
// ): UseFetchJokeModel => {
//   const {isLoading, error, data} = useQuery('joke', () => fetchJoke(category))
//
//   const isJokeLoading = isLoading as boolean
//   const jokeError = error as Error
//   const joke = data as unknown as JokeModel
//
//   return {isJokeLoading, jokeError, joke}
// }
