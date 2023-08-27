/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'res.cloudinary.com', 
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      'm.facebook.com',
      'https://m.facebook.com/photo/view_full_size/?fbid=3599384557049543&ref_component=mbasic_photo_permalink&ref_page=%2Fwap%2Fphoto.php&refid=13&__tn__=%2Cg,https://m.facebook.com/photo/view_full_size/?fbid=3599384613716204&ref_component=mbasic_photo_permalink&ref_page=%2Fwap%2Fphoto.php&refid=13&__tn__=%2Cg,https://m.facebook.com/photo/view_full_size/?fbid=3599384567049542&ref_component=mbasic_photo_permalink&ref_page=%2Fwap%2Fphoto.php&refid=13&__tn__=%2Cg' 
    ]
  }
}

module.exports = nextConfig
