const PostRequest = (url:string, data:object) => {
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

export const addProposalToDB = async (data: object) => {
    await PostRequest('/proposals-new', data)
}

export const modifyProposalInDB = async (data:object) => {
    await PostRequest('/proposals-modify', data)
}

export const getAllProposalsFromDB = async () => {
    const response = await fetch('/proposals-list', {
        method: 'GET',
        mode: 'cors',
        headers : {Accept: 'application/json'}
    })
    return await response.json()
}
