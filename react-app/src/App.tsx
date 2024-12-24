import { useState } from "react";
import "./App.css";

const BASE_API_URL = "http://localhost:8989/api";

function App() {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchWithCORS = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`${BASE_API_URL}/with-cors`);
      const data = await resp.json();

      setResponse(data);
      setError(null);
    } catch (err) {
      setResponse({});
      setError(err as Error);
    }
    setLoading(false);
  };

  const fetchWithCORSPlugin = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`${BASE_API_URL}/with-cors-plugin`);
      const data = await resp.json();

      setResponse(data);
      setError(null);
    } catch (err) {
      setResponse({});
      setError(err as Error);
    }
    setLoading(false);
  };

  const fetchWithoutCORS = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`${BASE_API_URL}/without-cors`);
      const data = await resp.json();

      setResponse(data);
      setError(null);
    } catch (err) {
      setResponse({});
      setError(err as Error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
      </header>

      <div className="mt-4 flex space-x-4">
        <button type="button" onClick={fetchWithCORS}>
          With CORS (Manual)
        </button>
        <button type="button" onClick={fetchWithCORSPlugin}>
          With CORS (Plugin)
        </button>
        <button type="button" onClick={fetchWithoutCORS}>
          Without CORS
        </button>
      </div>

      <div className="mt-4">
        {loading && <p>Loading...</p>}
        {response && (
          <pre className="bg-gray-800 text-white p-4 mb-4 rounded-lg text-left">
            {JSON.stringify(response, null, 2)}
          </pre>
        )}
        {error && <p className="text-red-500 mb-4">Error: {error.message}</p>}
      </div>
    </div>
  );
}

export default App;
