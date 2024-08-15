import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import RickAndMortyCharacterPage from './pages/RickAndMortyCharacterPage/RickAndMortyCharacterPage';
import theme from './context/theme';
import queryClient from './context/queryClient';
import './App.css';

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
