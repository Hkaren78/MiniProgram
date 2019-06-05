const httpRequest = require("./../utils/httpRequest.js");

exports.callWxOpenApi = function({apiName: apiName, requestData: requestData, event: event} = {}) {
    try {
        requestData = requestData ? JSON.stringify(requestData) : "";
    } catch (e) {
        throw Error(e);
    }
    const {wxCloudApiToken: wxCloudApiToken} = event;
    let params = {
        action: "wx.api",
        apiName: apiName,
        requestData: requestData,
        wxCloudApiToken: wxCloudApiToken
    };
    return httpRequest({
        config: this.config,
        params: params,
        method: "post",
        headers: {
            "content-type": "application/json"
        }
    }).then(res => {
        // console.log(res);
        if (res.code) {
            return res;
        } else {
            let result = res.data.responseData;
            try {
                result = JSON.parse(res.data.responseData);
            } catch (e) {}
            return {
                result: result,
                requestId: res.requestId
            };
        }
    });
};