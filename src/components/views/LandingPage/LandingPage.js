import './LandingPage.css';
import ButtonAppBar from '../../ButtonAppbar';
import Card from '../../Card'
import CustomizedInputBase from '../../Search'

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar></ButtonAppBar>
      </header>
      <CustomizedInputBase className="search"></CustomizedInputBase>
      <div className="row">
      <Card className="card"></Card>
      <Card className="card"></Card>
      </div>
    </div>
  );
}

export default LandingPage;
