import { useState, useEffect } from "react";

const useToken = user =>{
    const [token] = useState('');
    useEffect( ()=>{
        const email = user?.user?.email;
        const currentUser = {email: email}; // to create another user
        if(email){
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }
    }, [user])   

    return [token];
}

export default useToken;