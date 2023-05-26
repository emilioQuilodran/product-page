import './App.css';
import { ProductComponent } from './components/ProductComponent';
import { Header } from './components/pure/Header';
import { GlobalStyles, Main } from './components/styles/global';
import { ThemeProvider } from "styled-components";
import { themeLight } from './components/styles/Theme.styled';

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <div className="App">
        <GlobalStyles />
        <Header theme={
          {
            colors:{
              header: "white"
            }
          }
        }
        />
        <Main>
          <ProductComponent></ProductComponent>
        </Main>
      </div>
    </ThemeProvider>
  );
}

export default App;
