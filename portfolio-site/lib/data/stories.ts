export interface Story {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  overview: string;
  experience: string;
  impact: string;
  takeaways: string[];
}

export const stories: Story[] = [
  {
    slug: "web-dev-journey",
    title: "How I Started My Web Development Journey",
    date: "2024",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    overview: "My journey into the world of web development started with a simple curiosity: how do the websites I use every day actually work? In my first year of B.Tech, I decided to stop being just a consumer of the web and start becoming a creator. This decision marked the beginning of countless late nights, debugging sessions, and moments of absolute triumph.",
    experience: "I started completely from scratch, learning the absolute fundamentals: HTML for structure and CSS for styling. It felt like learning a new language, but the immediate visual feedback of web development was addicting. Within weeks, I introduced JavaScript to the mix, transforming my static, lifeless pages into dynamic, interactive experiences. However, the real turning point was discovering modern frameworks. I dove headfirst into React, learning about components, state management, and the virtual DOM. Concurrently, I tackled backend development with Node.js and Express.js, wiring up MongoDB databases to build full-stack applications. Building my first end-to-end application—handling authentication, routing, and database operations—was a defining moment. It was frustrating at times, with endless console errors, but piecing it all together taught me resilience.",
    impact: "This foundational phase didn't just teach me syntax; it rewired my brain to think like an engineer. I learned how to break complex problems into smaller, manageable components, a skill that translates to every area of software development. Today, I can confidently conceptualize a product idea and bring it to life on the web.",
    takeaways: [
      "Mastering the fundamentals (HTML/CSS/JS) is crucial before jumping into complex modern frameworks.",
      "Building real, functional projects is exponentially faster for learning than just watching tutorials.",
      "The developer community is incredibly supportive—never hesitate to read documentation and ask for help."
    ]
  },
  {
    slug: "hackathon-runner-up",
    title: "Securing Runner-Up in My First Hackathon",
    date: "2025",
    coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
    overview: "Participating in a hackathon during my first year was a massive leap of faith. The atmosphere was electrifying—teams brainstorming, keyboards clacking, and the clock relentlessly ticking down. It was my first exposure to the high-stakes, rapid-prototyping environment of competitive programming.",
    experience: "Our team decided to tackle a complex civic problem under immense time pressure. The first few hours were pure chaos as we debated architectures and feature scopes. We quickly realized that in a hackathon, perfection is the enemy of completion. We stripped our idea down to its core MVP and divided the workload. I took charge of the frontend architecture while coordinating API endpoints with the backend. We barely slept, fueled mostly by caffeine, adrenaline, and the sheer thrill of building something functional in just 48 hours. When the coding period ended, the real challenge began: the exhibition. Presenting our raw, untested project to a panel of industry professionals and judges was incredibly nerve-wracking but exhilarating. We had to pitch not just our code, but the business value of our solution.",
    impact: "Winning the Runner-Up (2nd place) out of dozens of talented, older teams validated our hard work and ignited a fierce competitive drive in me. It proved that execution and teamwork can often outpace raw technical experience. This milestone gave me the confidence to take on increasingly ambitious projects.",
    takeaways: [
      "Working effectively under extreme pressure and sleep deprivation is a unique skill that hackathons teach best.",
      "Communication, delegation, and teamwork are just as critical to success as your technical coding skills.",
      "Presenting your ideas confidently to non-technical stakeholders is crucial to making a real-world impact."
    ]
  },
  {
    slug: "machine-learning-ai",
    title: "Diving Deep into Machine Learning & AI",
    date: "2026",
    coverImage: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1200",
    overview: "Transitioning from traditional web development into the realm of Machine Learning and AI opened up an entirely new paradigm of solving problems. Instead of writing explicit, hard-coded rules, I learned the art of teaching systems to infer patterns and learn directly from raw data.",
    experience: "The transition was heavily mathematical. I spent months studying the underlying statistics, calculus, and linear algebra that power ML models. I started by implementing foundational algorithms from scratch: K-Means Clustering, Apriori, Euclidean Distance algorithms, and Linear Regression. Once I understood the math, I moved to complex architectures, specifically Artificial Neural Networks (ANN). Building predictive models wasn't enough, though. I wanted people to interact with my models. I leveraged my Python skills alongside Streamlit to build interactive, web-based data dashboards. This allowed users to upload datasets, tweak hyperparameters in real-time, and watch the models adjust their predictions visually.",
    impact: "This journey expanded my technical toolkit immensely. It bridged the gap between raw data science and user-facing applications. It fundamentally changed how I approach data-driven solutions, allowing me to build software that doesn't just process data, but actively learns and predicts from it.",
    takeaways: [
      "Understanding the foundational mathematics behind algorithms is key to optimizing and debugging them.",
      "Data cleaning, preprocessing, and feature engineering often take significantly more time than the actual model training.",
      "Visualizing complex data effectively is absolutely essential for communicating insights to end-users."
    ]
  },
  {
    slug: "s4ds-tech-head",
    title: "Leading as Technical Head for S4DS",
    date: "2026",
    coverImage: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200",
    overview: "Being appointed as the Technical Head for the Society for Data Science (S4DS) at MIT Academy of Engineering was a profound honor and a massive shift in responsibility. It marked my transition from an individual contributor to a community leader.",
    experience: "In this leadership role, my day-to-day shifted from writing personal code to guiding a community of passionate students. I was responsible for the technical direction of the chapter. I spearheaded the organization of technical workshops, bootcamps, and hackathons. One of the most challenging aspects was designing curriculum that catered to both absolute beginners and advanced seniors. I actively mentored junior members, helping them debug code, review pull requests, and structure their projects. Furthermore, I had to coordinate with other board members, manage budgets for cloud credits, and handle the logistics of hosting guest speakers from the industry.",
    impact: "This role taught me that leadership in tech is far more than just knowing the most algorithms. It taught me how to manage technical projects at scale, foster a collaborative learning environment, and communicate complex concepts clearly. It heavily refined my soft skills, making me a much more well-rounded engineer.",
    takeaways: [
      "Leadership in the technology sector is about empowering others to succeed, not just writing the best code yourself.",
      "Organizing large-scale tech events requires meticulous logistical planning and incredibly strong communication.",
      "Teaching a difficult technical concept to an absolute beginner is the absolute best way to master it yourself."
    ]
  },
  {
    slug: "avishkar-state-competition",
    title: "Avishkar State Level Competition",
    date: "2026",
    coverImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200",
    overview: "Being selected to present my project at the prestigious Avishkar State Level Competition was a major milestone. It was an incredible opportunity to showcase my technical work on a much larger stage, surrounded by some of the brightest minds in the state.",
    experience: "The preparation for the competition was intense. I had to ensure that my project was not only technically flawless but also presented in a way that highlighted its real-world value. Standing at the exhibition booth, I explained the complex algorithms and architecture to industry veterans, academic judges, and curious students. It was an environment that demanded absolute confidence in the technical decisions I had made while building the product.",
    impact: "This experience significantly boosted my public speaking and technical presentation skills. Competing at the state level broadened my perspective on the caliber of innovation happening around me and motivated me to aim even higher for future projects.",
    takeaways: [
      "Technical brilliance must be matched with excellent presentation skills to truly make an impact.",
      "Defending your architectural choices to experts is the best way to uncover flaws you might have missed.",
      "Networking with other innovators is often just as valuable as the competition itself."
    ]
  },
  {
    slug: "baramati-ai-krushik-visit",
    title: "Industrial Visit: Baramati AI Center & Krushik",
    date: "2026",
    coverImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200",
    overview: "I had the incredible opportunity to participate in an industrial visit to the Baramati AI Center and the Krushik AI Agricultural Exhibition. This visit provided a firsthand look at how cutting-edge artificial intelligence is being applied to solve traditional agricultural challenges.",
    experience: "During the visit, I witnessed live demonstrations of AI-powered drones used for crop spraying, IoT sensors monitoring soil health in real-time, and predictive models forecasting harvest yields. Interacting with the engineers at the Baramati AI Center was eye-opening; they explained the practical difficulties of deploying sensitive hardware in harsh farming environments and how they train models on diverse, noisy agricultural data.",
    impact: "This visit was the primary inspiration behind my 'AgriSense AI' project. It shifted my perspective from building generic web apps to building specialized, domain-specific AI solutions that can directly impact people's livelihoods in rural sectors.",
    takeaways: [
      "AI has massive untapped potential in traditional sectors like agriculture.",
      "Deploying hardware in the real world introduces complexities that software simulators cannot replicate.",
      "The best software solutions are built by directly observing the end-users in their actual environment."
    ]
  },
  {
    slug: "symbiosis-infosys-iot",
    title: "Symbiosis Infosys Lab & IoT Certification",
    date: "2026",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    overview: "My deep dive into hardware engineering culminated in a visit to the Symbiosis Infosys Lab, where I spent time learning advanced IoT concepts and creating low-level, root IoT-related systems.",
    experience: "The lab environment was incredibly stimulating. I moved away from high-level web frameworks and started working directly with microcontrollers, breadboards, and various environmental sensors. I learned how to write C/C++ code for ESP32 and Arduino boards, established MQTT communication protocols, and built end-to-end pipelines that streamed live sensor data to a cloud dashboard. This hands-on learning was supplemented by the rigorous curriculum of the Infosys Springboard program, ultimately leading to me earning the prestigious IoT 12 Certification.",
    impact: "Earning the Infosys IoT 12 Certification validated my ability to bridge the gap between hardware and software. It fundamentally improved my understanding of network latency, low-level memory management, and hardware-software integration.",
    takeaways: [
      "Understanding hardware limitations makes you a much more efficient software engineer.",
      "IoT is the essential bridge that connects cloud computing to the physical world.",
      "Official certifications can provide structured learning paths and validate your technical expertise to employers."
    ]
  },
  {
    slug: "scaling-ai-products",
    title: "The Next Chapter: Scaling AI Products",
    date: "2026",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    overview: "As I look to the future, my focus has shifted entirely towards building production-grade, highly scalable AI products. It is one thing to build a prototype on a local machine, but deploying AI at scale to thousands of users requires a completely different engineering mindset.",
    experience: "I am actively diving into advanced system design, cloud architecture, and microservices. I am learning how to handle high-throughput data streams, manage vector databases for RAG (Retrieval-Augmented Generation) applications, and optimize API latency for large language models. This involves setting up robust CI/CD pipelines, containerizing applications with Docker, and understanding the nuances of serverless vs. dedicated compute. My current side projects reflect this—I am building full-stack web applications that deeply integrate with powerful AI APIs (like Gemini and OpenAI), focusing heavily on state management, asynchronous background processing, and bulletproof error handling to ensure a seamless user experience.",
    impact: "This intensive focus is actively preparing me for top-tier engineering roles. It allows me to merge my deep full-stack web technologies background with cutting-edge AI capabilities, enabling me to build robust products that solve real-world problems efficiently and reliably at scale.",
    takeaways: [
      "Scalability, security, and edge cases must be considered from day one in architectural system design.",
      "The true value of an AI model is only realized when it is seamlessly and intuitively integrated into a user-facing product.",
      "Continuous, aggressive learning is the only constant in the rapidly evolving and shifting technology landscape."
    ]
  }
];
