export const allData = async (searchQuery = '', type = '') => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all?search=${searchQuery}&type=${type}`)
    return res.json()
}


export const getPostById = async (userId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/post/${userId}`);
    return await res.json();
};



export const postComment = async (newComment, userId) => {
    const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all/${userId}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newComment)
    });
    return await req.json();
};





export const updateLike = async (id) => {

    const req = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/like/${id}`,
        {
            method: 'PATCH'
        }
    )

    return await req.json()
}



export const updateView = async (id) => {

    const req = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/view/${id}`,
        {
            method: 'PATCH'
        }
    )

    return await req.json()
}





export const newPost = async (newPost) => {
    const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newPost)
    });
    return await req.json();
};





export const getDataByUser = async (authorEmail) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all/${authorEmail}`)
    return res.json()
}