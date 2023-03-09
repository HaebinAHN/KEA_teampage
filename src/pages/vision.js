import './css/pages.css';
import vision from '../images/vision.png';
import logo from '../images/team_logo.png';
const Vision = () =>{
    return (
    <div className = 'body'>
    <div>
    <p className='sub_title'>
    비전
    </p>
    <p className = 'vis'>카카오를 위한 99퍼센트의 노력과 1퍼센트의 열정</p>
    </div>
    <div>
    <div className='pp'>저희 그룹이름인 카카오 99퍼센트의 의미는 "카카오 99퍼센트 초콜릿처럼 저희도 카카오와 그만큼 가까워지겠다"는 의미와
        그만큼 이 프로젝트에 열심히 하겠다는 각오를 내포하고 있습니다. <br/> 또한 저희 그룹은 이 프로젝트의 핵심 가치를 열정, 협동, 신뢰로
        정하여 그룹원들이 서로를 도와 각자의 역할을 잘 맡아서 할 수 있도록 하겠습니다.
    </div>
    </div>
    <div>
    <img src={vision} className="visimg" alt="logo"/>
    </div>
    </div>
        
    )
}

export default Vision;
