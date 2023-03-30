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
				'X-RapidAPI-Key': '87beb0315bmshe7574d741ee8a12p1086b5jsn5d31f681354b',
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
				console.log(finaldetails)
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
