import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import CharacterFilterTable from "./components/CharacterFilterTable/CharacterFilterTable"
import { useQuery } from "@tanstack/react-query"
import TableWithPagination from "../../components/TableWithPagination/TableWithPagination"
import { TableHeadersEnum, TCharacterResponse } from "./RickAndMortyCharacterTable.types"
import { capitalize } from 'lodash'

const capitalizeFirstLetter = (value: string) => capitalize(value)

const config = {
  headerCallback: {
    [TableHeadersEnum.image]: capitalizeFirstLetter,
    [TableHeadersEnum.name]: capitalizeFirstLetter,
    [TableHeadersEnum.origin]: capitalizeFirstLetter,
    [TableHeadersEnum.status]: capitalizeFirstLetter,
    [TableHeadersEnum.species]: capitalizeFirstLetter,
    [TableHeadersEnum.type]: capitalizeFirstLetter,
  },
  bodyCallback: {
    [TableHeadersEnum.image]: (row: any, key: string) => <img alt={row.name} src={row[key]}/>,
    [TableHeadersEnum.origin]: (row: any, key: string) => row[key].name,
  }
}

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
            <TableWithPagination 
              count={data?.info.pages} 
              onPageChange={() => {}}
              rows={data.results}
              headers={Object.keys(TableHeadersEnum)}
              config={config}
            />
          </>
      }
  </div>
}

export default RickAndMortyCharacterTable