import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'

import useStyles from './styles'

const products = [
    { id: 1, name: 'Macbook', description: 'Apple Macbook', price: '$500', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1603332211000https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1603332211000' },
    { id: 2, name: 'Shoes', description: 'Adidas Ultra Boost', price: '$500', image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/429a510e09fe4039ba33ac770135d8be_9366/Tenis_Ultraboost_21_Branco_FY0377_01_standard.jpg'}
]

const Products = () => {
    const classes = useStyles()

    return(
        <main className={ classes.content }>
            <div className={ classes.toolbar }/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={ product.id } xs={12} sm={6} md={4} lg={3}>
                        <Product product={ product } />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products