import DescriptionCard from "./components/DescriptionCard/DescriptionCard.tsx";
import Footer from "./components/Footer/Footer.tsx";
import ImageCarousel from "./components/ImageCarousel";
import styles from "./styles/App.module.scss";
import PriceRangeInput from "./components/PriceRangeInput/PriceRangeInput.tsx";

const App = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <ImageCarousel />
          <DescriptionCard />
        </div>
      </div>

      <PriceRangeInput min={0} max={100000} step={1000} />

      <Footer />
    </div>
  );
};

export default App;
