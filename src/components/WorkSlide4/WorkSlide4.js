import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './WorkSlide4.css';
import SlideArrowBtn from "../SlideArrowBtn/SlideArrowBtn";

class WorkSlide4 extends Component {

    render() {
        const {slideFn}= this.props;
        return (
            <div className="slide4 fadeIn0 animated00">
                <div className="info_block slideInUp0 animated0">
                    <div className="back_links">
                        <Link  className="main_link sub_link" to="/" >главная</Link>
                        <Link  className="about_link sub_link" to="/about">инфо</Link>
                    </div>
                    <div className="media-view"/>
                    <div className="slide1_content">
                        <div className="slide1_title animated_title slideInDown0">
                            Yoga
                        </div>

                        <div className="slide1_subtitle animated_subtitle slideInDown0">
                            Мобильное приложение
                        </div>

                        <div className="slide1_links animated_links slideInDown0">
                            <div className="o-hover__block">
                                <a className="c-btn c-btn--big-line" href="https://elirena.github.io/yoga/"
                                   target="_blank" rel="noopener noreferrer" data-hover-name="BIG.LINE">
                                    <span className='colorLink'>DEMO</span>.link</a>
                            </div>
                        </div>

                        <div className="slide1_description animated_description slideInDown0">
                            разработка дизайна и структуры <br/>мобильного
                            приложения для йога-сообщества, <br/>
                            поиск и создание графического контента
                        </div>
                        <div className="arrow-nav">

                            <SlideArrowBtn
                                direction="arrow-btn prew"
                                callFn={slideFn.bind(this,0)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkSlide4;