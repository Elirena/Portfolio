import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './WorkSlide2.css';

class WorkSlide2 extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="slide2 fadeIn0 animated00">
                <div className="info_block slideInUp0 animated0">
                    <div className="back_links">
                        <Link  className="main_link sub_link" to="/" >главная</Link>
                        <Link  className="about_link sub_link" to="/about">инфо</Link>
                    </div>
                    <div className="slide1_content">
                        <div className="slide1_title animated_title slideInDown0">
                            Аква-сити
                        </div>

                        <div className="slide1_subtitle animated_subtitle slideInDown0">
                            промо-сайт <br/>магазина сантехники
                        </div>

                        <div className="slide1_links animated_links slideInDown0">
                            <div className="o-hover__block">
                                <a className="c-btn c-btn--big-line" href="https://github.com/Elirena/baths" target="_blank" data-hover-name="BIG.LINE">
                                    <span className='colorLink'>CODE</span>.link</a>
                            </div>
                            <div className="o-hover__block">
                                <a className="c-btn c-btn--big-line" href="https://elirena.github.io/baths/" target="_blank" data-hover-name="BIG.LINE">
                                    <span className='colorLink'>DEMO</span>.link</a>
                            </div>
                        </div>

                        <div className="slide1_description animated_description slideInDown0">
                            разработка дизайна и перенос верстки на react,
                            получениe данных с сервера добавить инфы
                        </div>

                        <div className="slide1_tech animated_tech slideInDown0">
                            react--redux--сервер
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default WorkSlide2;