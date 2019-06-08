const db = wx.cloud.database()
const wordbook = db.collection('wordbook')
Page({
  navigateToHome: function (event) {
    wx.navigateTo({
      url: '../home/home',
    })
    var that =this;
    console.log(event)
    wordbook.add({
      data:{
        word:that.data.word,
        explanation:that.data.explanation
      }
    }).then(res =>{
      console.log(res)
      
    })
    
  },
  data: {
    word: "",
    explanation: ""
  },

  onAddWords: function (event) {
    // event.detail 为当前输入的值
    this.data.word = event.detail;
  },

  onAddExplanation: function (event) {
    this.data.explanation = event.detail;
  }

})