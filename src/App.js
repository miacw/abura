import "./App.css";

function App() {
  function triggerForm() {
    window._klOnsite = window._klOnsite || [];
    window._klOnsite.push(["openForm", "9206885"]);
  }
  return (
    <div className="container">
      <button onClick={triggerForm}>Stay in the Loop</button>
    </div>
  );
}

export default App;
