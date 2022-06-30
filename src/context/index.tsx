import {createContext, ReactNode, useContext, useState} from 'react'
import {JokeCategoriesModel} from '../models/JokeCategories.model'
import {ContextModel} from '../models/Context.model'
import {useFetchJoke} from '../utils/joke/useFetchJoke'

const JokesContext = createContext<ContextModel | null>(null)

export const JokesProvider = ({children}: {children: ReactNode}) => {
  const [currentCategory, setCurrentCategory] = useState<
    JokeCategoriesModel | string
  >('')

  const {joke, jokeError, isJokeLoading} = useFetchJoke(
    currentCategory as JokeCategoriesModel
  )

  return (
    <JokesContext.Provider
      value={{
        currentCategory,
        setCurrentCategory,
        joke,
        jokeError,
        isJokeLoading
      }}
    >
      {children}
    </JokesContext.Provider>
  )
}

export const useJokes = () => {
  const context = useContext(JokesContext)
  if (!context) {
    throw new Error('useCategories might used only within JokesProvider')
  }
  return context
}
