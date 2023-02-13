import { useState } from "react";
import styled from "styled-components";
import imgError from "../../assets/error.png";

function Img(props) {
  const [error, setError] = useState(false);
  const { errorImg } = props;

  const handleOnError = (e) => {
    e.target.src = errorImg ? errorImg : imgError;
    setError(true);
  };
  return (
    <StyledImg
      {...props}
      onError={handleOnError}
      className={error && "error"}
    />
  );
}

const StyledImg = styled.img`
  max-width: 100%;
  display: block;

  &.error {
    width: 10em;
    border-radius: 1em;
  }
`;
export default Img;
