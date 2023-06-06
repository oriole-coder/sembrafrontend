import { useNavigate } from "react-router";
// import { Button } from "react-bootstrap";

export default function NotFound() {
  
  const navigate = useNavigate();
  
  return (
    <section className="main-section">
      <h1>404</h1>
      <section className="section-content">
        <p>Page not found</p>
        {/* <Button onClick={() => navigate(-1)}>Back</Button>
        <Button onClick={() => navigate("/welcome")}>Home</Button> */}
      </section>
    </section>
  );
}
