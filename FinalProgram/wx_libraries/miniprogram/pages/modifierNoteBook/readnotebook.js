// miniprogram/pages/readNoteBook/readnotebook.js
const db = wx.cloud.database()
const personalNote = db.collection('personal_note')
Page({
  data: {
    id:'',
    noteTitle: "",
    noteValue: ""
  },
  onChangeTitle: function (event) {
    // event.detail 为当前输入的值
    this.data.noteTitle = event.detail;//顺序很重要
    console.log(event.detail);
  },
  onChangeNote: function (event) {
    // event.detail 为当前输入的值
    this.data.noteValue = event.detail;
    console.log(event.detail);
  },
  updatePerNote: function (event) {
    personalNote.doc(this.data.id).update({
    data: {
        title: this.data.noteTitle,
        value: this.data.noteValue
      }
    }).then(res => {
      wx.showToast({//此处仅仅是消息框的持续时间，不保证数据更新后再跳转
        title: '更新成功并返回',
        icon: 'success',
        duration: 2000
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
    personalNote.doc(options.id).get({
      success:res=>{
        this.setData({
          notes:res.data
        });
      this.data.id = options.id;
      this.data.noteTitle = res.data.title;
      this.data.noteValue = res.data.value;
      console.log(res.data);
      //console.log(this.data.noteTitle);
      //console.log(this.data.noteValue);
      }
    })
  }, 
  onshow: function (event) {

  },
  onUnload: function (event) {
    
  }
})