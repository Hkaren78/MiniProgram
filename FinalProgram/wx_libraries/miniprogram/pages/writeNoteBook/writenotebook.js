// miniprogram/pages/writeNoteBook/writenotebook.js
const db = wx.cloud.database()
const personalNote = db.collection('personal_note')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Ivalue:"",
    Tvalue:"",
    noteTitle:"",
    noteValue:"",
    time:"",
    year:"",
    month:"",
    day:""
  },
  onChangeTitle: function(event) {
    // event.detail 为当前输入的值
    this.data.Ivalue = event.detail;
    this.data.noteTitle = event.detail;
    console.log(event.detail);
  },
  onChangeNote:function(event) {
    // event.detail 为当前输入的值
    this.data.Tvalue = event.detail;
    this.data.noteValue = event.detail;
    console.log(event.detail);
  },
  addPerNote:function (event) {
    var that = this;
    var date=new Date();
    that.data.time=date;
    that.data.year = date.getFullYear();
    that.data.month = date.getMonth() + 1;
    that.data.day = date.getDate();
    console.log(event)
    personalNote.add({
      data: {
        title: that.data.noteTitle,
        value: that.data.noteValue,
        time: that.data.time,
        dateYear: that.data.year,
        dateMonth: that.data.month,
        dateDay: that.data.day,
      }
    }).then(res => {
      wx.showToast({//此处仅仅是消息框的持续时间，不保证数据更新后再跳转
        title: '添加成功',
        icon: 'success',
        duration: 3000
      })
      setTimeout(function () {//延时指令，保证数据库内容得到更新
        //要延时执行的代码
        //这里可以添加返回到某一界面
      }, 3000);
      this.setData({
        Ivalue:"",
        Tvalue:""
      })
    })
  }
})