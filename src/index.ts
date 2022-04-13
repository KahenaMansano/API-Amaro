import { app } from './app'
import { createList } from './endpoints/createList'

app.post('/list', createList)
// app.get('/list/searc', searchProducts)
