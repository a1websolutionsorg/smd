const facebook = async (request, response) => {
    try {
        response.render("facebook");
    } catch (error) {
        console.log(error);
    }
}

const facebookdata = async (request, response) => {
    try {
        const axios = require("axios");
        const userlink = request.body.facevalue;
        const options = {
            method: 'POST',
            url: 'https://facebook17.p.rapidapi.com/api/facebook/links',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'd054ba8b07mshff39db0bb02f42ep1be342jsn10350a1626c3',
                'X-RapidAPI-Host': 'facebook17.p.rapidapi.com'
            },
            data: {
                url:userlink
            }
        };
        axios.request(options).then((data) => {
            response.render("facebook",{
                data:data.data
            });
        }).catch(function (error) {
            response.render("facebook", {
                message: "There was an error"
            });
            console.error(error);
        });
    } catch (error) {
        console.log(error);
    }
};
//export home module
module.exports = {
    facebook,
    facebookdata
}
