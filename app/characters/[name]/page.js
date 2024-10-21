import Image from "next/image";
import Link from "next/link";
async function getInfo(name) {
    const response = await fetch(`https://genshin.jmp.blue/characters/${name}`)
    if (!response.ok) {
        throw new Error('cant fetxh data')
    }
    return response.json();
}
export default async function CharacterInfo({ params }) {
    const info = await getInfo(params.name);
    return (
        <div className="bg-mintchoc-brown-one">
            <div className="container mx-auto py-5 px-5 flex justify-center items-center min-h-screen">
                <div className="flex flex-col rounded-lg bg-mintchoc-green-one max-h-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-4 border-mintchoc-brown-three md:flex-row relative">
                    <div className="absolute top-5 right-5">
                        <Link href='/characters'><button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 border hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                            <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
                                <path
                                    fill="currentColor"
                                    d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
                                />
                            </svg>
                        </button></Link>
                    </div>
                    <Image src={`/assets/images/characters/${params.name}/card`} width={300} height={400} alt="card art" placeholder="empty" />
                    <div className="flex flex-col justify-start p-6">
                        <h1 className="mb-5 text-5xl font-bold text-mintchoc-brown-three">{info.name}</h1>
                        <table className="table-auto w-full text-left border-separate border-spacing-y-4">
                            <tbody>
                                <tr>
                                    <th className="text-lg text-mintchoc-brown-three font-semibold pr-4">Title</th>
                                    <td className="text-lg text-mintchoc-brown-two font-normal">{info.title}</td>
                                </tr>
                                <tr>
                                    <th className="text-lg text-mintchoc-brown-three font-semibold pr-4">Vision</th>
                                    <td className="text-lg text-mintchoc-brown-two font-normal">{info.vision}</td>
                                </tr>
                                <tr>
                                    <th className="text-lg text-mintchoc-brown-three font-semibold pr-4">Weapon</th>
                                    <td className="text-lg text-mintchoc-brown-two font-normal">{info.weapon}</td>
                                </tr>
                                <tr>
                                    <th className="text-lg text-mintchoc-brown-three font-semibold pr-4">Gender</th>
                                    <td className="text-lg text-mintchoc-brown-two font-normal">{info.gender}</td>
                                </tr>
                                <tr>
                                    <th className="text-lg text-mintchoc-brown-three font-semibold pr-4">Nation</th>
                                    <td className="text-lg text-mintchoc-brown-two font-normal">{info.nation}</td>
                                </tr>
                                <tr>
                                    <th className="text-lg text-mintchoc-brown-three font-semibold pr-4">Affiliation</th>
                                    <td className="text-lg text-mintchoc-brown-two font-normal">{info.affiliation}</td>
                                </tr>
                                <tr>
                                    <th className="text-lg text-mintchoc-brown-three font-semibold pr-4">Rarity</th>
                                    <td className="text-lg text-mintchoc-brown-two font-normal">{info.rarity}</td>
                                </tr>
                                <tr>
                                    <th className="text-lg text-mintchoc-brown-three font-semibold pr-4">Constellation</th>
                                    <td className="text-lg text-mintchoc-brown-two font-normal">{info.constellation}</td>
                                </tr>
                                <tr>
                                    <th className="text-lg text-mintchoc-brown-three font-semibold pr-4">Birthday</th>
                                    <td className="text-lg text-mintchoc-brown-two font-normal">{info.birthday}</td>
                                </tr>
                                <tr>
                                    <th className="text-lg text-mintchoc-brown-three font-semibold pr-4">Description</th>
                                    <td className="text-lg text-mintchoc-brown-two font-normal">{info.description}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="text-xs text-neutral-500 dark:text-neutral-300 text-end">Last updated version 5.0</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
