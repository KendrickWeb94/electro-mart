import Navbar from "./Home/components/Navbar"
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('http://localhost:3001/students', {email, password })
            .then(response => {
                console.log('User created:', response.data);
                navigate('/')
            })
            .catch(error => {
                console.error('There was an error creating the user!', error);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="pt-10 w-full mx-auto min-h-[90vh]">
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white border-2 border-d-green shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold mb-6 text-d-green text-center">Login</h2>
                        <div className="mb-4">
                            <label className="block text-d-green font-semibold mb-2" htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                onChange={(e) => setEmail(e.target.value)} 
                                className="w-full px-4 py-2 border-2 border-d-green rounded-md focus:outline-none focus:border-d-green"
                                required 
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-d-green font-semibold mb-2" htmlFor="password">Password:</label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                onChange={(e) => setPassword(e.target.value)} 
                                className="w-full px-4 py-2 border-2 border-d-green rounded-md focus:outline-none focus:border-d-green"
                                required 
                            />
                        </div>
                        <button type="submit" className="w-full bg-d-green text-white py-2 rounded-md font-semibold hover:bg-green-700 transition duration-300">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
