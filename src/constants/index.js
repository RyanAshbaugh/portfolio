import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    zf,
    msu,
    sae,
    linux,
    python,
    cpp,
    matlab,
    pytorch,
    opencv,
    ros,
    sql,
    tf,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Computer Vision",
      icon: web,
    },
    {
      title: "Machine Learning",
      icon: mobile,
    },
    {
      title: "Image & Signal Processing",
      icon: backend,
    },
    {
      title: "3D Reconstruction & Visualization",
      icon: creator,
    },
    {
      title: "Localization & Mapping",
      icon: creator,
    },
    {
      title: "Pose Estimation & Tracking",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "MATLAB",
      icon: matlab,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];

  // tools and frameworks
  const tools = [
    {
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "ROS",
      icon: ros,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "OpenCV",
      icon: opencv,
    },
    {
      name: "TensorFlow",
      icon: tf,
    },
    {
      name: "docker",
      icon: docker,
    },
  ]
  
  const experiences = [
    {
      title: "Computer Engineer Intern",
      company_name: "ZF",
      icon: zf,
      iconBg: "#E6DEDD",
      date: "May 2017 - Dec 2017",
      points: [
        "Designed and implemented a lens focus shift detector with C++ for automotive camera testing.",
        "Integrated hardware and software components to ensure ISO 26262 safety requirements met.",
      ],
    },
    {
      title: "Perception Software Team Lead",
      company_name: "SAE AutoDrive Challenge",
      icon: sae,
      iconBg: "#E6DEDD",
      date: "May 2017 - Jan 2019",
      points: [
        "International student competition to design and build autonomous capabilities into a Chevy Bolt.",
        "Worked as the software engineer team leader and built perception, localization and motion planning software with C++ and ROS"
      ],
    },
    {
      title: "Graduate Research Assistant",
      company_name: "Michigan State University",
      icon: msu,
      iconBg: "#E6DEDD",
      date: "May 2018 - Dec 2023",
      points: [
        "Developed machine learning training and evaluation pipelines with PyTorch for gait, 3D body, and multi-biometric fusion models."
      ],
    },
    {
      title: "Research Scientist Ph.D. Intern",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Dec 2023",
      points: [
        "Developed tool for improving the magnetometer placement in head mounted and wearable devices.",
        "Used object-oriented programming with PyQt in Python to build an automated simulation pipeline which handles running simulations, saving and processing data, and visualizing data.",
        "Performed electromagnetic simulations to assess magnetometer sensor performance in devices.",
        "Learned how magnetometer, GPS, and IMU sensor fusion and processing works to estimate state.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, tools, experiences, testimonials, projects };