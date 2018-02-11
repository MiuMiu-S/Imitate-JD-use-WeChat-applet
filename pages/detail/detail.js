Page({
  data: {
    imgUrls: [
      '../../images/57d0d400Nfd249af4.jpg!q70.jpg',
      '../../images/57d0d400Nb18c076a.jpg!q70.jpg',
      '../../images/57d0d401N72fc39a4.jpg!q70.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular: true
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})