
import { ThemeProvider } from '@mui/material';
import AppRoutes from './routes';
import { PrimaryTheme } from './assets/theme/theme';

function App() {
  return (
    <ThemeProvider theme={PrimaryTheme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
