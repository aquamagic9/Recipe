import './LandingPage.css';
import ButtonAppBar from '../../ButtonAppbar';
import Card from '../../Card2'
import CustomizedInputBase from '../../Search'
import Grid from '@material-ui/core/Grid';



const data = {
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
}

function LandingPage() {


  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar></ButtonAppBar>
      </header>
      <CustomizedInputBase></CustomizedInputBase>
      <div className="row">
      <Card className="card" title={data.title} channelTitle={data.channelTitle} thumbnails={data.thumbnails} description={data.description} ingredientsArr={data.ingredientsArr}></Card>
      <Card className="card"></Card>
      </div>
    </div>
  );
}

export default LandingPage;
