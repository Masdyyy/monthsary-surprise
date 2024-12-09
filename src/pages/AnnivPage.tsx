import AudioPlayer from "@/components/Audio";
import MouseImageTrail from "@/components/MouseImageTrail";
import { useEffect, useState } from "react";
import { HeartSpinner } from "react-spinners-kit";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const AnnivPage = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // PLACE YOUR IMAGES HERE
    const imageUrls = [
        'https://images.unsplash.com/photo-1504194569341-48a2e831a3a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1429080355161-3c071e2e27a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TG92ZXxlbnwwfDB8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1461009209120-103a8f970745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1504122398460-c635d6377010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1496429946712-acb085074b51?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1675302630215-ab15df32601b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ]

    const preloadImages = (urls: any) => {
        return Promise.all(
            urls.map((url: any) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = url;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            })
        );
    };

    useEffect(() => {
        preloadImages(imageUrls)
            .then(() => setImagesLoaded(true))
            .catch((error) => console.error("Error preloading images:", error));
    }, []);

    // USED FOR PRELOADING IMAGES
    // if (imagesLoaded) {
    //     return (
    //         <div className="grid place-items-center h-screen w-full place-content-center bg-white">
    //             <HeartSpinner color="#FF0000" />
    //             <p>Loading images...</p>
    //         </div>
    //     );
    // }

    return (
        <section className="grid grid-cols-12 divide-x-2 space-x-4">
            <div className="col-span-9">
                <MouseImageTrail
                    renderImageBuffer={60}
                    rotationRange={25}
                    images={imageUrls}
                >
                    <section className="grid h-screen w-full place-content-center bg-white">
                        <p className="flex flex-col items-center gap-2 text-3xl font-bold uppercase text-black">
                            <span className="grid place-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M17.303 5.197A7.5 7.5 0 0 0 6.697 15.803a.75.75 0 0 1-1.061 1.061A9 9 0 1 1 21 10.5a.75.75 0 0 1-1.5 0c0-1.92-.732-3.839-2.197-5.303Zm-2.121 2.121a4.5 4.5 0 0 0-6.364 6.364.75.75 0 1 1-1.06 1.06A6 6 0 1 1 18 10.5a.75.75 0 0 1-1.5 0c0-1.153-.44-2.303-1.318-3.182Zm-3.634 1.314a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68Z" clipRule="evenodd" />
                                </svg>
                                Hover your mouse</span>
                            <span className="text-sm font-normal text-center text-gray-600">
                                USE YOUR LAPTOP OR DESKTOP FOR BETTER EXPERIENCE
                            </span>
                        </p>
                    </section>
                </MouseImageTrail>
            </div>
            <div className="col-span-3 p-4 bg-rose-950">
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle>Title</CardTitle>
                        <CardDescription>Artist</CardDescription>
                    </CardHeader>
                    {/* PLACE YOUR AUDIO LINK HERE */}
                    <CardContent>
                        <AudioPlayer src='link'></AudioPlayer>
                    </CardContent>
                </Card>
                <div className="text-pretty p-3 h-max flex justify-center items-center text-white">
                    <div className="grid place-items-center">
                        <h1 className="text-4xl mb-5 font-[Britney-Variable] text-center">Title</h1>
                        <p className="mb-4 font-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam omnis inventore.
                        </p>
                        <p className="mb-4 font-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio sapiente sint ipsa, itaque labore ipsam, aliquam sunt reprehenderit vel doloremque iure. Id expedita labore incidunt reprehenderit fugit voluptatum doloribus? <span className="font-bold">I love you!</span>
                        </p>
                        <p className="mb-4 font-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia explicabo architecto, sapiente qui rerum blanditiis!
                        </p>
                        <p className="font-body">
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AnnivPage