async function getCharacters() {
    const response = await fetch('https://genshin.jmp.blue/characters')
    if (!response.ok) {
        throw new Error('cant fetxh data')
    }
    return response.json();
}
export default async function fetchCharacter({ query, currentPage }) {
    try {
       const data = await getCharacters();
       const filteredData = data.filter(character => character.toLowerCase().includes(query.toLowerCase()));
        const totalItems = filteredData.length;
        const itemsPerPage = 10;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);
        
        return { paginatedData, totalItems: totalItems};

    } catch (error) {
        console.error('Data cant fetch :', error);
        return { paginatedData: [], totalItems: 0 }; 
    }
}
