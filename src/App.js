import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyles";
import { main } from "./theme/theme";
import Page from "./Page/Page";

function App() {
  return (
    <ThemeProvider theme={main}>
      <GlobalStyle />
      <Page />
    </ThemeProvider>
  );
}

export default App;
