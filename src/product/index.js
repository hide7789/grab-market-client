import "./index.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../config/constants.js";
import dayjs from "dayjs";
function Productpage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(`${API_URL}/products/${id}`)
      .then(function (result) {
        setProduct(result.data.product);
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
        <img src={`${API_URL}/${product.imageUrl}`} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">
          {dayjs(product.createdAt).format("YYYY년MM월DD일")}
        </div>
        <pre id="description">{product.description}</pre>
      </div>
    </div>
  );
}
export default Productpage;
