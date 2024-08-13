import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import CharacterFilterTable from "./components/CharacterFilterTable/CharacterFilterTable"

const RickAndMortyCharacterTable = ({}) => {
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