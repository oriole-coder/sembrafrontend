// import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <>
      <p>Welcome</p>
      {/* <Button onClick={() => navigate("/sembraTime")}>SembraTime</Button> */}
    </>
  );
}
