import PaginationMenu from "@/components/paginationMenu";
import Searchbar from "@/components/searchBar";
import Cardcharacter from "@/components/cardCharacter";
import fetchCharacter from "@/lib/data";
import { Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";

export default async function Characters({ searchParams }) {
    const query = searchParams?.query || '';
    const currentPage = parseInt(searchParams?.page) || 1;
    const { paginatedData, totalItems } = await fetchCharacter({ query, currentPage });
    return (

        <div className="container flex flex-col mx-auto py-10 px-5 space-y-4 items-center justify-center">
            <Searchbar query={query} />
            <div className="w-full flex justify-center space-x-3 md:justify-end">
                <Link href="/stats"><button className="px-6 py-3.5 text-base font-medium text-white bg-mintchoc-brown-two hover:bg-mintchoc-brown-three focus:ring-4 focus:outline-none focus:ring-mintchoc-brown-three rounded-lg text-center">
                    Go to stats page
                </button></Link>
                <Link href="/"><button className="px-6 py-3.5 text-base font-medium text-white bg-mintchoc-brown-two hover:bg-mintchoc-brown-three focus:ring-4 focus:outline-none focus:ring-mintchoc-brown-three rounded-lg text-center">
                    Return to home
                </button></Link>
            </div>
            <Suspense fallback={<Loading />}>
                <div className="grid justify-items-center grid-cols-1 gap-3 w-full md:grid-cols-3 lg:grid-cols-5">
                    <Cardcharacter charactersData={paginatedData} />
                </div>
            </Suspense>
            <PaginationMenu currentPage={currentPage} totalItems={totalItems} />
        </div>

    );
}