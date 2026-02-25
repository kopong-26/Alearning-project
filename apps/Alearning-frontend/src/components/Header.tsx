import { BaseButton } from "./BaseButton"

export function Header(){
    return (
        <header className="flex items-center justify-between min-h-[64px] px-4 py-4 border-b  border-main-contrast gap-2 flex-nowrap ">
            <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md text-grey-600 shrink-0 hover:bg-gray-50 cursor-pointer">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-4"
                >
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                />
                </svg>
            </button>
            <img src="/logo.jpg" alt="logo" width="773" height="752" className="w-8 h-8 shrink-0" />
            <div className="grow shrink flex gap-2 justify-between">
                <h1 className="hidden sm:block font-sans text-xl font-semibold cursor-pointer">
                    Alearning
                </h1>
                <input type="text" className="border border-main-contrast rounded-md grow shrink max-w-md 
                px-3 py-1.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer" />
            </div>           
            <BaseButton>Sign in</BaseButton>
        </header>
    )
}