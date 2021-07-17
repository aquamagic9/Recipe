import './DetailPage.css';
import ButtonAppBar from '../../ButtonAppbar';
import Card from './Card3';

function DetailPage() {

    return (
        <div className="page">
            <header className="page-header">
                <ButtonAppBar>View Details</ButtonAppBar>
            </header>
            <div>
                <div className="content">
                    <div className="thumnail"></div>
                    <div className="info"></div>
                </div>
                <div className="detail"></div>
            </div>
        </div>
    );
}

export default DetailPage;
