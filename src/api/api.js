const fetchUser = async () =>{
    const response = await fetch('http://localhost:3000/User?_sort=-id');
    const UserData = await response.json();
    return UserData;
}

const fetchPost = async () =>{
    const response = await fetch('http://localhost:3000/Posts');
    const postsData = await response.json();
    return postsData;
}

export{fetchPost,fetchUser};