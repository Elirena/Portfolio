import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import EducationBlock from "../../components/EducationBlock/EducationBlock";
import ExperienceBlock from "../../components/ExperienceBlock/ExperienceBlock";
import SkillsBlock from "../../components/SkillsBlock/SkillsBlock";
import ContactsBlock from "../../components/ContactsBlock/ContactsBlock";

import './AboutPage.css';

class AboutPage extends Component {

    render() {
        return (
            <div className="fon">
                <div className="sub_menu about_menu container">
                    <Link  className="sub_link main_link" to="/" >главная</Link>
                    <Link  className="sub_link port_link" to="/portfolio">портфолио</Link>
                </div>
                    <EducationBlock/>
                    <ExperienceBlock/>
                    <SkillsBlock/>
                    <ContactsBlock/>
            </div>
        );
    }
}

export default AboutPage;




