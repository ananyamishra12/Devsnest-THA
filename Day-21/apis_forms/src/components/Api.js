import { useEffect, useState } from "react";

const Api = () => {
    const [post, setPost]= useState([]);
    useEffect(()=>{
        fetchItems();
    }, [])
    const fetchItems = async() =>{
        const data= await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts= await data.json();
        console.log(posts);
        setPost(posts);
    }
    return <div>
        <h1>API DATA</h1>
        <div>
            {
                post.map((item, index) => 
                (<div key={index}>
                    {item.id}
                </div>)
            )
            }
        </div>
    </div>
}

export default Api;