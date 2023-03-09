import React from 'react';
import './css/home.css'
import logo from '../images/team_logo.png';

const Home = () => {
    return (
      <div>
      <div className='background'>
        <div className='kea'>
          <h1>CONNECT.</h1>
          <h1>SOLVE.</h1>
          <h1>CREATE.</h1>
        </div>
        <div className='main'>
          <img src={logo} alt="팀로고" />
        </div>
      </div>
      <div className='introduce'>
        <h1><u>"Never Walk Alone"</u></h1>
        <div >
          PBL 과정속에서 하나의 팀이 되어 서로 이끌어주고 <br /> <br />
          나의 생각보다 동료의 생각이 옳을 수 있다는 믿음을 가지고 <br /> <br />
          소통과 배려로 함께 성장하는 팀 
        </div>
      </div>
      </div>
    );
}

export default Home;