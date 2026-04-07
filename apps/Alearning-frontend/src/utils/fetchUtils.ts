export async function getItems(url:string, params?: Record<string,string> | undefined) {
    let queryString = ''
    if(params) {queryString = new URLSearchParams(params).toString()
    }

    try{
        const response = await fetch(url+"?"+queryString)
        const data = await response.json()
        return data
    } catch(e){
        console.log(e)
    }
}

export async function createItem(url:string, body: Record<string, string | number | any[]>){
    try{ 
        const response = await fetch(url, { 
            method: 'POST', 
            body: JSON.stringify(body),
            headers: {
                // 1. แปะป้ายบอก Backend ว่านี่คือ JSON นะ
                'Content-Type': 'application/json', 
                // 2. (Optional) บอกว่า Frontend ก็ขอรับคำตอบกลับมาเป็น JSON เหมือนกัน
                'Accept': 'application/json' 
            },
        })
        const data = await response.json()
        return data
    }catch(e){ console.log(e) }
}

