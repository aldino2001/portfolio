import ContentFile from './Component/ContentFile';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <div className="App">
      <ContentFile/>
    </div>
    </ThemeProvider>
  );
}

export default App;
