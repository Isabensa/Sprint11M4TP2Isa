import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 text-center p-5">
        <h1 className="text-4xl font-bold text-gray-800">Bienvenidos a mi Primera Página</h1>
        <div className="card mt-5">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
