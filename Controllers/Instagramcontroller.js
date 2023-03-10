const instagram = async(request, response)=>{
    try{
        response.render("instagram");
    }catch(error) {
        console.log(error);
    }
}
const userdata = async(request,res)=>{
    try{
    	const axios = require("axios");
       	const userinput = request.body.uservalue;
		const options = {
			method: 'GET',
			url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
			params: {url:userinput},
			headers: {
				'X-RapidAPI-Key': '5ed88926c7mshaf1da489d92a152p15bdc3jsne9c441f254b2',
				'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
			}
		};
		axios.request(options).then((response)=>{
			//console.log(response.data);
			const finaldetails = response.data;
			if(finaldetails === "undefined"){
				res.render("instagram",{
					message:"Sorry Data Is Not Available",
				});
			}else{
				res.render("instagram",{
					data:finaldetails,
				});
			}
		}).catch((error)=>{
			console.error(error);
			res.render("instagram",{
				message:"Sorry Your Link Is Not valid"
			});
		});
    }catch(error) {
        console.log(error);
    }
}
//export home module
module.exports = {
    instagram,
    userdata,
}
