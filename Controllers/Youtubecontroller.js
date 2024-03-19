const axios = require("axios");
//
const Youtube = async (request, response) => {
    try {
        response.render("youtube");
    } catch (error) {
        console.log(error);
    }
}
const Youtubedata = async (request, response) => {
    const url = request.body.youvalue;
    const options = {
        method: 'POST',
        url: 'https://youtube86.p.rapidapi.com/api/youtube/links',
        headers: {
            'content-type': 'application/json',
            'X-Forwarded-For': '70.41.3.18',
            'X-RapidAPI-Key': '5ed88926c7mshaf1da489d92a152p15bdc3jsne9c441f254b2',
            'X-RapidAPI-Host': 'youtube86.p.rapidapi.com'
        },
        data:{
            url:url
        }
    };
    try{
        const result = await axios.request(options);

        response.render("youtube",{
            data:result.data,
        });

    }catch(error){
        console.error(error);
    }
}
//export home module
module.exports = {
    Youtube,
    Youtubedata
}