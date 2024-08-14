import { AppBar, Box, Pagination, Toolbar, Typography } from "@mui/material"
import CharacterFilterTable from "./components/CharacterFilterTable/CharacterFilterTable"
import { useQuery } from "@tanstack/react-query"

const RickAndMortyCharacterTable = ({}) => {
    const { isPending, error, data } = useQuery({
      queryKey: ['repoData'],
      queryFn: () =>
        fetch('https://rickandmortyapi.com/api/character/?page=2').then((res) =>
          res.json(),
        ),
    })

    return <div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6">
                    Rick and Morty Characters App
                </Typography>
                </Toolbar>
            </AppBar>
          </Box>
      </div>
      <CharacterFilterTable/>
  </div>
}

export default RickAndMortyCharacterTable