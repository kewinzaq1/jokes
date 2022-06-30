import {JokeCategoriesModel} from './JokeCategories.model'

export type UseFetchCategoriesModel = {
  isCategoriesLoading: boolean
  categoriesError: Error
  categories: JokeCategoriesModel[]
}
