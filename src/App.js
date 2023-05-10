import "./App.css";

function App() {
  function triggerForm() {
    window._klOnsite = window._klOnsite || [];
    window._klOnsite.push(["openForm", "R9uZQE"]);
  }
  return (
    <div className="container">
      <button onClick={triggerForm}>Stay in the Loop</button>
    </div>
  );
}

export default App;
