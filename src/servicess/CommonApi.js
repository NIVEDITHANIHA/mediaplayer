import axios from "axios";



const CommonApi = async (httpmethod, url, reqbody) => {
    let reqCOnfig = {
        method: httpmethod,
        url: url,
        data: reqbody,

        Headers: {
            "content-type": "application/json"
        }

    };

    return await axios(reqCOnfig).then((result) => {
        return result;
    }).catch((err) => {
        return err;
    })


}

export default CommonApi




