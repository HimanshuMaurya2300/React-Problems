import React, { useState } from 'react'

const LoginandRegistration = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegister, setIsRegister] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const [users, setUsers] = useState([])


    const handleSubmit = (e) => {
        if (isRegister) {
            const user = users.find(user => {
                return user.email === email && user.password === password
            })

            if (user) {
                setIsLogin(true)
            }
            else {
                alert('User not found')
            }
        }
        else {
            const newUser = {
                email,
                password
            }
            setUsers([...users, newUser])
            localStorage.setItem('users', JSON.stringify([...users, newUser]))
            setIsLogin(true)
        }
    }

    const handleLogout = () => {
        setIsLogin(false)
        setEmail('')
        setPassword('')
    }

    return (
        <div>
            {
                isLogin ? (
                    <div>
                        <h2>Weclome, {email}</h2>
                        <button
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div>
                        <h2>{isRegister ? 'Login' : 'Register'}</h2>
                        <form>
                            <input
                                type="email"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button onClick={handleSubmit}>
                                {isRegister ? 'Login' : 'Register'}
                            </button>
                        </form>

                        <p>
                            {isRegister ? 'Already have an account? Login' : 'Don\'t have an account? Register'}
                        </p>
                        <button
                            onClick={() => setIsRegister(!isRegister)}
                        >
                            {isRegister ? 'Register' : 'Login'}
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default LoginandRegistration