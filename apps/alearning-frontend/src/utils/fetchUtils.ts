export async function fetchGet(url:string, params?: Record<string,string> | undefined) {
    const token = localStorage.getItem('token');
    let queryString = ''
    if(params) {queryString = new URLSearchParams(params).toString()
    }

    try{
        const response = await fetch(url+"?"+queryString, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response
    } catch(e){
        console.log(e)
    }
}

export async function fetchPost(url:string, body: Record<string, string | number | any[]>){
    const token = localStorage.getItem('token');
    try{ 
        const response = await fetch(url, { 
            method: 'POST', 
            body: JSON.stringify(body),
            headers: {
                // 1. แปะป้ายบอก Backend ว่านี่คือ JSON นะ
                'Content-Type': 'application/json', 
                // 2. (Optional) บอกว่า Frontend ก็ขอรับคำตอบกลับมาเป็น JSON เหมือนกัน
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        return response
    }catch(e){ console.log(e) }
}

export async function fetchDel(url:string) {
    const token = localStorage.getItem('token');
    try{
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return response
    }catch(e){console.log(e)}
}

export async function fetchPut(url:string, body: Record<string, string | number | any[]>){
    const token = localStorage.getItem('token');
    try{ 
        const response = await fetch(url, { 
            method: 'PUT', 
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        return response
    }catch(e){ console.log(e) }
}
