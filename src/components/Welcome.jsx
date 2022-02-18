// import styles
import { Button, Container } from "react-bootstrap";
import "../styles/welcome.css";

// import svg
import Image from "../assets/phone.svg";

const Welcome = () => {
  return (
    <Container className="welcome">
      <div className="left-side">
        <h1>Guiden Ni</h1>
        <p>
          Where you can find your service provider fast than you think Lörem
          ipsum eukusade syren kubel superspridare. Önt treliga. Rean felig
          bement. Pons difäbesm för tere alenade. Sevassade tir, är es temyrtad.
          Pälogi tres homose. Seling mibel mikros. Operaitet pseudobel ohör
          snålsurfa. Tempologi var hemir sanirade, heteror. Ranas
        </p>
        <Button variant="outline-secondary">Get Started</Button>
      </div>
      <div className="right-side">
        <img src={Image} alt="aaa" />
      </div>
    </Container>
  );
};

export default Welcome;
