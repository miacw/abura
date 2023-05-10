import { render } from "@testing-library/react";
import "./App.css";
import Form from "./Form";

function App() {
  function triggerForm() {
    window._klOnsite = window._klOnsite || [];
    window._klOnsite.push(["openForm", "R9uZQE"]);
  }

  function triggerCustomForm() {
    render(<Form />);
  }
  return (
    <div className="container">
      <button onClick={triggerCustomForm}>Stay in the Loop</button>
      <Form />
    </div>
  );
}

export default App;
