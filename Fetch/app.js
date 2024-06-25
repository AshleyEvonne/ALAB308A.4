
const API_KEY = "live_3ptZ6oXj6Gz7au1pT24sFNfqorps6olUzNrQnPOp9Gm1xxIEAFN8ZSdBhMph5EFc"

/**
 * 1. Create an async function "initialLoad" that does the following:
 * - Retrieve a list of breeds from the cat API using fetch().
 * - Create new <options> for each of these breeds, and append them to breedSelect.
 *  - Each option should have a value attribute equal to the id of the breed.
 *  - Each option should display text equal to the name of the breed.
 */

const url = "https://api.thecatapi.com/v1/breeds?limit=10";


async function initialLoad(){

    try{

        //Getting data from the API by using the fetch function
       const resp = await fetch(url,{
        headers: {
            'x-api-key': API_KEY
          }})
            if(!resp.ok){
                throw new Error('Error loading API') }
        
            //Extract json object from resp and store it in the data variable
            const data = await resp.json();
             
            console.log(data)
            //Use data from the API to create the options for the dropmenu
            data.forEach(breed =>
                {
                    const option = document.createElement('option')
                    option.setAttribute('value', breed.id)
                    option.innerText = breed.name;
                    breedSelect.append(option)
                })



            //Handle error with catch. Display the error message in the console
            }catch(e){
                console.log(e.message)
                throw e;
            }}
    