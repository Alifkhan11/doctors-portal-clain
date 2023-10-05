import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
<<<<<<< Updated upstream
            fetch(`http://localhost:5000/jwt?email=${email}`)
=======
            fetch(`https://doctors-portal-server-kohl-gamma.vercel.app/jwt?email=${email}`)
>>>>>>> Stashed changes
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken);
                        setToken(data.accessToken);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default useToken;