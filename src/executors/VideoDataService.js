class VideoDataService {

    static getMiniaturesSrc(){
        var list = [];
        for(var i=0; i<10; i++){
            list.push("/images/mass.jpg");
        }
        return list;
    }

    static getLogoSrc(){
        return "/images/mass.jpg";
    }
}

export default VideoDataService;