import React from "react";

const CheckoutCard = ({ data }) => {
  return (
    <div key={data.id} className="flex items-center justify-between pt-10">
      <img alt="cart-product" className="w-32 " src={data.img_url} />
      <div className="w-full font-semibold text-left uppercase">
        {data.quantity} X {data.name}
      </div>
      <p>${data.price}.00</p>
    </div>
  );
};

export default CheckoutCard;
