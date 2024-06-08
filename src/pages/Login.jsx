import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUnlockKeyhole, FaAt, FaEye, FaEyeSlash, FaRightToBracket, FaGoogle } from 'react-icons/fa6';

const Login = () => {
    const { user, login } = useAuth();
    const navigate = useNavigate();

    const [isShown, setIsShown] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const togglePassword = () => {
        setIsShown((isShown) => !isShown)
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
        }),
        onSubmit: async (values) => {
            
            setIsLoading(true);

            try {
                setIsLoading(true);
                const response = await axios.post('http://localhost:5000/auth/login', values);
                setTimeout(() => {
                    login(response.data)
                    setIsLoading(false)
                    navigate(`/user/dashboard`)
                }, 3000)
                
            } catch (error) {
                console.error('Login error:', error);

                setTimeout(() => {
                    toast.error('Invalid email or password', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    setIsLoading(false)
                }, 3000)
            }
            
            // Dummy login logic for development
            /* if (values.email === 'me@mail.com' && values.password === 'me123456') {
                const data = { name: 'Me', email: 'me@mail.com' };
                setTimeout(() => {
                    login(data);
                    setIsLoading(false);
                    navigate(`/user/dashboard`);
                }, 3000);
            } else {
                setTimeout(() => {
                    toast.error('Invalid email or password', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    setIsLoading(false);
                }, 3000);
            } */

        }
    })

    document.title = 'AY Control Panels | Login';

    if (user) {
        navigate('/user/dashboard');
    }

    return (
        <div className="outer-app-container">
            <img src="/logo.png" alt="logo image" />
            <div className="outer-app-box">
                <div className="outer-app-box-header">
                    <h1>Login</h1>
                </div>

                <div className="outer-app-box-body">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="custom-group">
                            <span><FaAt /></span>
                            <input
                                className="field"
                                id="email"
                                name="email"
                                value={formik.values.email} 
                                onChange={formik.handleChange} 
                                placeholder="Enter your email"
                            />
                        </div>
                        {formik.errors.email ? <p>{formik.errors.email}</p> : null}
                    
                        <div className="custom-group">
                            <span><FaUnlockKeyhole /></span>
                            <input
                                className="field"
                                type={isShown ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={formik.values.password} 
                                onChange={formik.handleChange}
                                placeholder="Enter your password"
                            />
                            <a onClick={togglePassword}>{isShown ? <FaEyeSlash title="Toggle to hide password" /> : <FaEye title="Toggle to show password" />}</a>
                        </div>
                        {formik.errors.password ? <p>{formik.errors.password}</p> : null}
                        
                        <button type="submit" className="custom-button" disabled={isLoading}>
                            {
                                isLoading ? 
                                <>Please Wait... <div className="loader"></div></> 
                                : <>Login <span><FaRightToBracket /></span></>
                            }
                        </button>

                        <div className="customer">
                            <h4>Are you a new client? <Link className="link" to="/signup">Sign up</Link></h4>
                        </div>
                    </form>
                </div>

                <div className="outer-app-box-footer">
                    <p>
                        If you are having trouble logging in, please contact the {' '}
                        <Link className="link" to="/support">Support</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;