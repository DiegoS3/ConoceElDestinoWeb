
export const api = '/rest/api'

export const endpoint = {
  SEND_MAIL: 'https://script.google.com/macros/s/AKfycbwCGzQ4DBrXZhXVljlxH3c6uETyLQ-1x4SmBcnWAigJnp7Etiw/exec',

  //CATEGORY
  CATEGORY_LIST: `${api}/category/search`,
  CATEGORY_BY_NAME: `${api}/category`,

  //PRODUCT
  PRODUCT_BY_CATEGORY: `${api}/product/category/search`,
  ALL_PRODUCTS: `${api}/product/search`,

  //IMAGES
  IMAGE_BY_PRODUCT: `${api}/images/search`

}

