import {
  Alert,
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material'
import {useFetchCategories} from '../utils/categories/useFetchCategories'
import {useJokes} from '../context'

export const CategorySelect = () => {
  const {currentCategory, setCurrentCategory} = useJokes()
  const {categories, categoriesError, isCategoriesLoading} =
    useFetchCategories()
  const handleChangeCategory = (e: SelectChangeEvent) =>
    setCurrentCategory(e.target.value as string)

  if (isCategoriesLoading) {
    return (
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <CircularProgress />
      </Box>
    )
  }

  if (categoriesError) {
    return (
      <Box sx={{display: 'flex'}}>
        <Alert severity="error">{categoriesError.message}</Alert>
      </Box>
    )
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="category-select-label">Category</InputLabel>
      <Select
        labelId="category-select"
        id="category=select"
        value={currentCategory}
        label="Category"
        onChange={handleChangeCategory}
      >
        {categories.map(category => (
          <MenuItem value={category} key={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
