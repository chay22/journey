class FeatureDetect {
  constructor() {
    this._detections = {}
  }
  webStorage() {
    if (typeof this._detections.webStorage !== 'undefined') {
      return this._detections.webStorage
    }

    const test = 'test'
    try {
      localStorage.setItem(test, test)
      localStorage.removeItem(test)
      this._detections.webStorage = true
    } catch (e) {
      this._detections.webStorage = false
    }

    return this._detections.webStorage
  }
}

export default (ctx, inject) => {
  inject('isSupported', new FeatureDetect())
}
