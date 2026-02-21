import { useState, useEffect } from "react";

function App() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (endpoint) => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:5000/api/${endpoint}`);
      if (!res.ok) throw new Error("Server error");
      const data = await res.json();
      setResult(data.value);
    } catch (err) {
      setResult("Error fetching data ❌");
    } finally {
      setLoading(false);
    }
  };

  // Auto-load CPU info
  useEffect(() => {
    fetchData("cpu");
  }, []);

  return (
    <div className="container">
      <h1>System Info Dashboard</h1>

      <div className="buttons">
        <button onClick={() => fetchData("free-memory")}>Free Memory</button>
        <button onClick={() => fetchData("total-memory")}>Total Memory</button>
        <button onClick={() => fetchData("cpu")}>CPU</button>
        <button onClick={() => fetchData("user")}>User</button>
      </div>

      <div className="output">
        {loading ? "Loading..." : result}
      </div>
    </div>
  );
}

export default App;