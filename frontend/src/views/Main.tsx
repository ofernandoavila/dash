import { useEffect, useState } from "react";

export default function Main() {

    const [message, setMessage] = useState<string>('');
    const [loaded, setLoaded] = useState<boolean>(false);
    
    const fetchAPI = async () => {
        return await fetch('http://localhost:8000/api/connect-test')
                .then(res => res.json())
                .then(data => setMessage(data.message))
                .then(() => setLoaded(true));
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    if(!loaded) {
        return (<></>);
    }

    return (
        <>
            <h1>{ message }</h1>
        </>
    );
}