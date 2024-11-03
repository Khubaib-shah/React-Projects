import {
  Navbar,
  Header,
  Hero,
  Inspiration,
  Product,
  ShareSection,
  Footer,
} from "../Component/HomePageContainers";

const Home = ({ cartItems, onAddToCart, onRemoveFromCart }) => {
  return (
    <>
      <Navbar  cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />
      <Header />
      <Hero />
      <Product onAddToCart={onAddToCart} /> {/* Pass the function here */}
      <Inspiration />
      {/* <ShareSection /> */}
      <Footer />
    </>
  );
};

export default Home;
