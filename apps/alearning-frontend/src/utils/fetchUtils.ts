interface FetchOption {
    params?: Record<string,string>,
    token?:string,
}


export async function fetchGet(
    url:string,
    options: FetchOption = {},
){  
    const {params, token} = options
    const queryString = new URLSearchParams({...params}).toString()
    const finalURL = queryString ? url + `?${queryString}` : url
    const headers = new Headers()
    
    if(token){
        headers.set("Authorization", `Bearer ${token}`)
    }

    try{
        const response = await fetch(finalURL,{
            headers
        })
        return response
    }catch(e){
        console.log(e)
    }

}

// FIXME
////////////////////////
export async function fetchPost(
    url:string, 
    body: Record<string, string | number | any[]>,
    options: FetchOption = {},
){
    const {token} = options
    const headers = new Headers()

    headers.set('Content-Type',  'application/json') // 1. แปะป้ายบอก Backend ว่านี่คือ JSON นะ
    headers.set('Accept','application/json') // 2. (Optional) บอกว่า Frontend ก็ขอรับคำตอบกลับมาเป็น JSON เหมือนกัน
    
    if(token){
        headers.set("Authorization", `Bearer ${token}`)
    }

    try{ 
        const response = await fetch(url, { 
            method: 'POST', 
            body: body ? JSON.stringify(body) : '',
            headers: headers,
        })
        return response
    }catch(e){ console.log(e) }
}

export async function fetchDel(url:string, options: FetchOption = {},) {
    const {token} = options
    const headers = new Headers()

    if(token){
        headers.set("Authorization", `Bearer ${token}`)
    }
    try{
        const response = await fetch(url, {
            method: "DELETE",
            headers: headers
        })

        return response
    }catch(e){console.log(e)}
}

export async function fetchPut(
    url:string,
    body: Record<string, string | number | any[]>,
    options: FetchOption = {},
){
    const {token} = options
    const headers = new Headers()
    headers.set('Content-Type',  'application/json') 
    headers.set('Accept','application/json')

    if(token){
        headers.set("Authorization", `Bearer ${token}`)
    }

    try{ 
        const response = await fetch(url, { 
            method: 'PUT', 
            body: JSON.stringify(body),
            headers: headers,
        })
        return response
    }catch(e){ console.log(e) }
}
