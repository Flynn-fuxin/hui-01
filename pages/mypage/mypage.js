// pages/mypage/mypage.js
var flag = true
var color
Page({
  /**
   * 页面的初始数据
   */
  data: {
    color : "userinfo-nickname"
  },
  click: function () {
    console.log("点击了文字");
    if (flag) {
      color = "usermotto_01";
      flag = false;
    } else {
      color = "userinfo-nickname";
      flag = true;
    }
    this.setData({
      color
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})