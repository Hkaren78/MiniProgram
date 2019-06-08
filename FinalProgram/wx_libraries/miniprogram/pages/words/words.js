// pages/words/words.js
const db = wx.cloud.database()
const wordbook = db.collection('wordbook')
Page({
  data: {
    id: '',
    wordWord: "",
    wordExplanation: ""
  },
  onChangeWord: function (event) {
    // event.detail 为当前输入的值
    this.data.wordWord = event.detail;//顺序很重要
    console.log(event.detail);
  },
  onChangeExplanation: function (event) {
    // event.detail 为当前输入的值
    this.data.wordExplanation = event.detail;
    console.log(event.detail);
  },
  updatePerWord: function (event) {
    wordbook.doc(this.data.id).update({
      data: {
        word: this.data.wordWord,
        explanation: this.data.wordExplanation
      }
    }).then(res => {
      wx.showToast({//此处仅仅是消息框的持续时间，不保证数据更新后再跳转
        title: '单词修改成功',
        icon: 'success',
        duration: 3000
      })
    });
    setTimeout(function () {//延时指令，保证数据库内容得到更新
      //要延时执行的代码
      wx.navigateBack({

      });
    }, 3000);
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数 
    wordbook.doc(options.id).get({
      success: res => {
        this.setData({
          words: res.data
        });
        this.data.id = options.id;
        this.data.wordWord = res.data.word;
        this.data.wordExplanation = res.data.explanation;
        console.log(res.data);
      }
    })
  }
})