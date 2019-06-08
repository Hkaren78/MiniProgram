// miniprogram/pages/viewNoteBook/viewnotebook.js
const db = wx.cloud.database()
const personalNote = db.collection('personal_note')
Page({
  data: {
    page:0,
    show: false,
    Yvalue:"",
    Mvalue:"",
    dataYear:"",
    dataMonth:"",
    flag:true
  }, 
  choosedate: function (event) {
    this.setData({ show: true })
  },
  release:function(event){
    this.setData({show:false})
  },
  onChangeYear:function(event){
    //输入年份
    this.data.Yvalue = event.detail
    this.data.dataYear = event.detail
    console.log(event.detail);
  },
  onChangeMonth:function(event){
    //输入月份
    this.data.Mvalue = event.detail
    this.data.dataMonth = event.detail
    console.log(event.detail);
  },
  inputdone:function(event){
    //日期输入完成
    this.setData({ 
      show: false,
      flag:false
      })
    this.onShow();
  },
  jumpTo:function(event){
    var id = event.currentTarget.dataset.noteId;
    var title = event.currentTarget.dataset.noteTitle;
    var value = event.currentTarget.dataset.noteValue;
    wx.navigateTo({
      url: '/pages/modifierNoteBook/readnotebook?id=' + id + '&title=' + title + '&value=' + value
    });
  },
  
  onClose: function (event) {
    const { position, instance } = event.detail;
    switch (position){
      case 'right':
        //删除
        var info = event.currentTarget.dataset.noteId;
        personalNote.doc(info).remove().then(res => {
          this.onShow();
          instance.close();
        });
        break;
      case 'outside':
        //这玩意没啥用
        instance.close();
        break;
    }
  },
  onLoad: function (event) {
    //console.log("vo");
  },
  
  //触底加载
  onReachBottom: function (res) {
    //console.log("~~~")
    let page=this.data.page+20;
    personalNote.skip(page).get().then(res => {
      let new_data=res.data
      let old_data=this.data.notes
      this.setData({
        notes: old_data.concat(new_data),
        page:page
      }),res=>{
        console.log(res);
      }
    })
  }, 
  onShow:function(event) {
    if(this.data.flag){
      //console.log("true")
      personalNote.orderBy('dateYear', 'desc').orderBy('dateMonth', 'desc').get().then(res => {
        this.setData({
          notes: res.data
        })
      });
    }
    else{
      personalNote.where({
        dateYear: parseInt(this.data.dataYear.value),
        dateMonth: parseInt(this.data.dataMonth.value)
      }).orderBy('dateYear', 'desc').orderBy('dateMonth', 'desc').get().then(res=>{
        console.log(res.data)
        this.setData({
          notes: res.data,
          flag: true,
          Yvalue:"",
          Mvalue:""
        })
      })
    }
  },

  onUnload: function (event) {
    
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})