import { app } from './app'
import productsRoutes from './routes/products'

app.use('/products', productsRoutes)
