import { Fragment, useState } from "react"

interface ActionIconProps{
    items: Item[]
}

interface Item{
    label: string
    key: string
    action: ()=>void
}

export function ActionIcon({items}: ActionIconProps){
    const [isClick, setIsClick] = useState(false)

    return (
        <div className="relative">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="size-6 cursor-pointer"
                onClick={()=> setIsClick(!isClick)}
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" 
                />
            </svg>
            {isClick && (
                <div className="absolute top-full right-0 border border-main-contrast bg-white
                rounded-sm shadow-md shadow-main-contrast w-30"> 
                    <ul>
                        { items.map((item)=> (
                                <Fragment key={item.key}>
                                    <li> 
                                        <button 
                                            onClick={item.action}
                                            className="w-full text-left cursor-pointer px-4 py-1.5"
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                </Fragment>
                        ))}
                    </ul>
                </div>
            )}
        
        </div>
    )
}