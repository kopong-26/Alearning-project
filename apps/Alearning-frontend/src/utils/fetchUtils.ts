async function getItems(url:string, params?: Record<string,string> | undefined) {
    let queryString = ''
    if(params) {queryString = new URLSearchParams(params).toString()
    }

    try{
        const data = await fetch(url+"?"+queryString)
        const item = await data.json()
        return item
    } catch(e){
        console.log(e)
    }
}

export {getItems}