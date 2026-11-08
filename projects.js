// Sample projects array
const projects = [
    {
        title: "Education Platform",
        lightImage: "pictures/project-1-light.png",
        darkImage: "pictures/project-1-dark.png",
        darkmode: true,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/edu-web/",
        githubProfileLink: "https://github.com/nero404-dev/edu-web/",
        description: "A simple template for educational purposes. A teacher or group of teachers can own this type of website to help clients reach them out. A dynamic platform designed to enhance learning experiences for students and educators alike. This project showcases user-friendly features and valuable resources aimed at fostering a love for learning in a digital age."
    },
    {
        title: "Gym Website",
        image: "pictures/project-2.png",
        darkmode: false,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/pack-5-projects/gym_one.html",
        githubProfileLink: "https://github.com/nero404-dev/pack-5-projects",
        description: "A comprehensive platform dedicated to promoting health and fitness. This project offers users easy access to workout plans, nutrition tips, and community support to inspire a healthier lifestyle."
    },
    {
        title: "Nutrition Website",
        image: "pictures/project-3.png",
        darkmode: false,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/pack-5-projects/nutrition.html",
        githubProfileLink: "https://github.com/nero404-dev/pack-5-projects",
        description: "A resourceful platform designed to empower users with knowledge about healthy eating habits and balanced diets. This project provides insightful articles, meal plans, and nutritional guides to help individuals make informed dietary choices."
    },
    {
        title: "Clothing Store",
        image: "pictures/project-4.png",
        darkmode: false,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/kashmir/",
        githubProfileLink: "https://github.com/nero404-dev/kashmir",
        description: "An online boutique that offers a curated selection of stylish apparel for every occasion. This project combines a seamless shopping experience with trendy designs, ensuring customers find the perfect outfits to express their unique style."
    },
    {
        title: "Restaurant Shop",
        image: "pictures/project-5.png",
        darkmode: false,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/Fatimas-Lebanese-Restaurant/home.html",
        githubProfileLink: "https://github.com/nero404-dev/Fatimas-Lebanese-Restaurant",
        description: "A vibrant platform designed to showcase delicious cuisine and create a memorable dining experience. This project features an interactive menu, reservation system, and engaging content that invites food lovers to explore and enjoy our culinary offerings."
    },
    {
        title: "E-Commerce Website",
        image: "pictures/project-6.png",
        darkmode: false,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/pack-4-projects/ecommerce_one.html",
        githubProfileLink: "https://github.com/nero404-dev/pack-4-projects",
        description: "a versatile online marketplace that connects buyers and sellers with ease. This project features a user-friendly interface, secure payment options, and a diverse range of products, making shopping convenient and enjoyable for everyone."
    },
    {
        title: "Products Store",
        image: "pictures/project-7.png",
        darkmode: false,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/pack-4-projects/wooden.html",
        githubProfileLink: "https://github.com/nero404-dev/pack-4-projects",
        description: "an engaging platform dedicated to offering a wide variety of quality products for consumers. This project is designed with an intuitive layout and robust search features, ensuring that customers can easily find and purchase the items they need."
    },
    {
        title: "Products Store",
        image: "pictures/project-8.png",
        darkmode: false,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/pack-4-projects/candles.html",
        githubProfileLink: "https://github.com/nero404-dev/pack-4-projects",
        description: "an engaging platform dedicated to offering a wide variety of quality products for consumers. This project is designed with an intuitive layout and robust search features, ensuring that customers can easily find and purchase the items they need."
    },
    {
        title: "E-Commerce Website",
        image: "pictures/project-9.png",
        darkmode: false,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/pack-4-projects/ecommerce_two.html",
        githubProfileLink: "https://github.com/nero404-dev/pack-4-projects",
        description: "a versatile online marketplace that connects buyers and sellers with ease. This project features a user-friendly interface, secure payment options, and a diverse range of products, making shopping convenient and enjoyable for everyone."
    },
    {
        title: "Watches Store",
        lightImage: "pictures/project-10-light.png",
        darkImage: "pictures/project-10-dark.png",
        darkmode: true,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/pack-4-projects/watches.html",
        githubProfileLink: "https://github.com/nero404-dev/pack-4-projects",
        description: "a stylish online destination for watch enthusiasts and casual shoppers alike. This project showcases an exquisite collection of timepieces, complete with detailed descriptions and high-quality images, making it easy for visitors to find their perfect watch."
    },
    {
        title: "Coffee Shop",
        image: "pictures/project-11.png",
        darkmode: false,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/pack-3-projects/coffee_shop.html",
        githubProfileLink: "https://github.com/nero404-dev/pack-3-projects",
        description: "a cozy online hub for coffee lovers to explore our artisanal brews and delightful treats. This project features an inviting layout, menu highlights, and a warm atmosphere that captures the essence of our coffee shop experience."
    },
    // {
    //     title: "Insurance Design",
    //     image: "pictures/project-12.png",
    //     liveLink: "https://nero404-dev.github.io/pack-3-projects/insurance.html",
    //     description: "a comprehensive platform designed to provide users with essential information and services related to various insurance options. This project features user-friendly tools for comparing policies, obtaining quotes, and understanding coverage, making the insurance process straightforward and accessible."
    // },
    {
        title: "Model Magazine",
        image: "pictures/project-13.png",
        darkmode: false,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/pack-1-projects/model.html",
        githubProfileLink: "https://github.com/nero404-dev/pack-1-projects",
        description: "designed to help aspiring models create a stunning and effective portfolio that showcases their unique style and versatility. This project emphasizes the importance of high-quality images that highlight a model's look, personality, and range, making a strong impression on agencies and clients alike."
    },
    {
        title: "Model Portfolio",
        image: "pictures/project-14.png",
        darkmode: false,
        liveLink: "https://nero404-dev.github.io/pack-1-projects/model_v2.html",
        githubProfileLink: "https://github.com/nero404-dev/pack-1-projects",
        description: "designed to help aspiring models create a stunning and effective portfolio that showcases their unique style and versatility. This project emphasizes the importance of high-quality images that highlight a model's look, personality, and range, making a strong impression on agencies and clients alike."
    },
    // {
    //     title: "Random Portfolio",
    //     image: "pictures/project-15.png",
    //     liveLink: "https://nero404-dev.github.io/pack-1-projects/portfolio.html",
    //     description: "Random Portfolio for person, just the design matters in this case."
    // },
    // {
    //     title: "Random Portfolio",
    //     image: "pictures/project-16.png",
    //     liveLink: "https://nero404-dev.github.io/pack-1-projects/portfolio_v2.html",
    //     description: "Random Portfolio for person, just the design matters in this case."
    // },
    {
        title: "Random Portfolio",
        image: "pictures/project-17.png",
        darkmode: false,
        type: "portfolio",
        liveLink: "https://nero404-dev.github.io/pack-1-projects/portfolio_v3.html",
        githubProfileLink: "https://github.com/nero404-dev/pack-1-projects",
        description: "Random Portfolio for person, just the design matters in this case."
    },
    // {
    //     title: "Stock Market Website",
    //     image: "pictures/project-18.png",
    //     liveLink: "https://nero404-dev.github.io/pack-1-projects/stock_market.html",
    //     description: "a comprehensive platform designed to provide insights and data on stock market trends and performance. This project focuses on delivering real-time updates, analysis of market movements, and educational resources for investors of all levels."
    // },
    {
        title: "Graphic Designer Portfolio",
        image: "pictures/project-19.png",
        darkmode: false,
        type: "portfolio",
        liveLink: "https://nero404-dev.github.io/moni-portfolio/",
        githubProfileLink: "https://github.com/nero404-dev/moni-portfolio",
        description: "a curated showcase of my creative work and design expertise. This project highlights a diverse range of graphic design projects, demonstrating my skills in visual communication, branding, and digital design."
    },
    {
        title: "Products Store",
        image: "pictures/project-20.png",
        darkmode: false,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/CICA-website/",
        githubProfileLink: "https://github.com/nero404-dev/CICA-website",
        description: "an engaging platform dedicated to offering a wide variety of quality products for consumers. This project is designed with an intuitive layout and robust search features, ensuring that customers can easily find and purchase the items they need."
    },
    {
        title: "Real-Estate Website",
        image: "pictures/project-21.png",
        darkmode: false,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/real-estate/",
        githubProfileLink: "https://github.com/nero404-dev/real-estate",
        description: "a comprehensive showcase of my expertise in real estate investment and property management. This project is designed to highlight my approach to building a diverse and profitable real estate portfolio, which serves as a solid financial foundation capable of weathering market fluctuations."
    },
    // {
    //     title: "Movies Website",
    //     image: "pictures/project-22.png",
    //     liveLink: "https://nero404-dev.github.io/movies-web/",
    //     description: "a dynamic platform dedicated to film enthusiasts looking to discover, watch, and discuss a wide array of movies. This project aims to provide users with an engaging experience, featuring a comprehensive database of films, streaming options, and community interactions."
    // },
    {
        title: "Ice Cream Shop",
        image: "pictures/project-23.png",
        darkmode: false,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/ice-cream/",
        githubProfileLink: "https://github.com/nero404-dev/ice-cream",
        description: "a delightful online destination for ice cream lovers of all ages! This project is designed to showcase a variety of delicious ice cream flavors, toppings, and treats, making it easy for customers to indulge in their favorite frozen desserts."
    },
    {
        title: "Movie Poster",
        image: "pictures/project-24.png",
        darkmode: false,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/pack-2-projects/joker.html",
        githubProfileLink: "https://github.com/nero404-dev/pack-2-projects",
        description: "where creativity meets cinema! This project focuses on crafting visually stunning and impactful movie posters that capture the essence of films and attract audiences."
    },
    // {
    //     title: "Home Design",
    //     image: "pictures/project-25.png",
    //     liveLink: "https://nero404-dev.github.io/pack-2-projects/interior.html",
    //     description: "a creative platform dedicated to transforming living spaces into beautiful and functional environments. This project showcases my expertise in interior design, focusing on innovative concepts that enhance both aesthetics and practicality."
    // },
    {
        title: "Pizza Shop",
        image: "pictures/project-26.png",
        darkmode: false,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/lord-pizza/",
        githubProfileLink: "https://github.com/nero404-dev/lord-pizza",
        description: "your go-to destination for delicious, handcrafted pizzas made with the freshest ingredients! This project is designed to showcase our mouthwatering menu, inviting atmosphere, and commitment to quality, making it easy for pizza lovers to indulge in their favorite slices."
    },
    {
        title: "Car Dealer",
        image: "pictures/project-27.png",
        darkmode: false,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/car-dealer/",
        githubProfileLink: "https://github.com/nero404-dev/car-dealer",
        description: "Discover a diverse selection of quality vehicles at our trusted car dealership, where customer satisfaction is our top priority. Whether you're looking for a new or used car, our knowledgeable team is here to guide you every step of the way. Enjoy competitive pricing and flexible financing options tailored to fit your budget. Drive away in your perfect car today!"
    },
    {
        title: "Nero's Portfolio V1",
        lightImage: "pictures/project-28-light.png",
        darkImage: "pictures/project-28-dark.png",
        darkmode: true,
        type: "portfolio",
        liveLink: "https://nero404-dev.github.io/nero404-portfolio-v1/",
        githubProfileLink: "https://github.com/nero404-dev/nero404-portfolio-v1",
        description: "Version 1 of Nero's Portfolio !!"
    },
    {
        title: "Pet Shop",
        image: "pictures/project-29.png",
        darkmode: false,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/four-paws/",
        githubProfileLink: "https://github.com/nero404-dev/four-paws",
        description: "Your one-stop destination for all your furry, feathered, and scaly companions' needs! Explore our extensive selection of high-quality pet supplies, food, and accessories, along with expert advice and resources to help you provide the best care for your beloved pets."
    },
    {
        title: "Actor's Portfolio",
        image: "pictures/project-30.png",
        darkmode: false,
        type: "portfolio",
        liveLink: "https://nero404-dev.github.io/Hassan-Madi/",
        githubProfileLink: "https://github.com/nero404-dev/Hassan-Madi",
        description: "The actor's portfolio website I created for my client, which you can view above, serves as an engaging platform to showcase their talents and accomplishments in the acting world. It includes a professional bio, high-quality headshots, demo reels, and a detailed filmography, helping them stand out to casting directors and industry professionals."
    },
    {
        title: "Model's Portfolio",
        image: "pictures/project-31.png",
        darkmode: false,
        type: "portfolio",
        liveLink: "https://nero404-dev.github.io/Model-Nancy/",
        githubProfileLink: "https://github.com/nero404-dev/Model-Nancy",
        description: "The model's portfolio website I created, which you can view above, showcases their stunning work and achievements in the modeling industry. It features a professional bio, captivating photographs, and a list of collaborations, helping them attract attention from agencies and clients alike."
    },
    {
        title: "Model's Portfolio",
        image: "pictures/project-32.png",
        darkmode: false,
        type: "portfolio",
        liveLink: "https://nero404-dev.github.io/Model-Nariman/",
        githubProfileLink: "https://github.com/nero404-dev/Model-Nariman",
        description: "The model's portfolio website I designed, which you can view above, serves as a vibrant display of their unique style and modeling experience. It includes an engaging bio, high-quality images, and a detailed overview of their projects, making it easy for potential clients to see their versatility and talent."
    },
    {
        title: "Luxury Restaurant Website",
        image: "pictures/project-33.png",
        darkmode: false,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/Trillionaire-Society/",
        githubProfileLink: "https://github.com/nero404-dev/Trillionaire-Society",
        description: "Experience the Essence of Fine Dining Online — Our luxury restaurant website combines elegant design with a seamless browsing experience, reflecting the sophistication of your cuisine. From stunning visuals to smooth reservations, every detail is crafted to leave a lasting impression — inviting guests to indulge in your restaurant's world of taste, class, and perfection."
    },
    {
        title: "Digital Marketing Agency Website",
        image: "pictures/project-34.png",
        darkmode: false,
        type: "ecommerce",
        liveLink: "https://nero404-dev.github.io/Becoming-Social/",
        githubProfileLink: "https://github.com/nero404-dev/Becoming-Social",
        description: "Where Vision Meets Influence — Our luxury marketing agency blends creativity, strategy, and precision to elevate brands beyond expectations. We craft captivating stories, design premium digital experiences, and deliver measurable impact — turning prestige into presence and ideas into influence."
    },
    {
        title: "University Doctor's Portfolio",
        lightImage: "pictures/project-35-light.png",
        darkImage: "pictures/project-35-dark.png",
        darkmode: true,
        type: "portfolio",
        liveLink: "https://nero404-dev.github.io/Vivian-Rizk/",
        githubProfileLink: "https://github.com/nero404-dev/Vivian-Rizk",
        description: "Dedicated to Knowledge and Discovery — As a university researcher and educator, I strive to advance both scientific understanding and academic excellence. My work bridges teaching, research, and innovation — shaping future minds while contributing to meaningful developments in my field."
    },
];