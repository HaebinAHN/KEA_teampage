import './css/pages.css';
import vision from '../images/vision.png';
import logo from '../images/team_logo.png';
const Vision = () => {
    return (
        <div className='body'>
            <div>
                <p className='sub_title'>
                    비전
                </p>
                <p className='vis'>"Be an Architect"</p>
            </div>
            <div>
                <div className='pp'> 카카오SW아카데미를 통해 코딩만 하는 코더가 아닌 소프트웨어의 기획, 설계, 관리, 감독 역량을 갖춘 아키텍트가 되는 것을 목표로 합니다.
                </div>
            </div>
            <div className='introduce'>
                <h2>3 in 1</h2>
                <div >
                    소프트웨어공학과, 컴퓨터공학과, 산업경영공학과로 이루어져 <br />
                    다양한 학과의 시선에서 인사이트를 얻고 새로운 발견이 가능한 팀<br />
                </div>
            </div>
            <div className='introduce'>
                <h2>Beyond the limitation</h2>
                <div >
                    현재에 안주하지 않고 <br />
                    배움을 갈망하는 팀<br />
                </div>
            </div>
            <div>
                <img src={vision} className="visimg" alt="logo"/>
            </div>
        </div>

    )
}

export default Vision;
