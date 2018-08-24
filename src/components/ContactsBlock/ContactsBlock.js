import React, {Component} from 'react';

/**
 * Блоск с контактами
 */

class ContactsBlock extends Component {

    render() {
        return (
            <div className="contacts_block container">
                    <div className="row text">
                        <div className="col-5 feedback-links">
                            <div className="contacts-info">
                                <div className="contacts">EMAIL: Elirena@mail.ru</div>
                                <div className="contacts">phone: +7(904-3378230)</div>
                                <a className="contacts" href="/denisova_frontend.doc" download="">скачать резюме</a><br/>

                                <span id="email">
                                    <a href="https://github.com/Elirena" target="_blank" rel="noopener noreferrer">
                                      <p>github.com/Elirena</p>
                                      <span className="cursor">|</span>
                                      <span className="button1">GitHub</span>
                                    </a>
                                </span>
                            </div>
                        </div>

                        <div className="col-5 feedback">
                            <form>
                                <p className="contacts-tit">Написать сообщение</p>
                                <input name="name" type="text" className="feedback-input" placeholder="Name" />
                                <input name="email" type="text" className="feedback-input" placeholder="Email" />
                                <textarea name="text" className="feedback-input" placeholder="Comment"/>
                                <div className="button"><span>отправить</span></div>
                            </form>
                        </div>
                    </div>
            </div>
        );
    }
}

export default ContactsBlock;