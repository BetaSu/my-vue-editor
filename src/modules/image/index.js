import tab from './tab'

export default {
  name: 'image',
  i18n: 'image',
  type: 'block',
  canUploadSameImage: true,
  maxSize: 512 * 1024,
  compress: {
    width: 1600,
    height: 1600,
    quality: 0.8
  },
  tab
}
