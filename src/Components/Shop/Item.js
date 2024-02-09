import { useParams } from "react-router-dom";
import videoLink from "../../Assets/video.mp4";
import ScrollAnimation from "react-animate-on-scroll";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {
  addToCart,
  // addQuantity,
  // minusQuantity,
  toggleCart,
  toggleSidebar,
} from "../../features/Slice";
import { useContext, useEffect } from "react";
import productContext from "../../Context/productContext";

const Item = () => {
  const context = useContext(productContext);
  const { products } = context;
  const productToLoad = products;
  const param = useParams();
  const selectedItem = productToLoad.filter((item) => item.id == param.itemId);
  const item = selectedItem[0];
  const itemStyle = {
    backgroundColor: item.bColor,
    color: item.tColor,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(item));
    dispatch(toggleCart());
  };
  // const addQuantityHandler = () => {
  //   dispatch(addQuantity(item.id));
  // };
  // const minusQuantityHandler = () => {
  //   dispatch(minusQuantity(item.id));
  // };
  return (
    <div className="">
      <div style={itemStyle} className="px-6 h-screen relative mt-[-130px]">
        <ScrollAnimation animateIn="fadeIn">
          <div className="flex items-center pt-[130px] justify-between">
            <div className="flex-1">
              <div className="text-[48px] mb-[64px] uppercase font-extrabold w-72 leading-[40px]">
                {item.name}
              </div>
              <div className="flex text-[12px] gap-20 p-3 px-7 text-white bg-black w-max rounded-3xl">
                {/* <div className="flex gap-5">
                  <button onClick={minusQuantityHandler}>-</button>
                  {item.quantity}
                  <button onClick={addQuantityHandler}>+</button>
                </div> */}

                <div>${item.price}</div>
                <div className="flex items-center text-lg">
                  <FaArrowRightLong />
                </div>
                <button
                  className="font-semibold uppercase"
                  onClick={addToCartHandler}
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="flex flex-1 overflow-hidden">
              <img
                alt="product"
                className="w-full duration-300 hover:scale-110"
                src={item.img_url}
              />
            </div>
            <div className="flex-1 ">
              <h4 className="text-[10px] mb-[32px]">INFO</h4>
              <p className="tracking-[0.01rem] mb-5">{item.info1}</p>
              <p className="tracking-[0.01rem]">{item.info2}</p>
            </div>
          </div>
          <div className="absolute bottom-2 w-[97%]">
            <div className="flex justify-between mt-16 pt-4 text-[10px] border-t border-black">
              <p>${item.price}</p>
              <p className="uppercase">with care by our work team</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      {item.review ? (
        <ScrollAnimation animateIn="fadeIn">
          <div className="flex justify-center px-6 pt-28 ">
            <h5 className="review max-w-[680px] text-[56px] font-extrabold leading-[52px] text-center">
              {item.review}
            </h5>
          </div>
        </ScrollAnimation>
      ) : (
        ""
      )}
      {item["impact-img1"] ? (
        <ScrollAnimation animateIn="fadeIn">
          <div className="mt-28">
            <div className="flex gap-20 px-6">
              <img alt="impact" className="w-[25%]" src={item["impact-img1"]} />
              <img alt="impact" className="w-[25%]" src={item["impact-img2"]} />
            </div>
          </div>
        </ScrollAnimation>
      ) : (
        ""
      )}
      <ScrollAnimation animateIn="fadeIn">
        <div className="flex justify-end px-6 py-10 pb-20">
          <video className="w-[50%]" autoPlay muted loop src={videoLink} />
        </div>
      </ScrollAnimation>
      {item["impact-img1"] ? (
        <ScrollAnimation animateIn="fadeIn">
          <div className="mb-20">
            <div className="flex gap-20 px-6">
              <img alt="impact" className="w-[25%]" src={item["impact-img3"]} />
              <img alt="impact" className="w-[25%]" src={item["impact-img4"]} />
            </div>
          </div>
        </ScrollAnimation>
      ) : (
        ""
      )}
      <ScrollAnimation animateIn="fadeIn">
        <div className="mb-20 text-[40px] flex justify-end pr-[270px]">
          <h4 className="w-[490px] font-extrabold leading-[40px]">
            WITH EVERY PURCHASE, YOU HAVE THE POTENTIAL TO CHANGE THE COURSE OF
            A WOMAN’S LIFE.
          </h4>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Item;
