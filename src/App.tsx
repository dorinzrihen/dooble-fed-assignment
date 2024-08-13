import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css'
import RickAndMortyCharacterTable from './pages/RickAndMortyCharacterTable/RickAndMortyCharacterTable';

const theme = createTheme();

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RickAndMortyCharacterTable/>
        </QueryClientProvider>
    </ThemeProvider>
  )
}



export default App
