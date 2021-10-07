import styled from "styled-components";
import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <Container className="App">
      <Sidebar />
      <Content></Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
export default App;
