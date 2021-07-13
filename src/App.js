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
      </header>
      <CustomizedInputBase className="search"></CustomizedInputBase>
      <div className="row">
      <Card></Card>
      <Card></Card>
      </div>
    </div>
    
  );
}

export default App;
