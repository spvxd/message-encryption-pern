import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const ReadMessage = () => {
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const {urlSuffix} = useParams()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/read', {urlSuffix, password}).then(res => {
            console.log(res.data.url)
            // setUrl(res.data.url)
        })
    }
    return (
        <div className="form_auth_block">
            <div className="form_auth_block_content">
                <p className="form_auth_block_head_text">Прочитать сообщение</p>
                <form className="form_auth_style" onSubmit={handleSubmit}>
                    <label>Введите Ваш пароль</label>
                    <input type="password" name="auth_pass" placeholder="Введите пароль" required onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                    <button className="form_auth_button" type="submit" name="form_auth_submit">Расшифровать</button>

                </form>
            </div>
        </div>

    )
}

export default ReadMessage;