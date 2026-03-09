async function getItems(url:string) {
    try{
        const data = await fetch(url)
        const item = await data.json()
        return item
    } catch(e){
        console.log(e)
    }
}

export {getItems}