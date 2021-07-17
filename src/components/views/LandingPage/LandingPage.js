import './LandingPage.css';
import ButtonAppBar from '../../ButtonAppbar';
import Card from '../../Card2'
import CustomizedInputBase from '../../Search'
import Grid from '@material-ui/core/Grid';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const data = [{
  "description": [
      "1. 대파는 반으로 갈라 송송 썰고 소시지는 얇게 썰어 준비한다.",
      "2. 김치는 가위를 이용하여 잘게 썰어 준비한다.",
      "3. 팬에 식용유를 두르고 대파, 소시지를 넣어 노릇하게 볶는다.",
      "4. 소시지가 노릇해지면 설탕을 넣어 눌어붙도록 볶아준다.",
      "5. 설탕 향이 올라오면 간장을 넣어 볶는다.",
      "6. 수분이 사라지면 김치를 넣고 약불에서 볶아준다.",
      "7. 양념이 골고루 섞이면 즉석밥을 넣고 국자를 이용하여 풀어준다.",
      "8. 밥알이 다 풀어지면 불에 올려 볶아준다.",
      "9. 프라이팬에 식용유를 두르고 달걀프라이를 한다.",
      "10. 완성 접시에 김치볶음밥, 달걀프라이를 올리고 깨소금과 김 가루를 곁들인다."
  ],
  "ingredientsArr": [
      "소시지",
      "대파",
      "김치",
      "식용유",
      "파",
      "설탕",
      "간장",
      "김",
      "달걀",
      "깨소금",
      "볶음"
  ],
  "_id": "60f01d92dbb6bc09b8dab2a0",
  "videoId": "eIo2BaE6LxI",
  "channelId": "UCyn-K7rZLXjGl7VXGweIlcA",
  "thumbnails": "https://i.ytimg.com/vi/eIo2BaE6LxI/hqdefault.jpg",
  "title": "집에 있는 재료로 만드는 김치볶음밥!",
  "channelTitle": "백종원의 요리비책 Paik's Cuisine",
  "subscriberCount": 5070000,
  "viewCount": 3922197,
  "likeCount": 41902,
  "dislikeCount": 1113,
  "commentCount": 1681,
  "__v": 0
},
{
  "description": [
      "1. 참치기름을 냄비에 붓고 김치와 볶기 (설탕 반스푼 넣기)",
      "2. 김치가 적당히 볶아지면 양파 넣고 볶기",
      "3. 양파가 투명해지면 물 1컵 붓기",
      "4. 중약불에서 끓이다가 5분 뒤 고춧가루 반스푼, 참치 넣기",
      "5. 참치는 젓지말고 가만히 둔채로 5분 더 끓인다",
      "6. 대파 넣고 한번 부르르 끓으면 불 끄기"
  ],
  "ingredientsArr": [
      "설탕",
      "김치",
      "볶기",
      "양파",
      "김",
      "파",
      "고춧가루",
      "대파"
  ],
  "_id": "60f0204a46296120843a9d0c",
  "videoId": "_4Q8iMSCmhc",
  "channelId": "UCPWFxcwPliEBMwJjmeFIDIg",
  "thumbnails": "https://i.ytimg.com/vi/_4Q8iMSCmhc/hqdefault.jpg",
  "title": "밥 두그릇이 우스운 참치 김치찌개",
  "channelTitle": "하루한끼 one meal a day",
  "subscriberCount": 4300000,
  "viewCount": 1120911,
  "likeCount": 22144,
  "dislikeCount": 252,
  "commentCount": 883,
  "__v": 0
}
];
function LandingPage() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "4em 1em"
  };
  const items = data
  const ItemList = items && items.map((item) =>
    (<Card className="card" title={item.title} channelTitle={item.channelTitle} thumbnails={item.thumbnails} description={item.description} ingredientsArr={item.ingredientsArr}></Card>
    )
  );
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar>Recipe</ButtonAppBar>
      </header>
      <CustomizedInputBase></CustomizedInputBase>
      <div className="row">
      <Slider {...settings}>
        {ItemList}
        <Card className="card"></Card>
        <Card className="card"></Card>
        <Card className="card"></Card>
      </Slider>
      </div>
    </div>
  );
}

export default LandingPage;
