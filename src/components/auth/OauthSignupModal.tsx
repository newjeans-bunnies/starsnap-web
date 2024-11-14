import customAxios from "../../lib/axios/CustomAxios";
import useSignUpModal from "../../hooks/useSignUpModal"

const OauthSignupModal = () => {

    const { setShowModal } = useSignUpModal()
    return (
        <>
            <div>
                <h1>Hello</h1>
            </div>
        </>
    )
}



export default OauthSignupModal
