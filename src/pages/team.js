import './css/team.css';

import pjs from '../images/박재석.jpg'
import pdy from '../images/박도영.jpg'
import skd from '../images/서강덕.jpg'
import ahb from '../images/안해빈.jpg'
import sjw from '../images/서지원.jpg'

const Team = () => {
    return (
        <div className='container'>
            <p className='sub_title1'>팀원</p>

            <div className='card-box'>
                <div className="card-list">
                    <div className="card">
                        <h3>박도영</h3>
                        <h3>PARK DO YOUNG</h3>
                        <img src={pdy} alt="doyoung_img" />
                        <div align="center" className='member-role'>LEADER</div>
                        <p className='member-info'>🧑‍💻 Software Engineering</p>
                        <p>📱 010-6633-3653 </p>
                        <p>📧 doodoo55@gachon.ac.kr </p>
                        <a href='https://github.com/Doyoung-Park' target="_balank">
                            <img id='badge' src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/> 
                        </a>
                    </div>
                    <div className="card">
                        <h3>박재석</h3>
                        <h3>PARK JAE SEOK</h3>
                        <img src={pjs} alt="Placeholder Image" />
                        <div align="center" className='member-role'>MEMEBER</div>
                        <p className='member-info'>🧑‍💻 Software Engineering</p>
                        <p>📱 010-8612-8138 </p>
                        <p>📧 qkrwotjr0@gmail.com</p>
                        <a href='https://github.com/Jedo0224' target="_balank">
                            <img id='badge' src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/> 
                        </a>
                    </div>
                </div>

                <div className="card-list">
                    <div className="card">
                        <h3>서강덕</h3>
                        <h3>SEO KANG DEOK</h3>
                        <img src={skd} alt="Placeholder Image" />
                        <div align="center" className='member-role'>MEMBER</div>
                        <p className='member-info'>🧑‍💻 Computer Engineering</p>
                        <p>📱 010-8731-2312</p>
                        <p>📧 rkdejr2321@naver.com </p>
                        <a href='https://github.com/rkdejr2321' target="_balank">
                            <img id='badge' src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/>
                        </a>
                    </div>

                    <div className="card">
                        <h3>서지원</h3>
                        <h3>SEO JI ONE</h3>
                        <img src={sjw} alt="Placeholder Image" />
                        <div align="center" className='member-role'>MEMBER</div>
                        <p className='member-info'>🧑‍💻 Software Engineering</p>
                        <p>📱 010-4725-8654 </p>
                        <p>📧 jwjw6410@gmail.com </p>
                        <a href='https://github.com/manips1' target="_balank">
                            <img id='badge' src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/> 
                        </a>
                    </div>

                    <div className="card">
                        <h3>안해빈</h3>
                        <h3>AN HAE BIN</h3>
                        <img src={ahb} alt="Placeholder Image" />
                        <div align="center" className='member-role'>MEMBER</div>
                        <p className='member-info'>🧑‍💻 Software Engineering</p>
                        <p>📱 010-9870-3043 </p>
                        <p>📧 gnh06280@naver.com</p>
                        <a href='https://github.com/HaebinAHN ' target="_balank">
                            <img id='badge' src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
