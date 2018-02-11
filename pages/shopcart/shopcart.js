// pages/search/search.js
Page({

  data: {
    carts:// 购物车内商品数据
    [
      { id: 1, title: '华为 HUAWEI P10 全网通 4GB+64G 曜石黑 移动联通电信4GB手机', num: 4, price: 4500, selected: true },
      { id: 2, title: 'Apple苹果 全网通 4GB+64G 曜石黑 移动联通电信4GB手机', num: 1, price: 6800, selected: true },
      { id: 3, title: '小米 全网通 4GB+64G 曜石黑 移动联通电信4GB手机', num: 2, price: 4800, selected: true }
    ],
    //  hasList: tue,          // 列表是否有数据
    totalPrice: 0,           // 总价，初始为0
    selectAll: true,    // 全选状态，默认不全选
    selectNum: 0         //选中的件数

  }
  //计算总价格
  , totlePrice: function () {
    let carts = this.data.carts;
    let total = 0;
    let num = 0;
    for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
      if (carts[i].selected) {                   // 判断选中才会计算价格
        total += carts[i].num * carts[i].price;
        num += carts[i].num;
      }
    }
    this.setData({
      selectNum: num,
      totalPrice: total.toFixed(2)
    });
  }
  /**
   * 生命周期函数--监听页面显示
   */
  , onShow: function () {
    this.totlePrice()
  }
  //选中反选
  , selected: function (e) {
    const index = e.currentTarget.dataset.num;
    let carts = this.data.carts;
    let selectAll = this.data.selectAll;
    let count = 0;
    carts[index].selected = !carts[index].selected;
    //判断全选状态
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].selected == true) {
        count++;
      }
    }
    if (count == 3) {
      selectAll = true;
    } else {
      selectAll = false;
    }
    this.setData({
      carts: carts,
      selectAll: selectAll
    });
    this.totlePrice();
  }
  //全选
  , selectedAll: function () {
    let selectAll = this.data.selectAll;   // 是否全选状态
    selectAll = !selectAll;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAll;    // 改变所有商品状态
    }
    this.setData({
      selectAll: selectAll,
      carts: carts
    });
    this.totlePrice();     // 获取总价
  }
  //增加
  ,addNum : function(e){
    const index = e.currentTarget.dataset.num;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.totlePrice();
  }
  //减少
  ,subNum : function(e){
    const index = e.currentTarget.dataset.num;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.totlePrice();
  }
})

