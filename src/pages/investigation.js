import React from 'react';
import './css/home.css'
import logo from '../images/team_logo.png';
import catchphrase from '../images/catchphrase.png'

const Investigation = () => {
  return (
    <div>
      <div className='background'>
        <div className='kea'>
          <h1>CONNECT.</h1>
          <h1>SOLVE.</h1>
          <h1>CREATE.</h1>
        </div>



        <div className='main'>
          <img src={logo} alt="taem_logo" />
        </div>
      </div>

      <div className='card-list'>
        <div className="home-card">
        <img src={catchphrase} alt="catchpharse"/>
          <div className='home-card-text'>
            <h1 align="center">"Never Walk Alone"</h1>
            <p> 우리는 혼자 가지 않습니다.</p> <br/>
            <p> 혼자 가면 빨리 가지만, 같이 가면 멀리 갑니다. <br/>
              우리는 항상 동료들이 더 뛰어나다는 믿음을 가지고 <br/>
              팀 구성원 개개인이 가진 강점, 경험을 공유해 <br/>
              어려운 과정속에서 신뢰와 존중을 바탕으로 한 발자국씩 <br/>
               나아가 문제를 해결하고 궁극적인 목표를 향해 달려갑니다.</p>
          </div>
        </div>    
      </div>
    
    </div>
  );
}

export default Investigation;