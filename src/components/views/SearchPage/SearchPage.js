import './SearchPage.css';
import ButtonAppBar from '../../ButtonAppbar';
import Card from '../../Cardcol'

function SearchPage() {
    return (
        <div className="page">
            <header className="page-header">
                <ButtonAppBar></ButtonAppBar>
            </header>
            <div className="col">
                <div className="card"><Card></Card></div>
                <div className="card"><Card></Card></div>
            </div>
        </div>
    );
}

export default SearchPage;
