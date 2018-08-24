import React, {Component} from 'react';
import './SlideArrowBtn.css';

/**
 * Кнопка навигации по слайдам
 */

class SlideArrowBtn extends Component {

    render() {
        const {
            direction,
            callFn,
        } = this.props;

        return (
            <div className={direction}
                onClick={callFn}
            >
                стрелочка
            </div>
        );
    }
}

export default SlideArrowBtn;