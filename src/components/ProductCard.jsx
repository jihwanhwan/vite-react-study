import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="CardBox" onClick={showDetail}>
      <img src={item?.img} width={300} alt="" />
      <div>{item?.choice === true ? "ConsciousChoice" : ""}</div>
      <div>{item?.title}</div>
      <div>${item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
