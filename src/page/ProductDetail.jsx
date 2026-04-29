import { useEffect, useState } from "react";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `http://localhost:3000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    const getProductDetail = async () => {
      let url = `http://localhost:3000/products/${id}`;
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      setProduct(data);
    };
    getProductDetail();
  }, [id]);

  return (
    <div>
      <Container>
        <Row className="product-img">
          <Col>
            <img src={product?.img} alt="" />
          </Col>
          <Col>
            <div>{product?.title}</div>
            <div>${product?.price}</div>
            <div>{product?.choice === true ? "choice" : ""}</div>
            <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
              {/* <Dropdown.Item>{product?.size[0]}</Dropdown.Item>
              <Dropdown.Item>{product?.size[1]}</Dropdown.Item>
              <Dropdown.Item>{product?.size[2]}</Dropdown.Item> */}
              {product?.size?.map((size) => (
                <Dropdown.Item>{size}</Dropdown.Item>
              ))}
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
