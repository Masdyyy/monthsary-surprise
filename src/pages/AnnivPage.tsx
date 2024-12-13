import AudioPlayer from "@/components/Audio";
import MouseImageTrail from "@/components/MouseImageTrail";
import { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const AnnivPage = () => {
    const [, setImagesLoaded] = useState(false);

    // PLACE YOUR IMAGES HERE
    const imageUrls = [
        'src/assets/pics/IMG_5613.jpg',
        'src/assets/pics/IMG_5621.jpg',
        'src/assets/pics/IMG_5951.jpg',
        'src/assets/pics/IMG_5971.jpg',
        'src/assets/pics/IMG_6068.jpg',
        'src/assets/pics/IMG_6088.jpg',
        'src/assets/pics/IMG_6148.jpg',
        'src/assets/pics/IMG_6157.jpg',
        'src/assets/pics/IMG_6189.jpg',
        'src/assets/pics/IMG_6198.jpg',
    ];

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
                        <CardTitle>Sincerely Yours</CardTitle>
                        <CardDescription>Sophie Meiers</CardDescription>
                    </CardHeader>
                    {/* PLACE YOUR AUDIO LINK HERE */}
                    <CardContent>
                        <AudioPlayer src="src/assets/audio/lala.mp3" />
                    </CardContent>
                </Card>
                <div className="text-pretty p-3 h-max flex justify-center items-center text-white">
                    <div className="grid place-items-center">
                        <h1 className="text-4xl mb-5 font-[Britney-Variable] text-center">Happy 7th Monthsary!</h1>
                        <p className="mb-4 font-body">As I sit here writing this, I can’t help but think of all the beautiful moments we’ve shared—our first date, our quiet picnics, and the simple yet unforgettable days spent walking around the mall, playing games, and just being silly together. 
                        </p>
                        <p className="mb-4 font-body">Each of those moments reminds me how lucky I am to have you by my side.
                        </p>
                        <p className="mb-4 font-body"> You’ve brought so much joy, comfort, and love into my life, and I hope this small gesture reminds you just how special you are to me.
                        </p>
                        <p className="font-body">
                            I hope you like my little surprise for you. <span className="font-bold">I love you so so much!</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AnnivPage