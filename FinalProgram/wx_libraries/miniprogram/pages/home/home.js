// pages/home/home.js
const db = wx.cloud.database()
const wordbook = db.collection('wordbook')
Page({
  navigateToAddwords: function (event) {
    wx.navigateTo({
      url: '../addwords/addwords',
    })
  },
  data: {
    page:0,
   
  },
  
  onClose: function (event) {
    const { position, instance } = event.detail;
    switch (position) {
      case 'right':
        //删除
        var info = event.currentTarget.dataset.wordId;
        wordbook.doc(info).remove().then(res => {
          this.onShow();
          instance.close();
        });
        break;
      case 'outside':
        instance.close();
        break;
    }
  },
  jumpTo: function (event) {
    var id = event.currentTarget.dataset.wordId;
    var word = event.currentTarget.dataset.wordWord;
    //console.log(title);
    var explanation = event.currentTarget.dataset.wordExplanation;
    //console.log(value);
    wx.navigateTo({
      url: '/pages/words/words?id=' + id + '&word=' + word + '&explanation=' + explanation
    });
  },
  //触底加载
  onReachBottom: function (res) {
    //console.log("~~~")
    let page = this.data.page + 20;
    wordbook.skip(page).get().then(res => {
      let new_data = res.data
      let old_data = this.data.words
      this.setData({
        words: old_data.concat(new_data),
        page: page
      }), res => {
        console.log(res);
      }
    })
  },

  onShow: function (event) {
    wordbook.get().then(res => {
      this.setData({
        words: res.data
      })
    });
  },

  orderS:function(event){
    wordbook.orderBy("word","asc").get().then(res =>{
      this.setData({
        words:res.data
      })
    })
  },
  orderN: function (event) {
    wordbook.orderBy("word", "desc").get().then(res => {
      this.setData({
        words: res.data
      })
    })
  }

})