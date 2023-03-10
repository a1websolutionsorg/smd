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
                    'X-RapidAPI-Key': 'dd48c21838msh24c3a01ae521928p1c1e29jsn87a12fae7867',
                    'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
                }
            };
            axios.request(options).then((data)=>{
                if(result.formats.url === 'undefined') {
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
                    message:"Sorry Cant Find YouTube video with This URL"
                });
            });
        }else if(shortlink.length === 11){
            const options = {
                method: 'GET',
                url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
                params: {id:shortlink},
                headers: {
                    'X-RapidAPI-Key': 'dd48c21838msh24c3a01ae521928p1c1e29jsn87a12fae7867',
                    'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
                }
            };
            axios.request(options).then((data)=>{ 
                if(result.formats.url === 'undefined') {
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
