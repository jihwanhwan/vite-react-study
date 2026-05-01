import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    const getProducts = async () => {
      let searchQuery = query.get("q") || "";
      console.log("쿼리값은 ?", searchQuery);

      let url = `https://my-json-server.typicode.com/jihwanhwan/jihwan-hnm?q=${searchQuery}`;
      // let url = `http://localhost:3000/products`;
      // let url = searchQuery
      //   ? `http://localhost:3000/products?q=${searchQuery}`
      //   : `http://localhost:3000/products`;
      let response = await fetch(url);
      let data = await response.json();
      console.log("검색어:", searchQuery);
      console.log("요청 URL:", url);
      // console.log("data :", data);
      setProductList(data);
    };
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3} key={menu.id}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
