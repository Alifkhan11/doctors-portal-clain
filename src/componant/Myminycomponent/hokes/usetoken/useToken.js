import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
<<<<<<< HEAD
<<<<<<< Updated upstream
            fetch(`http://localhost:5000/jwt?email=${email}`)
=======
            fetch(`https://doctors-portal-server-kohl-gamma.vercel.app/jwt?email=${email}`)
>>>>>>> Stashed changes
=======
            fetch(`https://doctors-portal-server-vert-phi.vercel.app/jwt?email=${email}`)
>>>>>>> 1587ee4d5b30c8dcb0aadaa430c65229a54fa274
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