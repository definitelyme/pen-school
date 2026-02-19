// Auto-updated from Cloudinary on 2026-02-19T23:09:54.795Z

export const videosData = [
  {
    id: 1,
    title: 'School Life - Video 1',
    thumbnail: 'https://res.cloudinary.com/dlpk3eltq/video/upload/c_fill,h_300,so_0,w_400/WhatsApp_Video_2026-02-16_at_20.52.02_igifzn.jpg?_a=BAMAOGP/0',
    videoUrl: 'https://res.cloudinary.com/dlpk3eltq/video/upload/f_mp4,q_auto/WhatsApp_Video_2026-02-16_at_20.52.02_igifzn?_a=BAMAOGP/0',
    category: 'School Life',
    duration: 0
  }
]

export const getHomeVideos = () => {
  return videosData.slice(0, 6)
}
