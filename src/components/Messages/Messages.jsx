import React from "react";
import s from './Messages.module.css';
import Message from './Message/Message';
import DialogsItem from "./DialogsItem/DialogsItem";

const Messages = (props) => {

    let dialogsElements = props.messagesPage.dialogs.map(dialog => <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id} />);
    let messagesElements = props.messagesPage.messages.map(message => <Message key={message.id} message={message.message} />);

    return (
        <div className={s.messages_page_wrapper}>
            <div className={s.dialogs}>
                <ul className={s.dialogs__list}>
                    {dialogsElements}
                </ul>
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Messages