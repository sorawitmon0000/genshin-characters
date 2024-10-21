import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className='bg-mintchoc-brown-one'>
            <div className='container mx-auto w-full h-screen'>
                <div className='flex flex-col items-center justify-center h-screen space-y-10'>
                    <Image src='/assets/images/stickers/raiden01.png' width={500} height={500} alt="sticker"></Image>
                    <h1 className='text-6xl font-bold text-mintchoc-brown-three'>PAGE NOT FOUND</h1>
                    <Link href="/"><button className="px-6 py-3.5 text-base font-medium text-white bg-mintchoc-brown-two hover:bg-mintchoc-brown-three focus:ring-4 focus:outline-none focus:ring-mintchoc-brown-three rounded-lg text-center">
                        Return to home
                    </button></Link>
                </div>
            </div>
        </div>
    );
}     
