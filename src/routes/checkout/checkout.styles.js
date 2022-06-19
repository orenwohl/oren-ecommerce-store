import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 80%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: 503px) {
    font-size: 12px;
    width: 100%;
    padding: 14px;
    display: flex;
    flex-wrap: wrap;

    justify-content: space-between;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;

  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
