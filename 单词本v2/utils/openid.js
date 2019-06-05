function getOpenid() {
    return new Promise(function(res, rej) {
        wx.login({
            success: function success(loginCode) {
                var appid = "wxb68e03b957eb1a9c";
                //填写微信小程序appid  
                                var secret = "9110816a35f73a5b716d2ddbfea51fdc";
                //填写微信小程序secret  
                //调用request请求api转换登录凭证  
                                wx.request({
                    url: "https://api.weixin.qq.com/sns/jscode2session?appid=" + appid + "&secret=" + secret + "&grant_type=authorization_code&js_code=" + loginCode.code,
                    header: {
                        "content-type": "application/json"
                    },
                    success: function success(d) {
                        //获取openid  
                        res(d.data.openid);
                    },
                    fail: function fail(d) {
                        rej(d);
                    }
                });
            }
        });
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZW5pZC5qcyJdLCJuYW1lcyI6WyJnZXRPcGVuaWQiLCJQcm9taXNlIiwicmVzIiwicmVqIiwid3giLCJsb2dpbiIsInN1Y2Nlc3MiLCJsb2dpbkNvZGUiLCJhcHBpZCIsInNlY3JldCIsInJlcXVlc3QiLCJ1cmwiLCJjb2RlIiwiaGVhZGVyIiwiZCIsImRhdGEiLCJvcGVuaWQiLCJmYWlsIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLFNBQVQsR0FBcUI7QUFDakIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDN0JDLFdBQUdDLEtBQUgsQ0FBUztBQUNMQyxxQkFBUyxpQkFBVUMsU0FBVixFQUFxQjtBQUMxQixvQkFBSUMsUUFBUSxvQkFBWixDQUQwQixDQUNRO0FBQ2xDLG9CQUFJQyxTQUFTLGtDQUFiLENBRjBCLENBRXVCO0FBQ2pEO0FBQ0FMLG1CQUFHTSxPQUFILENBQVc7QUFDUEMseUJBQUssd0RBQXdESCxLQUF4RCxHQUFnRSxVQUFoRSxHQUE2RUMsTUFBN0UsR0FBc0YseUNBQXRGLEdBQWtJRixVQUFVSyxJQUQxSTtBQUVQQyw0QkFBUTtBQUNKLHdDQUFnQjtBQURaLHFCQUZEO0FBS1BQLDJCQUxPLG1CQUtDUSxDQUxELEVBS0k7QUFDUDtBQUNBWiw0QkFBSVksRUFBRUMsSUFBRixDQUFPQyxNQUFYO0FBQ0gscUJBUk07QUFTUEMsd0JBVE8sZ0JBU0ZILENBVEUsRUFTQztBQUNKWCw0QkFBSVcsQ0FBSjtBQUNIO0FBWE0saUJBQVg7QUFhSDtBQWxCSSxTQUFUO0FBb0JILEtBckJNLENBQVA7QUFzQkgiLCJmaWxlIjoib3BlbmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0T3BlbmlkKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgIHd4LmxvZ2luKHtcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGxvZ2luQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFwcGlkID0gJ3d4YjY4ZTAzYjk1N2ViMWE5Yyc7IC8v5aGr5YaZ5b6u5L+h5bCP56iL5bqPYXBwaWQgIFxyXG4gICAgICAgICAgICAgICAgdmFyIHNlY3JldCA9ICc5MTEwODE2YTM1ZjczYTViNzE2ZDJkZGJmZWE1MWZkYyc7IC8v5aGr5YaZ5b6u5L+h5bCP56iL5bqPc2VjcmV0ICBcclxuICAgICAgICAgICAgICAgIC8v6LCD55SocmVxdWVzdOivt+axgmFwaei9rOaNoueZu+W9leWHreivgSAgXHJcbiAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbj9hcHBpZD0nICsgYXBwaWQgKyAnJnNlY3JldD0nICsgc2VjcmV0ICsgJyZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZSZqc19jb2RlPScgKyBsb2dpbkNvZGUuY29kZSxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v6I635Y+Wb3BlbmlkICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzKGQuZGF0YS5vcGVuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsKGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqKGQpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59Il19