import React from "react";
import corner from "../../assets/corner.png";
import '../../components/UI/scss/pages/login.scss';
import WhiteTile from "../../components/UI/components/WhiteTile";
import PrimaryButton from "../../components/UI/components//Buttons/PrimaryButton";
import SecondaryButton from "../../components/UI/components/Buttons/SecondaryButton";

const Login = (props) => {
    return (
        <div className="background-primary"> 
            <div className="right-corner"> 
                <img className="cornor-img" src={corner} alt="Icon" height={80} width={120} />
            </div>
            <WhiteTile>
                <h1>Login</h1>
                <PrimaryButton>
                    Email..
                </PrimaryButton>
                <PrimaryButton>
                    Passwort...
                </PrimaryButton>
                <p>Passwort vergessen</p>
                <SecondaryButton>
                    Anmelden
                </SecondaryButton>
            </WhiteTile>
           
        </div>
    );
}

export default Login;