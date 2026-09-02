
function Footer() {

    return (
        <div className='w-full text-[#F1F0EE] bg-black relative md:px-15 px-5 overflow-hiddenf flex flex-col'>
            <div className="flex sm:items-center items-start h-full w-full justify-between flex-col sm:flex-row">
                <div className="relative md:mt-0 mt-5">
                    <h1
                        style={{ fontFamily: "Saira, sans-serif" }}
                        className="sm:text-[7vw] sm:leading-[7vw] text-[13vw] leading-[13vw] uppercase font-black">Crafted<br />Abubakar</h1>
                    <img className="sm:w-[9vw] sm:opacity-100 opacity-90 w-[17vw] absolute right-7 top-[50%] -translate-y-1/2" src="By.svg" />
                </div>
                <img className="sm:w-[30vw] sm:my-10 my-5 w-[70vw] sm:mx-0 mx-auto object-cover" src="globe.gif" />
            </div>
            <div className="flex sm:items-center flex-wrap md:gap-20 gap-10 text-sm justify-between sm:flex-row flex-col tracking-wide border-t-2 border-white/85 sm:py-5 pt-5">
                <p className="text-2xl sm:mb-0 mb-7">Thanks for scrolling! Stay connected </p>
                <div className="flex gap-20 items-start justify-between w-full">
                    <div className="flex flex-col sm:mb-0 mb-7 text-xs opacity-50">
                        <h3 className="pb-2">abubakarmarri007@gmail.com</h3>
                        <h3 className="pb-2">92+ 3378428820</h3>
                        <h3 className="pb-2">Quetta, Pakistan</h3>
                    </div>
                    <div className="flex flex-col underline text-xs opacity-50">
                        <a className="pb-2" href="#">Instagram</a>
                        <a className="pb-2" href="#">LinkedIn</a>
                        <a className="pb-2" href="#">GitHub</a>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Footer