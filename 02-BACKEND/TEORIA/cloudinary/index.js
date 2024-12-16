import { v2 as cloudinary } from 'cloudinary';

(async function () {

    // Configuration
    cloudinary.config({
        cloud_name: 'dtuyllggh',
        api_key: '453898767921294',
        api_secret: 'k1tlAp_HQS_DjJERsd4qoXa9mhA' // Click 'View API Keys' above to copy your API secret
    });

    // Upload an image
    const uploadResult = await cloudinary.uploader
        .upload(
            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
            public_id: 'shoes',
        }
        )
        .catch((error) => {
            console.log(error);
        });

    console.log(uploadResult);

    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });

    console.log(optimizeUrl);

    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url('shoes', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });

    // {effect: "enhance"}

    const iaURL = cloudinary.url('shoes', { effect: "gen_background_replace:prompt_Minimalist background with a soft pastel gradient even lighting" });

    console.log('iaURL', iaURL);
})();