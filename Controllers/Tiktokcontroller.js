const tiktok = async(request, response)=>{
    try{
        response.render("tiktok");
    }catch(error) {
        console.log(error);
    }
}
const tiktokdata = async(request,response)=>{
  try{
    //axios advance fetch request
    const axios = require("axios");
    const userinput = request.body.tikvalue;
    //header method
    if(userinput.includes("https://vm.tiktok.com/")){
        const options = {
            method: 'GET',
            url: 'https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index',
            params: {url:userinput},
            headers: {
                'X-RapidAPI-Key':'87beb0315bmshe7574d741ee8a12p1086b5jsn5d31f681354b',
                'X-RapidAPI-Host': 'tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com'
            }
        };
        axios.request(options).then((data)=>{
            const finalResult = data.data;
            if(finalResult === "undefined"){
                response.render("tiktok",{
                    message:"Please Enter Valid Liink",
                });
            }else{
                response.render("tiktok",{
                    data:finalResult
                });
            }  
        }).catch((error)=>{
            response.render("tiktok",{
                message:"Sorry Link Is Not Valid",
            });
        });
    }else{
        response.render("tiktok",{
            message:"Please Enter A Valid Link",
        });
    }
  }catch(error){
    console.log(error);
  }
}
//export home module
module.exports = {
    tiktok,
    tiktokdata
}
