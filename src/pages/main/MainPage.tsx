import {GoogleOneTapLogin} from "../../components/auth/GoogleOneTapLogin";
import useSignUpModal from "../../hooks/useSignUpModal"
import OauthSignupModal from "../../components/auth/OauthSignupModal";


const MainPage = () => {

    const {showModal} = useSignUpModal()
    return (
        <>

            <div>
                {showModal && <OauthSignupModal/>}
                <GoogleOneTapLogin/>
            </div>
        </>
    )
}

export default MainPage