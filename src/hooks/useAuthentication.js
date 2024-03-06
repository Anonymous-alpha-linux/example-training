import { useEffect, useState } from "react";

function useAuthentication() {
    const [userNameInput, setUserNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const [hasLoggedBefore, setHasLoggedBefore] = useState(false);

    useEffect(() => {
        setHasLoggedBefore(JSON.parse(!!localStorage.getItem("isLogged")));
    }, []);

    return {
        userNameInput,
        setUserNameInput,
        passwordInput,
        setPasswordInput,
        hasLoggedBefore,
    };
}

export default useAuthentication;
