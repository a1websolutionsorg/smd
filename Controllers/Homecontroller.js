const homepage = async(request,response)=>{
    try{
        response.render("index");
    }catch(error){
        console.log(error);
    }
}
const Allfetchdata = async(request,response)=>{
    try{
        const userlink = request.body.allvalue;
        if(userlink.includes("https://www.youtube.com/") || userlink.includes("https://youtu.be/")){
            const axios = require("axios");
            const longlink = userlink.slice(32,43);
            const shortlink = userlink.slice(17,29);
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
                axios.request(options).then((youtube)=>{
                    const result = youtube.data;
                    if(result.formats.url ==='undefined'){
                        response.render("index",{
                            message:"Sorry Cant Find YouTube video with This URL",
                        });
                        console.log(result)
                    }else{
                        response.render("index",{
                            youtube:result
                        });
                    }
                }).catch((error)=>{
                    response.render("index",{
                        message:"Sorry Cant Find YouTube video with This URL",
                    });
                    console.log(error);
                });
            }else if(shortlink.length === 11){
                const options = {
                    method: 'GET',
                    url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
                    params:{id:shortlink},
                    headers:{
                        'X-RapidAPI-Key': '87beb0315bmshe7574d741ee8a12p1086b5jsn5d31f681354b',
                        'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
                    }
                };
                axios.request(options).then((youtube)=>{
                    const result = youtube.data;
                    if(result.formats.url === 'undefined'){
                        response.render("index",{
                            message:"Data Not Found",
                        });
                    }else{
                        response.render("index",{
                            youtube:result
                        });
                    }
                }).catch((error)=>{
                    response.render("home",{
                        message:"Sorry Cant Find YouTube video with This URL"
                    });
                    console.error(error);
                });
            }
        }else if(userlink.includes("https://www.instagram.com/")){
                const axios = require("axios");
                const userinput = request.body.allvalue;
                const options = {
                    method: 'GET',
                    url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/home',
                    params: {url:userinput},
                    headers: {
                        'X-RapidAPI-Key': '87beb0315bmshe7574d741ee8a12p1086b5jsn5d31f681354b',
                        'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
                    }
                };
                // axios.request(options).then((instadata)=>{
                //     const finaldetails = instadata.data;
                //     if(finaldetails === "undefined"){
                //         response.render("index",{
                //             message:"Instagram Link Is Not valid",
                //         });
                //     }else{
                //         response.render("index",{
                //             instadata:finaldetails,
                //         });
                //     }
                // }).catch((error)=>{
                //     console.error(error);
                //     response.render("index",{
                //         message:"Instagram Link Is Not valid",
                //     });
                // });
                axios.request(options).then((response)=>{
                    console.log(response.data);
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
        }else if(userlink.includes("https://www.facebook.com/") || userlink.includes("https://fb.watch/")){
                    const axios = require("axios");
                    const userlink = request.body.allvalue;
                    const options = {
                        method: 'GET',
                        url: 'https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php',
                        params: {url:userlink},
                        headers: {
                        'X-RapidAPI-Key':'87beb0315bmshe7574d741ee8a12p1086b5jsn5d31f681354b',
                        'X-RapidAPI-Host':'facebook-reel-and-video-downloader.p.rapidapi.com'
                        }
                    };
                    axios.request(options).then((facedata)=>{
                        const result = facedata.data;
                        if(result.links["Download Low Quality"] === "undefined"){
                            response.render("index",{
                                message:" Your Link Is Not Valid",
                            });
                        }else{
                            response.render("index",{
                                facedata:result
                            });
                        }
                    }).catch((error)=>{
                        response.render("index",{
                            message:"Sorry Your Link Is Not Valid",
                        });
                        console.error(error);
                    }); 
        }else if(userlink.includes("https://vm.tiktok.com/")){
                    //axios advance fetch request
                    const axios = require("axios");
                    const userinput = request.body.allvalue;
                    //header method
                    const options = {
                        method: 'GET',
                        url: 'https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/home',
                        params: {url:userinput},
                        headers: {
                            'X-RapidAPI-Key':'87beb0315bmshe7574d741ee8a12p1086b5jsn5d31f681354b',
                            'X-RapidAPI-Host': 'tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com'
                        }
                    };
                    axios.request(options).then((tiktokdata)=>{
                        const finalResult = tiktokdata.data;
                        if(finalResult === "undefined"){
                            response.render("index",{
                                message:"Please Enter  Valid Liink",
                            });
                        }else{
                            response.render("index",{
                                tiktokdata:finalResult
                            });
                        }  
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
    homepage,
    Allfetchdata,
  
}