import {useState} from "react";

const useSignUpModal = () => {
    const [showModal, setShowModal] = useState(false)
    const [username, setUsername] = useState("")
    const [personalInformationConsent, setPersonalInformationConsent] = useState(false)
    const [termsofUse, setTermsofUse] = useState(false)
    // 이용 약관

    return {
        showModal,
        setShowModal,
        username,
        setUsername,
        personalInformationConsent,
        setPersonalInformationConsent,
        termsofUse,
        setTermsofUse
    };
}

export default useSignUpModal;