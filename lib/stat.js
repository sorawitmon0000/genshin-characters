async function getCharactersData() {
    const response = await fetch('https://genshin.jmp.blue/characters/all')
    if (!response.ok) {
        throw new Error('cant fetxh data')
    }
    return response.json();
}
export default async function calculateStats() {
    try {
        const data = await getCharactersData();
        // count date
        const genshinReleaseDate = new Date('2020-09-28');
        const nowDate = new Date();
        const timeDifferent = nowDate - genshinReleaseDate;
        const summaryGenshinReleaseDate = Math.floor(timeDifferent / (1000 * 60 * 60 * 24));
        // count character
        const totalCharacter = data.length;
        // count gender
        const totalFemale = data.filter(character => character.gender === 'Female').length;
        const totalMale= data.filter(character => character.gender === 'Male').length;
        // count vission
        const totalPyroVision = data.filter(character => character.vision === 'Pyro').length;
        const totalHydroVision = data.filter(character => character.vision === 'Hydro').length;
        const totalElectroVision = data.filter(character => character.vision === 'Electro').length;
        const totalCryoVision = data.filter(character => character.vision === 'Cryo').length;
        const totalAnemoVision = data.filter(character => character.vision === 'Anemo').length;
        const totalGeoVision = data.filter(character => character.vision === 'Geo').length;
        const totalDendroVision = data.filter(character => character.vision === 'Dendro').length;
        // count nation
        const totalNationMondstadt = data.filter(character => character.nation === 'Mondstadt').length;
        const totalNationLiyue = data.filter(character => character.nation === 'Liyue').length;
        const totalNationInazuma = data.filter(character => character.nation === 'Inazuma').length;
        const totalNationSumeru = data.filter(character => character.nation === 'Sumeru').length;
        const totalNationFontaine = data.filter(character => character.nation === 'Fontaine').length;
        const totalNationNatlan = data.filter(character => character.nation === 'Natlan').length;
        const totalNationSnezhnaya = data.filter(character => character.nation === 'Snezhnaya').length;
        return {    'summaryGenshinReleaseDate':summaryGenshinReleaseDate,
                    'totalCharacter':totalCharacter, 
                    'totalFemale':totalFemale, 
                    'totalMale':totalMale, 
                    'totalPyroVision':totalPyroVision,
                    'totalHydroVision':totalHydroVision,
                    'totalElectroVision':totalElectroVision,
                    'totalCryoVision':totalCryoVision,
                    'totalAnemoVision':totalAnemoVision,
                    'totalGeoVision':totalGeoVision,
                    'totalDendroVision':totalDendroVision,
                    'totalNationMondstadt':totalNationMondstadt,
                    'totalNationLiyue':totalNationLiyue,
                    'totalNationInazuma':totalNationInazuma,
                    'totalNationSumeru':totalNationSumeru,
                    'totalNationFontaine':totalNationFontaine,
                    'totalNationNatlan':totalNationNatlan,
                    'totalNationSnezhnaya':totalNationSnezhnaya
                };

    } catch (error) {
        console.error('Data cant fetch :', error);
    }
}
