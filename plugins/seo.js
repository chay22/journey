import Vue from 'vue'

class Seo {
  constructor(data) {
    this._data = data
  }
  static set(data) {
    return new Seo(data)
  }
  title() {
    return this._data.title
  }
  meta() {
    const SEO = this._data
    return [
      { hid: 'description', name: 'description', content: SEO.description },
      { hid: 'itemprop:name', itemprop: 'name', content: SEO.title },
      {
        hid: 'itemprop:description',
        itemprop: 'description',
        content: SEO.description
      },
      // { itemprop: 'image', content: 'SEO.image', hid: 'itemprop:image' },
      { hid: 'twitter:title', name: 'twitter:title', content: SEO.title },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: SEO.description
      },
      // { hid: 'twitter:image:src', name: 'twitter:image:src', content: SEO.image },
      { hid: 'og:title', name: 'og:title', content: SEO.title },
      {
        hid: 'og:description',
        name: 'og:description',
        content: SEO.description
      },
      // { hid: 'og:image', name: 'og:image', content: SEO.image },
      { hid: 'og:url', name: 'og:url', content: SEO.url || '/' }
    ]
  }
}

Vue.prototype.$seo = Seo
