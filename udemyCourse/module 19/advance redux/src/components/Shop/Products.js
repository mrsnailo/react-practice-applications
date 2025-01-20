import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Burger'
          price={6}
          description='This is an amazing burger!'
        />
        <ProductItem
          title='Bike'
          price={6000}
          description='This is a cool bike!'
        />
        <ProductItem
          title='Mac'
          price={8000}
          description='This mac is legendary'
        />
      </ul>
    </section>
  );
};

export default Products;
