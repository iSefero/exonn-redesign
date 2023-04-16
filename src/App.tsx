// React
import { Route, Routes } from "react-router-dom";

// Common
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Item } from "./pages/Item/Item";

function App() {

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/item" element={<Item/>}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App
