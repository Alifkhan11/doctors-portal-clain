import {  useEffect, useState } from "react"

const useAdmin=email=>{
    // const {user}=useContext(AuthContex)
    const [isAdmin,setisAdmin]=useState(false)
    const [isadminloding,setisadminlogin]=useState(true)
    useEffect(()=>{

      if(email){
<<<<<<< Updated upstream
        fetch(`http://localhost:5000/users/admin/${email}`)
=======
        fetch(`https://doctors-portal-server-kohl-gamma.vercel.app/users/admin/${email}`)
>>>>>>> Stashed changes
        .then(res=>res.json())
        .then(data=>{
            setisAdmin(data.isAdmin)
            setisadminlogin(false)
            // console.log(data);
        })
      }
    },[email])
    return [isAdmin,isadminloding]
}

export default useAdmin