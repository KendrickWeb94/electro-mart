import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from "../components/ui/Navbar";

const SignUp = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null); // State for error handling
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:3001/pages/SignUp', { name, email, password });
            console.log('User created:', response.data);
            navigate('/pages/Login');
        } catch (error) {
            console.error('Error creating user:', error);
            setError("There was an error creating the user.");
        }
    };

    return (
        <div>
         <Navbar />
            <div className="pt-10 w-full mx-auto min-h-[90vh]">
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white border-2 border-d-green shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold mb-6 text-d-green text-center">Sign Up</h2>
                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                        <div className="mb-4">
                            <label className="block text-d-green font-semibold mb-2" htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                autoComplete="on" 
                                placeholder="Enter Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                                className="w-full px-4 py-2 border-2 border-d-green rounded-md focus:outline-none focus:border-d-green"
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-d-green font-semibold mb-2" htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                value={email}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                className="w-full px-4 py-2 border-2 border-d-green rounded-md focus:outline-none focus:border-d-green"
                                required 
                            />
                        </div>
                        <button type="submit" className="w-full bg-d-green text-white py-2 rounded-md font-semibold hover:bg-green-700 transition duration-300">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
