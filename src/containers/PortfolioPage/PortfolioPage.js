import React, {Component} from 'react';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import WorkSlide1 from "../../components/WorkSlide1/WorkSlide1";
import WorkSlide2 from "../../components/WorkSlide2/WorkSlide2";
import WorkSlide3 from "../../components/WorkSlide3/WorkSlide3";
import WorkSlide4 from "../../components/WorkSlide4/WorkSlide4";
import './PortfolioPage.css';

const fullPageOptions = {
    scrollSensitivity: 7,
    touchSensitivity: 7,
    scrollSpeed: 500,
    hideScrollBars: true,
    enableArrowKeys: true
};

const horizontalSliderProps = {
    name: 'horizontalSlider1', // name is required
    infinite: true, // enable infinite scrolling
    hideScrollBars: true,
};

const horizontalSlides = [
    <Slide> <WorkSlide1/> </Slide>,
    <Slide> <WorkSlide2/> </Slide>,
    <Slide> <WorkSlide3/> </Slide>,
    <Slide> <WorkSlide4/> </Slide>,
];
horizontalSliderProps.slides = horizontalSlides;

fullPageOptions.slides = [ <HorizontalSlider {...horizontalSliderProps}/>];


class PortfolioPage extends Component {

    componentWillUnmount() {
        const { document } = global;
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
    }

    render() {
        return (
            <div className="">
                <Fullpage {...fullPageOptions} />
            </div>
        );
    }
}

export default PortfolioPage;





