import React, {Component} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Link } from 'react-router-dom';
import 'react-vertical-timeline-component/style.min.css';
import icon1 from './img/exp_icon.png';

import './ExperienceBlock.css';

class ExperienceBlock extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="experience_block container back">
                <div className=" col-12">
                    <span className="about_title">
                        <img src={icon1} alt="kartinka" height="35px"/>Опыт
                    </span>
                </div>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2018"
                        iconStyle={{ background: '#fcdb74', color: '#fff' }}
                        // icon={}
                    >
                        <h3 className="vertical-timeline-element-title">React-разработчик</h3>
                        <h4 className="vertical-timeline-element-subtitle">Фриланс</h4>
                        <p>
                            Разработка клиентской части веб-приложений с помощью React js.
                            <Link  className="" to="/portfolio">портфолио</Link>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2017"
                        iconStyle={{ background: '#fcdb74', color: '#fff' }}
                        // icon={}
                    >
                        <h3 className="vertical-timeline-element-title">React-разработка</h3>
                        <h4 className="vertical-timeline-element-subtitle">Доп. образование</h4>
                        <p>
                           Повышение квалификации, прохождение курсов по разработке
                            клиентской части приложений с помощью React js.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2017"
                        iconStyle={{ background: '#fcdb74', color: '#fff' }}
                        // icon={}
                    >
                        <h3 className="vertical-timeline-element-title">Frontend разработчик</h3>
                        <h4 className="vertical-timeline-element-subtitle">"Umka Mall"</h4>
                        <p>
                            Верстка страниц, доработка на JavaScript функционала клиентской части,
                            разработка мобильной версии интернет-магазина
                           <a href="https://umkamall.ru/" target="_blank"> umkamall.ru</a>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2016"
                        iconStyle={{ background: '#fcdb74', color: '#fff' }}
                        // icon={}
                    >
                        <h3 className="vertical-timeline-element-title">JavaScript веб-разработчик</h3>
                        <h4 className="vertical-timeline-element-subtitle">Фриланс</h4>
                        <p>
                           Проектироваание и разработка клиентсткой части веб-приложений на JS.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2016"
                        iconStyle={{ background: '#fcdb74', color: '#fff' }}
                        // icon={}
                    >
                        <h3 className="vertical-timeline-element-title">JavaScript разработка</h3>
                        <h4 className="vertical-timeline-element-subtitle">Доп. образование</h4>
                        <p>
                            Повышение квалификации, прохождение курсов по программированию на JS.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2014-2015"
                        iconStyle={{ background: '#fcdb74', color: '#fff' }}
                        // icon={}
                    >
                        <h3 className="vertical-timeline-element-title">Flash-дизайнер</h3>
                        <h4 className="vertical-timeline-element-subtitle">"МЭЛМАРТ"</h4>
                        <p>
                            Action Script разработка, проектирование,
                            дизайн и реализация мультимедийных систем.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2014"
                        iconStyle={{ background: '#fcdb74', color: '#fff' }}
                        // icon={}
                    >
                        <h3 className="vertical-timeline-element-title">Информатик-дизайнер</h3>
                        <h4 className="vertical-timeline-element-subtitle">Получение ВО</h4>
                        <p>
                            Выпуск из университета СПбГУКИ.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2013"
                        iconStyle={{ background: '#fcdb74', color: '#fcdb74' }}
                        // icon={}
                    >
                        <h3 className="vertical-timeline-element-title">Web-разработка</h3>
                        <h4 className="vertical-timeline-element-subtitle">Фриланс</h4>
                        <p>
                            Дизайн и верстка небольших интернет сайтов и лендингов средней сложности.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>

            </div>
        );
    }
}

export default ExperienceBlock;