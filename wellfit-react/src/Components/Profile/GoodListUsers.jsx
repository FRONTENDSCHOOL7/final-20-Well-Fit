import React, { useState } from 'react';
import styled from 'styled-components';
import ModalListGoodsUsers from '../common/Modal/ModalListGoodsUsers';

const StyledGoodList = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #fff;
  padding: 20px 0;
  padding-left: 16px;
  margin-top: 6px;

  & .product-img {
    width: 140px;
    height: 92px;
    border-radius: 8px;
    border: 0.5px solid #dbdbdb;
    background: #c4c4c4;
  }

  & .item-list {
    display: flex;
    align-items: center;
    gap: 10px;
    overflow-x: auto;
    overflow-y: hidden;
  }
  & .store-wrapper > p {
    color: #000;
    font-size: 16px;
    font-weight: 700;
  }
  & .item {
    display: flex;
    flex-direction: column;
  }
  & .item-name {
    padding-top: 6px;
    color: #000;
    font-size: 14px;
    font-weight: 400;
  }
  & .item-price {
    padding-top: 4px;
    color: #004aad;
    font-size: 12px;
    font-weight: 700;
  }
`;
const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.5);
`;
// productList
export default function GoodList({ productList }) {
  const [isGoods, setIsGoods] = useState(false);

  const handleGoodsClick = () => {
    setIsGoods(!isGoods);
  };
  return (
    <>
      <StyledGoodList>
        <p>판매 중인 상품</p>
        <ul className="item-list">
          {productList &&
            productList.map((product, index) => (
              <li className="item" onClick={handleGoodsClick} key={index}>
                <img
                  src={product.itemImage}
                  alt={`아이템${index + 1}`}
                  className="product-img"
                />
                <span className="item-name">{product.itemName}</span>
                <span className="item-price">{`${product.price}원`}</span>
              </li>
            ))}
        </ul>
      </StyledGoodList>
      {isGoods && (
        <>
          <StyledOverlay onClick={handleGoodsClick} />
          <ModalListGoodsUsers />
        </>
      )}
    </>
  );
}
