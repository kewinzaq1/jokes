import {useQuery} from 'react-query'
import {fetchCategories} from './fetchCategories'
import {UseFetchCategoriesModel} from '../../models/UseFetchCategories.model'
import {JokeCategoriesModel} from '../../models/JokeCategories.model'

export const useFetchCategories = (): UseFetchCategoriesModel => {
  const {isLoading, error, data} = useQuery('categories', fetchCategories)

  const isCategoriesLoading = isLoading as boolean
  const categoriesError = error as Error
  const categories = data as unknown as JokeCategoriesModel[]

  return {
    isCategoriesLoading,
    categories,
    categoriesError
  }
}
