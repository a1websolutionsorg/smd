const pinterest = async(request, response)=>{
    try{
        response.render("pintrest");
    }catch(error) {
        console.log(error);
    }
}
const pintrestdata = async(request, response)=>{
    try{
        const axios = require("axios");
        const userlink = request.body.pinvalue;
        if(userlink.includes("https://in.pinterest.com/") || userlink.includes("https://pin.it/")){
            const options = {
                method: 'GET',
                url: 'https://pinterest-video-and-image-downloader.p.rapidapi.com/pinterest',
                params: {url:userlink},
                headers: {
                  'X-RapidAPI-Key':'87beb0315bmshe7574d741ee8a12p1086b5jsn5d31f681354b',
                  'X-RapidAPI-Host': 'pinterest-video-and-image-downloader.p.rapidapi.com'
                }
              };
              axios.request(options).then((finaldata)=>{
                  if(typeof(finaldata.data.data)=="undefined"){
                      response.render("pintrest",{
                        message:"Please Enter Valid Link"
                    });
                  }else{
                      response.render("pintrest",{
                          data:finaldata.data.data,
                      });
                  }  
              }).catch((error)=>{
                  response.render("pintrest",{
                      message:"There are Some error",
                  });
                  console.error(error);
              }); 
        }else{
            response.render("pintrest",{
                message:"Only Pinterest Link is Allowed",
            });
        }
    }catch(error){
        console.error(error);
    }
};
//export home module
module.exports = {
    pinterest,
    pintrestdata
}
