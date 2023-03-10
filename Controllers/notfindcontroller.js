const notfind = async(request,response)=>{
    try{
        response.render("404");
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    notfind
}