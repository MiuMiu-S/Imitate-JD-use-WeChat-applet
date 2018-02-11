//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    goods: {},
    refreshHeight: 0,//屏幕高度
    flag: true,
    searchLoading: true, //"上拉加载"的变量，默认false，隐藏  
    searchLoadingComplete: false,  //“没有数据”的变量，默认false，隐藏  
    _num: "1"//今秒杀数据切换
  },
  /*转发开始*/
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '京东购物，多·快·好·省',
      path: '/page/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }, /*转发结束*/
  searchgoods: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  demo: function (e) {
    let that = this
    that.setData({
      flag: false
    })

    console.log("dchdsuycfgducvchfvuibhivuh")
    wx.request({
      url: 'http://m.ge960.com/searchproductnew.htm',
      success: function (res) {
        console.log(res)
        if (res != 0) {
          let searchList = [];
          that.setData({
            searchList: that.data.goods
          })
          searchList = that.data.goods.concat(res.data.pb.data)
          that.setData({
            goods: searchList,
            flag: true
          })
          console.log(that.data.goods.length)
        } else {
          that.setData({
            searchLoadingComplete: true, //把“没有数据”设为true，显示  
            searchLoading: false  //把"上拉加载"的变量设为false，隐藏  
          })
        }
      },
      fail: function () {
        console.log("数据请求失败！")
      }
    })
  },
  //点击今日秒杀下的时间切换数据
  changepro: function(e){
    // console.log("qwwew")
    //请求数据
    let that = this
    that.setData({
      goods: {}
    })
    wx.request({
      url: 'http://m.ge960.com/searchproductnew.htm',
      success: function (res) {
        // console.log(res.data.pb.data)
        that.setData({
          goods: res.data.pb.data
        })
        // console.log(res)
        // console.log(res.data.pb.data.length)
        // console.log(that.data.goods.length)
      },
      fail: function () {
        console.log("数据请求失败！")
      }
    })
    console.log(e.target)
    console.log("-----" + e.currentTarget.dataset.num)
    this.setData({
      _num: e.currentTarget.dataset.num
    })  
  },






  //事件处理函数
  scanQR: function () {
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        console.log(res)//获得返回的结果，根据业务需求进行下一步操作
      }
    })
  },
  // 跳转到详情页
  gotodetail: function (e) {
    var id = e.currentTarget.id
    wx.navigateTo({
      url: '../detail/detail?name=product&id=' + id
    })
    console.log("xxxxxxx")
  },
  onLoad: function () {
    let that = this
    console.log('onLoad')
    //获取屏幕高度
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          refreshHeight: res.windowHeight
        })
        console.log("屏幕高度: " + res.windowHeight)
      }
    })
    //请求数据
    wx.request({
      url: 'http://m.ge960.com/searchproductnew.htm',
      success: function (res) {
        // console.log(res.data.pb.data)
        that.setData({
          goods: res.data.pb.data
        })
        console.log(res.data.pb.data)
        console.log(res.data.pb.data.length)
        console.log(that.data.goods.length)
      },
      fail: function () {
        console.log("数据请求失败！")
      }
    })










    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
