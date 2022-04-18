import { app } from './app'
import { createList } from './endpoints/createList'
import { searchProducts } from './endpoints/searchProducts'

app.post('/list', createList)
app.get('/list/search/:params', searchProducts)
