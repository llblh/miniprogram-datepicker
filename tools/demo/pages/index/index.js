Page({
  data: {
    solar: '',
    lunar: '',
  },
  bindSolarChange(e) {
    const {value, data} = e.detail
    this.setData({
      solar: value
    })
    console.log(data)
  },
  bindLunarChange(e) {
    const {value, data} = e.detail
    this.setData({
      lunar: value,
    })
    console.log(data)
  },
})
