import './css/pages.css';

import pjs from './박재석.png'
import pdy from './박도영.png'
import skd from './서강덕.png'
import ahb from './안해빈.jpg'
import sjw from './서지원.jpg'

const Team = () =>{
    return (
        <div>
            <h2>Team members' info.</h2>
            <table align="center">

                <thead align="center">
                    <tr>
                        <th width="300">Image</th>
                        <th width="100">Name</th>
                        <th width="300">Department</th>
                        <th width="300">Email</th>
                        <th width="300">Phone</th>
                        <th width="300">Github</th>
                    </tr>
                </thead>
                <tbody align="center">
                    <tr>
                        <td><img src={pdy} alt="박도영" /></td>
                        <td>박도영</td>
                        <td>AI·소프트웨어학부(소프트웨어전공)</td>
                        <td>doodoo55@gachon.ac.kr</td>
                        <td>010-6633-3653</td>
                        <td>https://github.com/Doyoung-Park</td>
                    </tr>
                    <tr>
                        <td><img src={pjs} alt="박재석" /></td>
                        <td>박재석</td>
                        <td>산업경영공학과</td>
                        <td>qkrwotjr0@gmail.com</td>
                        <td>010-8612-8138</td>
                        <td>https://github.com/Jedo0224</td>
                    </tr>
                    <tr>
                        <td><img src={skd} alt="서강덕" /></td>
                        <td>서강덕</td>
                        <td>컴퓨터공학과</td>
                        <td>rkdejr2321@naver.com</td>
                        <td>010-8731-2312</td>
                        <td>https://github.com/rkdejr2321</td>
                    </tr>
                    <tr>
                        <td><img src={sjw} alt="서지원" /></td>
                        <td>서지원</td>
                        <td>AI·소프트웨어학부(소프트웨어전공)</td>
                        <td>jwjw6410@gmail.com</td>
                        <td>010-4725-8654</td>
                        <td>https://github.com/manips1</td>
                    </tr>
                    <tr>
                        <td><img src={ahb} alt="안해빈" /></td>
                        <td>안해빈</td>
                        <td>AI·소프트웨어학부(소프트웨어전공)</td>
                        <td>gnh06280@naver.com</td>
                        <td>010-9870-3043</td>
                        <td>https://github.com/HaebinAHN</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Team;
