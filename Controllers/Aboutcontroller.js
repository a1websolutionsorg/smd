const About = async(request,response)=>{
    try{
        response.render("about");
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    About
}