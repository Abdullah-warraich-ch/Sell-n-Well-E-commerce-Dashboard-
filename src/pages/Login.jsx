import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../firebase'

function Login() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        setErrorMsg('')
        setLoading(true)
        const email = e.target.email.value
        const password = e.target.password.value
        try {
            const reponse = await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
            console.log("Login Success", reponse)

        } catch (error) {
            console.log(error)
            setErrorMsg('Password Theek Lga Gando 😠')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-primary'>
            <div className='flex flex-col gap-6 bg-secondary p-6 sm:p-8 md:p-10 justify-center items-center rounded-2xl shadow-xl w-full max-w-md my-8 sm:my-auto border border-border/50'>
                <div className='text-center space-y-2 w-full'>
                    <h1 className='text-3xl font-bold tracking-tight text-primary-text'>Welcome back</h1>
                    <p className='text-sm text-secondary-text'>Enter your credentials to access your account</p>
                </div>

                {errorMsg && (
                    <div className='w-full p-3 text-sm text-danger bg-danger/10 border border-danger/20 rounded-xl text-center animate-in fade-in zoom-in duration-300'>
                        {errorMsg}
                    </div>
                )}

                <form className='flex flex-col gap-5 w-full' onSubmit={handleLogin}>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1.5'>
                            <label htmlFor='email' className='text-sm font-medium text-primary-text ml-1'>Email</label>
                            <input
                                type='email'
                                id='email'
                                required
                                className='p-3 rounded-xl border border-border text-sm font-normal bg-input text-primary-text focus:outline-none focus:ring-2 focus:ring-button/50 focus:border-button transition-all duration-200 w-full'
                                placeholder='name@example.com'
                            />
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <label htmlFor='password' className='text-sm font-medium text-primary-text ml-1'>Password</label>
                            <input
                                type='password'
                                id='password'
                                required
                                className='p-3 rounded-xl border border-border text-sm font-normal bg-input text-primary-text focus:outline-none focus:ring-2 focus:ring-button/50 focus:border-button transition-all duration-200 w-full'
                                placeholder='••••••••'
                            />
                        </div>
                    </div>
                    <button
                        type='submit'
                        disabled={loading}
                        className='mt-2 bg-button text-button-text p-3.5 rounded-xl font-medium hover:bg-button/90 hover:shadow-lg active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed w-full flex justify-center items-center gap-2'
                    >
                        {loading ? (
                            <>
                                <span className="w-5 h-5 border-2 border-button-text/30 border-t-button-text rounded-full animate-spin"></span>
                                Signing in...
                            </>
                        ) : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
