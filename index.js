const axiosRequest = require('axios')

async function getActivity() { 
    let response = await axiosRequest.get('https://www.boredapi.com/api/activity');
    // the below console log line will not return until the promise resolves from the above
    console.log(`You could ${response.data.activity}`);
}

getActivity();
