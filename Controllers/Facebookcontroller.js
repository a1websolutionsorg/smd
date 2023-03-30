const facebook = async(request, response)=>{
    try{
        response.render("facebook");
    }catch(error) {
        console.log(error);
    }
}

const facebookdata = async(request, response)=>{
    try{
        const axios = require("axios");
        const userlink = request.body.facevalue;
        const options = {
            method: 'GET',
            url: 'https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php',
            params: {url:userlink},
            headers: {
              'X-RapidAPI-Key': '87beb0315bmshe7574d741ee8a12p1086b5jsn5d31f681354b',
              'X-RapidAPI-Host': 'facebook-reel-and-video-downloader.p.rapidapi.com'
            }
          };
          axios.request(options).then((data)=>{
              const result = data.data;
              if(result.links["Download Low Quality"] === "undefined"){
                response.render("facebook",{
                    message:"Sorry Your Link Is Not Valid"
                });
              }else{
                response.render("facebook",{
                    data:result
                });
              }
          }).catch(function(error) {
              response.render("facebook",{
                  message:"There was an error"
              });
              console.error(error);
          }); 
    }catch(error) {
         console.log(error); 
    }
};
//export home module
module.exports = {
    facebook,
    facebookdata
}
