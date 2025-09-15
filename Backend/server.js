import { config } from "dotenv";
config(); // <-- Load .env before anything else

import app from "./app.js";
import cloudinary from "cloudinary";

// Configure cloudinary with environment variables
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
