import LoginForm from "./Login"
import SignupForm from "./Signup"

interface IProps{
    pathUrl:string
}

const Auth = ({pathUrl}:IProps) => {
    return (
        <div className="bg-[url('/star-bg.png')] bg-cover bg-center h-screen flex justify-center items-center">
            {pathUrl === 'login' && <LoginForm/> }
            {pathUrl === 'signup' && <SignupForm/>}
        </div>
    )
}
export default Auth