import React, { useContext } from "react";
import NewArrivalCard from "./NewArrivalCard";
import ScrollAnimation from "react-animate-on-scroll";
import productContext from "../../Context/productContext";

const NewArrival = () => {
  const context = useContext(productContext);
  const { products } = context;
  // const productData = useSelector((state) => state.products);
  const productData = products;
  const newArrival = productData.filter(
    (product) => product.category === "new"
  );

  return (
    <div>
      <ScrollAnimation animateIn="fadeIn">
        <div className="flex flex-wrap items-end justify-between gap-2 px-6 my-20 overflow-hidden">
          {newArrival.map((item, index) => (
            <NewArrivalCard key={index} data={item} />
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default NewArrival;
