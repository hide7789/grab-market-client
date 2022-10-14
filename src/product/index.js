import "./index.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function Productpage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://631e8b56-35ba-4e3e-a23a-9fd18ddc7e59.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
        console.log(result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  if (product === null) {
    return <h1>상품정보를 받고 있습니다..</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2020년 12월8일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}
export default Productpage;
