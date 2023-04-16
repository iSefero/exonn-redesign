// React
import { Route, Routes } from "react-router-dom";

// Common
import { Layout } from "./Layout/Layout";
import { Home } from "./Pages/Home/Home";
import { Item } from "./Pages/Item/Item";

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
