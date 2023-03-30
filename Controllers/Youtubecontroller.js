const Youtube = async(request,response)=>{
    try{
        response.render("youtube");
    }catch(error) {
        console.log(error);
    }
}
const Youtubedata = async(request,response)=>{
    try{
        const axios = require("axios");
        const url = request.body.youvalue;
        const longlink = url.slice(32,43);
        const shortlink = url.slice(17,29);
        if(longlink.length > 10){
            const options = {
                method: 'GET',
                url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
                params: {id:longlink},
                headers: {
                    'X-RapidAPI-Key': '87beb0315bmshe7574d741ee8a12p1086b5jsn5d31f681354b',
                    'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
                }
            };
            axios.request(options).then((data)=>{
                if(data.data.formats.url === 'undefined') {
                    response.render("youtube",{
                        message:"Data Not Found",
                    });
                }else{
                    response.render("youtube",{
                        data:data.data,
                    });
                }
                console.log(data)
            }).catch((error)=>{
                response.render("youtube",{
                    message:"Sorry Your Code Not Working"
                });
                console.log(error);
            });
        }
        else if(shortlink.length === 11){
            const options = {
                method: 'GET',
                url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
                params: {id:shortlink},
                headers: {
                    'X-RapidAPI-Key': '87beb0315bmshe7574d741ee8a12p1086b5jsn5d31f681354b',
                    'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
                }
            };
            axios.request(options).then((data)=>{ 
                if(data.data.formats.url === 'undefined') {
                    response.render("youtube",{
                        message:"Data Not Found",
                    });
                }else{
                    response.render("youtube",{
                        data:data.data,
                    });
                }
            }).catch((error)=>{
                response.render("youtube",{
                    message:"Sorry There was an error"
                });
                console.log(error);
            });
        }
    }catch(error){
        console.log(error);
    }
}
//export home module
module.exports = {
    Youtube,
    Youtubedata
}
