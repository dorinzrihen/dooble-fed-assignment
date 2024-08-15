import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css';
import RickAndMortyCharacterPage from './pages/RickAndMortyCharacterPage/RickAndMortyCharacterPage';

const theme = createTheme({
  // components: {
  //   MuiTableCell: {
  //     styleOverrides: {
  //       root: {
  //         flex: 1,
  //         display: 'flex',
  //       }
  //     }
  //   }
  // }
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});

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
