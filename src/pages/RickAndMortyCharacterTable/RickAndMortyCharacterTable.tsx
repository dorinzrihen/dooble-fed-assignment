import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import CharacterFilterTable from "./components/CharacterFilterTable/CharacterFilterTable"
import { useQuery } from "@tanstack/react-query"
import TableWithPagination from "../../components/TableWithPagination/TableWithPagination"
import { TCharacter, TCharacterResponse } from "./RickAndMortyCharacterTable.types"
import { characterTableConfig, TableHeadersEnum } from "./RickAndMortyCharacterTableLib"

const RickAndMortyCharacterTable = ({}) => {
    const { isPending, error, data } = useQuery<TCharacterResponse>({
      queryKey: ['repoData'],
      queryFn: () =>
        fetch('https://rickandmortyapi.com/api/character/?page=2').then((res) =>
          res.json(),
        ),
    })

    if(!isPending && !data) {
      return <div>No data</div>
    }

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
      {
        isPending
          ? <div>spinner</div> : 
          <>
            <CharacterFilterTable/>
            <TableWithPagination<TCharacter>
              count={data?.info.pages} 
              onPageChange={() => {}}
              rows={data.results}
              headers={TableHeadersEnum}
              config={characterTableConfig}
            />
          </>
      }
  </div>
}

export default RickAndMortyCharacterTable