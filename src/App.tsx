import { Button } from "@chakra-ui/react";
import {Link, Route, Routes } from "react-router-dom";
import {Layout} from "./Layout/Layout";
import { Home } from "./Pages/Home/Home";
import { Item } from "./Pages/Item/Item";

function App() {

  return (
    <div>
      <Link to="/">
        <Button style={{width: "50%"}}>Перше завдання</Button>
      </Link>
      <Link to="/item">
        <Button style={{width: "50%"}}>Друге завдання</Button>
      </Link>
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
