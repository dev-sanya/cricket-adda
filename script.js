/*const url = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '75d654b57amshcaef0cd023f388ep133c0fjsn9ff32ffa30cd',
		'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/

document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'c99bf3b5fcmsh78bf7999ec5b408p19fb4bjsn76999f05c7d5'; 
    const apiUrl = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent'; 
    async function fetchScores() {
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    'x-rapidapi-key': '75d654b57amshcaef0cd023f388ep133c0fjsn9ff32ffa30cd',
		            'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
	
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            displayScores(data);
        } catch (error) {
            console.error('Error fetching scores:', error);
        }
    }
    function displayScores(data){
        console.log(data);
        const matches=data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches;
        if (matches && matches.length > -1){
            
            document.getElementById('match').textContent=`${matches[0].matchInfo.team1.teamName} vs ${matches[0].matchInfo.team2.teamName}`;
        }

    }
    fetchScores();
});