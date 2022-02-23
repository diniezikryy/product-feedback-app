import { useEffect, useState } from "react";

import ProductFeedback from "./components/ProductFeedback";

import productFeedbackService from "./services/productFeedback";

const App = () => {
  const [productFeedbacks, setProductFeedbacks] = useState([]);

  useEffect(() => {
    productFeedbackService.getAll().then((initialProductFeedback) => {
      setProductFeedbacks(initialProductFeedback);
    });
  }, []);

  return (
    <div>
      <h1 className="text-6xl">Hello World!</h1>
      {productFeedbacks.map((productFeedback) => {
        console.log(productFeedback);
        return (
          <ProductFeedback
            productFeedback={productFeedback}
            key={productFeedback.id}
          />
        );
      })}
    </div>
  );
};

export default App;
