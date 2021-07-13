import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './ButtonAppbar';
import Card from './Card'
import CustomizedInputBase from './Search'
import { TableRow } from '@material-ui/core';
import { Table } from '@material-ui/core';
import { TableCell } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar></ButtonAppBar>
        <CustomizedInputBase></CustomizedInputBase>
        <Table>
          <TableRow>
            <TableCell><Card></Card></TableCell>
            <TableCell><Card></Card></TableCell>
            <TableCell><Card></Card></TableCell>
          </TableRow>
        </Table>
      </header>
    </div>
  );
}

export default App;
