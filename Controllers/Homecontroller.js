const indexpage = async(request,response)=>{
    try{
        response.render("index");
    }catch(error){
        console.log(error);
    }
}
const Allfetchdata = async(request,response)=>{
    try{
        const axios = require("axios");
        const userlink = request.body.allvalue;
        if(userlink.includes("https://www.youtube.com/") || userlink.includes("https://youtu.be/")){
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
                    url:userlink
                }
            };
            try{
                const result = await axios.request(options);
        
                response.render("index",{
                    data:result.data,
                });
        
            }catch(error){
                console.error(error);
            }
        }else if(userlink.includes("https://www.instagram.com/")){
                const axios = require("axios");
                const userinput = request.body.allvalue;
                const options = {
                    method: 'GET',
                    url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
                    params: {url:userinput},
                    headers: {
                        'X-RapidAPI-Key': '87beb0315bmshe7574d741ee8a12p1086b5jsn5d31f681354b',
                        'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
                    }
                };
                axios.request(options).then((instadata)=>{
                    const finaldetails = instadata.data;
                    if(finaldetails === "undefined"){
                        response.render("index",{
                            message:"Instagram Link Is Not valid",
                        });
                    }else{
                        response.render("index",{
                            instadata:finaldetails,
                        });
                    }
                }).catch((error)=>{
                    console.error(error);
                    response.render("index",{
                        message:"Instagram Link Is Not valid",
                    });
                });
        }else if(userlink.includes("https://www.facebook.com/") || userlink.includes("https://fb.watch/")){
            const axios = require("axios");
            const userlink = request.body.allvalue;
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
                response.render("index",{
                    data:data.data
                });
            }).catch(function (error) {
                response.render("index", {
                    message: "There was an error"
                });
                console.error(error);
            });
        }else if(userlink.includes("https://www.tiktok.com/" || userlink.includes("https://vm .tiktok.com/"))){
                    //axios advance fetch request
                    const axios = require("axios");
                    //userinput
                    const userinput = request.body.allvalue;
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
                    axios.request(options).then((tiktokdata)=>{
                        response.render("index",{
                            tiktokdata:tiktokdata.data
                        }); 
                    }).catch((error)=>{
                        response.render("index",{
                            message:"Sorry Link Is Not Valid",
                        });
                        console.log(error);
                    });
        }else if(userlink.includes("https://in.pinterest.com/") || (userlink.includes("https://pin.it/"))){
                    const axios = require("axios");
                    const userlink = request.body.allvalue;
                    const options = {
                    method: 'GET',
                    url: 'https://pinterest-video-and-image-downloader.p.rapidapi.com/pinterest',
                    params: {url:userlink},
                    headers: {
                        'X-RapidAPI-Key': '87beb0315bmshe7574d741ee8a12p1086b5jsn5d31f681354b',
                        'X-RapidAPI-Host': 'pinterest-video-and-image-downloader.p.rapidapi.com'
                    }
                    };
                    axios.request(options).then((pintrestdata)=>{
                        if(pintrestdata === "undefined"){
                            response.render("index",{
                                message:"Please Enter Valid Link",
                            });
                        }else{
                            response.render("index",{
                                pintrestdata:pintrestdata.data.data,
                            });
                        }  
                    }).catch((error)=>{
                        response.render("index",{
                            message:"Please Enter Valid Link",
                        });
                        console.error(error);
                    }); 
        }else{
            response.render("index",{
                message:"Please Enter Valid Website Link",
            });
        }
    }catch(error){
        
    }
}
module.exports = {
    indexpage,
    Allfetchdata
}