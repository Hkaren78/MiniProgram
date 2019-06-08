//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    actionHiddenNote: true,
    chooseNote: [
      { bindtap: 'Menu1', txt: '查看记事本' },
      { bindtap: 'Menu2', txt: '创建新记事本' },
    ],
  },
  toWords:function(event){
    wx.navigateTo({
      url: '/pages/home/home',
    })
  }
  ,
  toCalendar:function(event){
    wx.navigateTo({
      url: '/pages/calendar/calendar',
    })
  },
  toPost:function(event){
    wx.navigateTo({
      url: '/pages/post/post',
    })
  },
  toNote:function(event){
    this.setData({
      actionHiddenNote: !this.data.actionHiddenNote
    })
  },
  bindMenu1:function(event){
    this.setData({
      actionHiddenNote: !this.data.actionHiddenNote
    })
    wx.navigateTo({
      url: '/pages/viewNoteBook/viewnotebook',
    })
  },
  bindMenu2: function (event) {
    this.setData({
      actionHiddenNote: !this.data.actionHiddenNote
    })
    wx.navigateTo({
      url: '/pages/writeNoteBook/writenotebook',
    })
  },
  cancel:function(event){
    this.setData({
      actionHiddenNote: !this.data.actionHiddenNote
    })
  }
})
