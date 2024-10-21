import Image from "next/image";
import Link from "next/link";

export default function Cardcharacter({ charactersData }) {
    return (
        <>
            {charactersData.length > 0 ? (
                charactersData.map((character, index) => (
                    <div key={index} className="w-full bg-main-card border border-4 border-mintchoc-brown-three bg-mintchoc-green-one rounded-lg p-3 bg-card">
                        <div className="flex justify-center p-2">
                            <Image src={`/assets/images/characters/${character}/icon-big`} width={170} height={170} alt="character icon"></Image>
                        </div>
                        <div className="flex flex-col items-center p-3">
                            <p className="text-2xl capitalize font-bold text-mintchoc-brown-two">{character}</p>
                        </div>
                        <div className="flex flex-col items-end p-3">
                            <Link href={`/characters/${character}`}>
                                <button className="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-mintchoc-brown-two">
                                    <span className="relative text-sm text-white">View Info</span>
                                    <div className="flex items-center -space-x-3 translate-x-3">
                                        <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                ))
            ) : (
                <p>No characters found.</p>
            )}
        </>
    );
}