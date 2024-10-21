import Image from "next/image";
import calculateStats from "@/lib/stat";
import VisionChart from "@/components/visionChart";
import NationChart from "@/components/nationChart";
import Link from "next/link";
import { Suspense } from "react";
export default async function Stats() {
    const data = await calculateStats();
    const visionData = [
        { name: 'Pyro', value: data.totalPyroVision },
        { name: 'Hydro', value: data.totalHydroVision },
        { name: 'Electro', value: data.totalElectroVision },
        { name: 'Cryo', value: data.totalCryoVision },
        { name: 'Anemo', value: data.totalAnemoVision },
        { name: 'Geo', value: data.totalGeoVision },
        { name: 'Dendro', value: data.totalDendroVision }
    ];
    const nationData = [
        { nation: 'Mondstadt', total: data.totalNationMondstadt },
        { nation: 'Liyue', total: data.totalNationLiyue },
        { nation: 'Inazuma', total: data.totalNationInazuma },
        { nation: 'Sumeru', total: data.totalNationSumeru },
        { nation: 'Fontaine', total: data.totalNationFontaine },
        { nation: 'Natlan', total: data.totalNationNatlan },
        { nation: 'Snezhnaya', total: data.totalNationSnezhnaya }
    ];
    return (
        <div className="bg-mintchoc-brown-one">
            <Suspense fallback={"loading....."}>
                <div className="container mx-auto max-w-screen p-10">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col items-center p-4 bg-mintchoc-green-one shadow rounded-lg border border-4 border-mintchoc-brown-two md:flex-row">
                            <div>
                                <Image src='/assets/images/stickers/lumine01.png' width={150} height={150} alt="sticker" />
                            </div>
                            <div className="text-center md:text-left">
                                <div className="text-3xl font-bold text-mintchoc-brown-three">{data.summaryGenshinReleaseDate} DAY</div>
                                <div className="text-sm text-mintchoc-brown-one">This is the number of days since the game was launched until now</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-mintchoc-green-one shadow rounded-lg border border-4 border-mintchoc-brown-two md:flex-row">
                            <div className="mr-4">
                                <Image src='/assets/images/stickers/paimon01.png' width={100} height={100} alt="sticker"></Image>
                            </div>
                            <div className="text-center md:text-left">
                                <div className="text-3xl font-bold text-mintchoc-brown-three">60 M</div>
                                <div className="text-lg font-semibold text-mintchoc-brown-two">Monthly Active Players</div>
                                <div className="text-sm text-mintchoc-brown-one"><a href="https://activeplayer.io/genshin-impact/">Reference source, click here.</a></div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-mintchoc-green-one shadow rounded-lg border border-4 border-mintchoc-brown-two md:flex-row">
                            <div className="mr-4">
                                <Image src='/assets/images/stickers/ayaka01.png' width={100} height={100} alt="sticker"></Image>
                            </div>
                            <div className="text-center md:text-left">
                                <div className="text-3xl font-bold text-mintchoc-brown-three">WINNER</div>
                                <div className="text-lg font-semibold text-mintchoc-brown-two">The Game Award 2021</div>
                                <div className="text-sm text-mintchoc-brown-one">Best Mobile Game</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-mintchoc-green-one shadow rounded-lg border border-4 border-mintchoc-brown-two md:flex-row">
                            <div className="mr-4">
                                <Image src='/assets/images/stickers/furina01.png' width={100} height={100} alt="sticker"></Image>
                            </div>
                            <div className="text-center md:text-left">
                                <div className="text-3xl font-bold text-mintchoc-brown-three">Nominee</div>
                                <div className="text-lg font-semibold text-mintchoc-brown-two">The Game Award 2023</div>
                                <div className="text-sm text-mintchoc-brown-one">Best Ongoing Game</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-12">
                        <div className="col-span-12 w-full rounded-md border border-4 border-mintchoc-brown-two w-full bg-mintchoc-green-one md:col-span-5">
                            <div className="flex flex-col items-center p-5">
                                <Image src='/assets/images/stickers/navia01.png' width={200} height={200} alt="sticker"></Image>
                                <div className="text-2xl text-center text-mintchoc-brown-one font-bold mt-5">There are now <span className="text-3xl text-mintchoc-brown-two">{data.totalCharacter}</span> playble characters.</div>
                            </div>
                        </div>
                        <div className="col-span-12 rounded-md border border-4 border-mintchoc-brown-two bg-mintchoc-green-one md:col-span-7">
                            <h1 className="text-2xl text-center text-mintchoc-brown-one font-bold pt-5">Vision proportions of playable characters.</h1>
                            <VisionChart visionData={visionData} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-12">
                        <div className="col-span-12 rounded-md border border-4 border-mintchoc-brown-two bg-mintchoc-green-one py-5">
                            <div className="flex flex-cols w-full justify-center">
                                <NationChart nationData={nationData} />
                            </div>
                            <h1 className="text-2xl text-center text-mintchoc-brown-one font-bold">Nationality of playable characters.</h1>
                        </div>
                    </div>
                    <div className="w-full flex py-3 justify-center items-center">
                        <div className="flex space-x-3">
                            <Link href="/characters">
                                <button className="px-6 py-3.5 text-base font-medium text-white bg-mintchoc-brown-two hover:bg-mintchoc-brown-three focus:ring-4 focus:outline-none focus:ring-mintchoc-brown-three rounded-lg text-center">
                                    Go to Characters page
                                </button>
                            </Link>
                            <Link href="/">
                                <button className="px-6 py-3.5 text-base font-medium text-white bg-mintchoc-brown-two hover:bg-mintchoc-brown-three focus:ring-4 focus:outline-none focus:ring-mintchoc-brown-three rounded-lg text-center">
                                    Return to home
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </Suspense>
        </div>
    );
}