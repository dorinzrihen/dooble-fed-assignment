import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css';
import RickAndMortyCharacterPage from './pages/RickAndMortyCharacterPage/RickAndMortyCharacterPage';

const theme = createTheme();

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RickAndMortyCharacterPage />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
