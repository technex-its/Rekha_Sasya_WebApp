export const config = {
    social: {
        instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM,
        facebook: import.meta.env.VITE_SOCIAL_FACEBOOK,
        youtube: import.meta.env.VITE_SOCIAL_YOUTUBE,
        twitter: import.meta.env.VITE_SOCIAL_TWITTER,
        gmail: import.meta.env.VITE_SOCIAL_EMAIL,
        linkedin: import.meta.env.VITE_SOCIAL_LINKEDIN,
    },
    recentPhotos: {
        image1: import.meta.env.VITE_RECENTPHOTOS_IMAGE1,
        image2: import.meta.env.VITE_RECENTPHOTOS_IMAGE2,
        image3: import.meta.env.VITE_RECENTPHOTOS_IMAGE3,

    },
  logoPath   : import.meta.env.VITE_LOGO_PATH,
};