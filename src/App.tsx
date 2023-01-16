import GlobalStyle from './styles/global';
import { ThemesProvider } from './components/themesProvider';
import { Router } from './components/router';
function App() {
  return (
    <>
      <ThemesProvider>
        <GlobalStyle />
        <Router />
      </ThemesProvider>
    </>
  );
}

export default App;
