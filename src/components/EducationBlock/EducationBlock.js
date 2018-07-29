import React, {Component} from 'react';
import icon1 from './img/edu_icon.png';
class EducationBlock extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="education  container back">
                <div className=" col-12">
                    <span className="about_title">
                      <img src={icon1} alt="kartinka" height="35px"/> Образование
                    </span>
                </div>

                <div className="col-12 education_block text">

                    <div className='educ_block educ_black animated1 slideInRight1'>
                        <div className="education_text">
                            САНКТ-ПЕТЕРБУРГСКИЙ <br/>ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ <br/> КУЛЬТУРЫ И ИСКУССТВ<br/>
                            <div className='col_grey'>Факультет:</div>
                            Информационных технологий<br/>
                            <div className="col_grey">Кафедра:</div>
                            Информационных технологий и медиадизайна<br/>
                            <div className="col_grey">Специальность:</div>
                            Информатик-дизайнер<br/>
                            <div className="col_grey">Дата выпуска:</div>
                             2014г
                        </div>
                    </div>

                    <div className='educ_block educ_yell animated2 slideInRight1 '>
                        <div  className="education_text">
                            ДОПОЛНИТЕЛЬНОЕ ОБРАЗОВАНИЕ <br/>
                            ПОВЫШЕНИЕ КВАЛИФИКАЦИИ
                            <div className="col_grey">HTML Academy:</div>
                            -онлайн‑курсы HTML и CSS<br/>
                            <div className='col_grey'>Национальный Открытый<br/> Университет ИНТУИТ:</div>
                            -практикум по программированию <br/> на JavaScript<br/>
                            -разработка клиентских приложений <br/>Web-сайтов<br/>
                            <div className="col_grey">Центр IT-Образования Level UP:</div>
                            -web-разработчик (react-redux)
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EducationBlock;