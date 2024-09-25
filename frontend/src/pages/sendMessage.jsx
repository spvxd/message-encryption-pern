import React, {useState} from 'react';
import axios from 'axios';

const SendMessage = () => {
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/send', {message, password}).then(res => {
            console.log(res.data.url)
            setUrl(res.data.url)
        })
    }
    return (
        <div className="form_auth_block">
            <div className="form_auth_block_content">
                <p className="form_auth_block_head_text">Зашифровать сообщение</p>
                <form className="form_auth_style"  onSubmit={handleSubmit}>
                    <label>Введите ваше сообщение</label>
                    <input type="text" name="auth_email" placeholder="Сообщение" required onChange={(e) => {
                        setMessage(e.target.value)
                    }}/>
                    <label>Введите Ваш пароль</label>
                    <input type="password" name="auth_pass" placeholder="Введите пароль" required onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                    <button className="form_auth_button" type="submit" name="form_auth_submit">Зашифровать</button>
                    {url && <h1 className="form_auth_block_head_text">Уникальный URL: {url}</h1>}
                </form>
            </div>
        </div>

    )
}

export default SendMessage;