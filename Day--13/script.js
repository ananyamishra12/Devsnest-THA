const input= document.querySelector('input');
const searchBtn= document.querySelector('.btn');
const displayArea= document.querySelector('.results');

searchBtn.addEventListener('click', fetchImage)

function fetchImage(){
    let query=input.value; //whatever we search that value will be stored here
    //console.log(`https://dog.ceo/api/breed/${query}/images/random/10`);
    fetch(`https://dog.ceo/api/breed/${query}/images/random/10`)
    .then((res) => (res.json()))
    .then((data)=>{
        showResponse(data);
    });
}

function showResponse(data){
    if(data.status == `success`){
        data.message.forEach((dog)=>{
            let dogDiv = document.createElement(`div`);
            // console.log(dogDiv);
            dogDiv.className = 'doggo';
            dogDiv.innerHTML = `<img src=${dog}>`;
            displayArea.append(dogDiv);
            
        });
    }
    else {
        const notFound = document.createElement(`div`);
        notFound.innerText = 'dog not found';
        notFound.className = 'notFound';
        displayArea.innerHTML = '';
        displayArea.append(notFound);
    }
    
}

fetchImage();