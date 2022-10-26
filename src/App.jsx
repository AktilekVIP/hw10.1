import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Fetch from "./Components/Fetch";
import styled from "styled-components";
const CardsWrapper = styled.div`
  width: 96%;
  display: grid;
  margin: 2%;
  grid-template-columns: repeat(3 , 1fr);
  gap: 50px;
`
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=10"
      );
      const result = await data.json();
      console.log(result);
      setUsers(result);
    };
    fetchData();
  }, []);
  return (
    <div className='App'>
      <CardsWrapper>
        {users.map((user) => {
          return <Fetch user={user} />;
        })}
      </CardsWrapper>
    </div>
  );
}

export default App;
