import {useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const ReadMessage = () => {
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {urlSuffix} = useParams()


    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        setMessage('')
        axios.post('http://localhost:5000/api/read', {urlSuffix, password}).then(res => {
            if(res.data.error) {
                setError(res.data.error)
            }
            else {
                setMessage(res.data.message)
            }

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
                    {message && <h1 className="form_auth_block_head_text">Расшифрованное сообщение: {message}</h1>}
                    {error && <h1 className="form_auth_block_head_text">Ошибка: {error}</h1>}
                </form>
            </div>
        </div>

    )
}

export default ReadMessage;