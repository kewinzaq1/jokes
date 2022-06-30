import {JokeCategoriesModel} from '../../models/JokeCategories.model'
import {JokeModel} from '../../models/Joke.model'

export const fetchJoke = (category: JokeCategoriesModel): Promise<JokeModel> =>
  fetch(`https://api.chucknorris.io/jokes/random?category=${category}`).then(
    res => res.json()
  )
