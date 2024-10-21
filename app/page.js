import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-hero-pattern h-screen w-full bg-repeat bg-cover bg-bottom">
      <div className="flex flex-col items-center justify-center h-screen space-y-10">
        <h1 className="text-6xl text-main-primary-title font-bold capitalize text-center space-y-5">
          <p>welcome to genshin impact</p>
          <p>data characters</p>
        </h1>
        <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-5">
          <Link href="/characters"><button className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Characters
          </button></Link>
          <Link href="/stats"><button className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Stat over all
          </button></Link>
        </div>
      </div>
      <footer className="bg-slate-800 text-slate-200 p-5 flex items-center justify-between">
        <aside className="flex items-center space-x-4">
          <Image src='/assets/images/stickers/lynette01.png' width={75} height={75} alt="sticker"></Image>
          <p>This project is created solely for the purpose of practicing with Next.js and is not intended for commercial use in any way. Special thanks to <a href="https://github.com/genshindev/api" className="underline underline-offset-4">GenshinDev</a> for the invaluable api used in this project.</p>
        </aside>
        <nav className="flex gap-5">
          <a href="/">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="3em"
              width="3em"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
}
