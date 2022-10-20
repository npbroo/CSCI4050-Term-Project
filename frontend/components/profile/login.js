import { useContext } from "react";

export const Login = () => {


    const loginUser = async (event) => {
        event.preventDefault(); // prevent refresh on submit
        let user = event.target.email.value
        let pass = event.target.password.value  
        console.log({user, pass})
    }

    return (
        <>
        <h1 className="font-bold mb-4">
            Login to your account
        </h1>
        <form className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mx-auto mb-4 max-w-screen-sm" onSubmit={loginUser}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">E-mail</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" name="email" placeholder="E-Mail" required/>
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                <input className="shadow appearance-none border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" name="password" placeholder="Password" required />
            </div>

            <div className="flex items-center justify-start">
                <button className="w-1/4 mr-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Log In</button>
                <a className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800" href="#">Forgot Password?</a>
            </div>
        </form>
        </>
    );
}