import express from 'express'
const app = express()
const port = 8080
import routerProducts from './routes/products.router.js'
import routerCarts from './routes/carts.router.js'

app.use(express.json())
app.use('/api/products', routerProducts)
app.use('/api/carts', routerCarts)


app.listen(port, () => {
  console.log(`example listen in port ${port}`);
})