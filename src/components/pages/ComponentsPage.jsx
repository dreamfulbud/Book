import Img from "../atoms/Img";

import imgTest from "../../assets/test.png";

function ComponentsPage() {
  return (
    <>
      <h1>컴포넌트</h1>
      <Img src={imgTest} alt="테스트 이미지" />
      <Img src="dfadf.svg" alt="테스트 이미지" />
    </>
  );
}

export default ComponentsPage;
