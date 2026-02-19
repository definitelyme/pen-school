// Auto-updated from Cloudinary on 2026-02-19T23:09:54.794Z

export const galleryData = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/dlpk3eltq/image/upload/c_fill,f_auto,h_600,q_auto,w_800/IMG_20240802_170517_052_hjlilj?_a=BAMAOGP/0',
    thumbnail: 'https://res.cloudinary.com/dlpk3eltq/image/upload/c_fill,f_auto,h_300,q_auto,w_400/IMG_20240802_170517_052_hjlilj?_a=BAMAOGP/0',
    category: 'Activities',
    alt: 'School activities'
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/dlpk3eltq/image/upload/c_fill,f_auto,h_600,q_auto,w_800/IMG_20230707_101948_ea7xhe?_a=BAMAOGP/0',
    thumbnail: 'https://res.cloudinary.com/dlpk3eltq/image/upload/c_fill,f_auto,h_300,q_auto,w_400/IMG_20230707_101948_ea7xhe?_a=BAMAOGP/0',
    category: 'Activities',
    alt: 'School activities'
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dlpk3eltq/image/upload/c_fill,f_auto,h_600,q_auto,w_800/IMG_20240524_100153_208_z0fslu?_a=BAMAOGP/0',
    thumbnail: 'https://res.cloudinary.com/dlpk3eltq/image/upload/c_fill,f_auto,h_300,q_auto,w_400/IMG_20240524_100153_208_z0fslu?_a=BAMAOGP/0',
    category: 'Activities',
    alt: 'School activities'
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/dlpk3eltq/image/upload/c_fill,f_auto,h_600,q_auto,w_800/514025150_23915347334793804_554305396500455224_n_gffpva?_a=BAMAOGP/0',
    thumbnail: 'https://res.cloudinary.com/dlpk3eltq/image/upload/c_fill,f_auto,h_300,q_auto,w_400/514025150_23915347334793804_554305396500455224_n_gffpva?_a=BAMAOGP/0',
    category: 'Activities',
    alt: 'School activities'
  },
  {
    id: 5,
    url: 'https://res.cloudinary.com/dlpk3eltq/image/upload/c_fill,f_auto,h_600,q_auto,w_800/513630250_23915345268127344_2221431099363552421_n_abdipm?_a=BAMAOGP/0',
    thumbnail: 'https://res.cloudinary.com/dlpk3eltq/image/upload/c_fill,f_auto,h_300,q_auto,w_400/513630250_23915345268127344_2221431099363552421_n_abdipm?_a=BAMAOGP/0',
    category: 'Activities',
    alt: 'School activities'
  },
  {
    id: 6,
    url: 'https://res.cloudinary.com/dlpk3eltq/image/upload/c_fill,f_auto,h_600,q_auto,w_800/513642309_23915347294793808_8814259010121631819_n_ls8hlh?_a=BAMAOGP/0',
    thumbnail: 'https://res.cloudinary.com/dlpk3eltq/image/upload/c_fill,f_auto,h_300,q_auto,w_400/513642309_23915347294793808_8814259010121631819_n_ls8hlh?_a=BAMAOGP/0',
    category: 'Activities',
    alt: 'School activities'
  },
  {
    id: 7,
    url: 'https://res.cloudinary.com/dlpk3eltq/image/upload/c_fill,f_auto,h_600,q_auto,w_800/512712102_23915347434793794_1796761315638286033_n_w2r1ql?_a=BAMAOGP/0',
    thumbnail: 'https://res.cloudinary.com/dlpk3eltq/image/upload/c_fill,f_auto,h_300,q_auto,w_400/512712102_23915347434793794_1796761315638286033_n_w2r1ql?_a=BAMAOGP/0',
    category: 'Activities',
    alt: 'School activities'
  },
  {
    id: 8,
    url: 'https://res.cloudinary.com/dlpk3eltq/image/upload/c_fill,f_auto,h_600,q_auto,w_800/511330586_23915345264794011_1826525302396903002_n_jrhcjb?_a=BAMAOGP/0',
    thumbnail: 'https://res.cloudinary.com/dlpk3eltq/image/upload/c_fill,f_auto,h_300,q_auto,w_400/511330586_23915345264794011_1826525302396903002_n_jrhcjb?_a=BAMAOGP/0',
    category: 'Activities',
    alt: 'School activities'
  }
]

export const getGalleryByCategory = (category) => {
  return galleryData.filter(item => item.category === category)
}
