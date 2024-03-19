const tiktok = async (request, response) => {
    try {
        response.render("tiktok");
    } catch (error) {
        console.log(error);
    }
}
const tiktokdata = async (request, response) => {
    try {
        //axios advance fetch request
        const axios = require("axios");
        //covery request
        const userinput = request.body.tikvalue;
        //header method
        const options = {
            method: 'GET',
            url: 'https://tiktok-video-no-watermark2.p.rapidapi.com/',
            params: {
                url:userinput,
                hd: '1'
            },
            headers: {
                'X-RapidAPI-Key': 'd054ba8b07mshff39db0bb02f42ep1be342jsn10350a1626c3',
                'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
            }
        };
        axios.request(options).then((data) => {
            if (data.data === "undefined") {
                response.render("tiktok", {
                    message: "Please Enter Valid Liink",
                });
            } else {
                response.render("tiktok", {
                    data: data.data
                });
            }
        }).catch((error) => {
            response.render("tiktok", {
                message: "Sorry Link Is Not Valid",
            });
            console.log(error);
        });
    }catch(error) {
        console.log(error);
    }
}
//export home module
module.exports = {
    tiktok,
    tiktokdata
}
