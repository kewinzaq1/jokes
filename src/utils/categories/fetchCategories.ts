import {JokeCategoriesModel} from '../../models/JokeCategories.model'

export const fetchCategories = (): Promise<JokeCategoriesModel> =>
  fetch('https://api.chucknorris.io/jokes/categories').then(res => res.json())
