import './App.css';
import Header from './components/pure/Header';
import { GlobalStyles, Main } from './components/styles/global';
import { ThemeProvider } from "styled-components";
import { themeLight } from './components/styles/Theme.styled';
import { Provider } from 'react-redux';
import createAppStore from './store/config/storeConfig';
import ProductContainer from './components/containers/productsContainer';

const shopApp = createAppStore()

function App() {
  return (
    <Provider store={shopApp}>
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
          <ProductContainer></ProductContainer>
        </Main>
      </div>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
