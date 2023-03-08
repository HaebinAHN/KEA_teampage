import React from 'react';
import './css/home.css'

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
          <h2>카카오 99%</h2>
          <h2>Welcome to Our Team Page</h2>
        </div>
      </div>
      <div className='introduce'>
        <h1><u>"We Will Never Walk Alone"</u></h1>
        <div >
          PBL 과정속에서 하나의 팀이 되어 서로 이끌어주고 <br /> <br />
          나의 생각보다 동료의 생각이 옳을 수 있다는 믿음을 가지고 <br /> <br />
          소통과 배려로 함께 성장하는 팀 
        </div>
      </div>
      <div className='introduce'>
        <h1><u>"3 in 1"</u></h1>
        <div >
          소프트웨어공학과, 컴퓨터공학과, 산업경영공학과로 이루어져 <br /> <br />
          다양한 학과의 시선에서 인사이트를 얻고 새로운 발견이 가능한 팀<br /> <br />
        </div>
      </div>
      <div className='introduce'>
        <h1><u>"Beyond the limitation"</u></h1>
        <div >
            현재에 안주하지 않고 <br /> <br />
            배움을 갈망하는 팀<br /> <br />
        </div>
      </div>
      </div>
    );
}

export default Home;