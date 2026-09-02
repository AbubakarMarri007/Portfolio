import { useEffect, useState } from "react";

const Loader = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const imageUrls = [
            "/images/hero.jpg",
            "/images/bg.png",
            "/svgs/logo.svg",
            "/svgs/icon1.svg",

        ];

        let loadedCount = 0;
        const totalImages = imageUrls.length;

        imageUrls.forEach((url) => {
            const img = new Image();
            img.src = url;
            img.onload = handleLoad;
            img.onerror = handleLoad;
        });

        function handleLoad() {
            loadedCount++;
            if (loadedCount === totalImages) {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            }
        }
    }, []);

    if (isLoading) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-black text-white">
                <h1 className="text-3xl animate-pulse">Loading...</h1>
            </div>
        );
    }

    return children;
};

export default Loader;
