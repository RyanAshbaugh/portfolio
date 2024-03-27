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
    stim_controller,
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
    pose_and_track,
    portfolio,
    arduino,
    welldetect,
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
      icon: pose_and_track,
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
    {
      name: "arduino",
      icon: arduino,
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
  
  const papers = [
    {
      citation:
        "Ashbaugh, R. C., Udpa, L., Israeli, R. R., Gilad, A. A., & Pelled, G. (2021). Bioelectromagnetic platform for cell, tissue, and in vivo stimulation. Biosensors, 11(8), 248.",
      link: "https://www.mdpi.com/2079-6374/11/8/248"
    },
    {
      citation:
        "Liu, F., Ashbaugh, R., Chimitt, N., Hassan, N., Hassani, A., Jaiswal, A., ... & Liu, X. (2024). Farsight: A physics-driven whole-body biometric system at large distance and altitude. In Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision (pp. 6227-6236).",
      link: "https://openaccess.thecvf.com/content/WACV2024/papers/Liu_FarSight_A_Physics-Driven_Whole-Body_Biometric_System_at_Large_Distance_and_WACV_2024_paper.pdf"
    },
    {
      citation:
        "Cywiak, C., Ashbaugh, R. C., Metto, A. C., Udpa, L., Qian, C., Gilad, A. A., ... & Pelled, G. (2020). Non-invasive neuromodulation using rTMS and the electromagnetic-perceptive gene (EPG) facilitates plasticity after nerve injury. Brain stimulation, 13(6), 1774-1783.",
      link: "https://www.sciencedirect.com/science/article/pii/S1935861X20302734"
    },
    {
      citation:
        "Hunt, R. D., Ashbaugh, R. C., Reimers, M., Udpa, L., Saldana De Jimenez, G., Moore, M., ... & Pelled, G. (2021). Swimming direction of the glass catfish is responsive to magnetic stimulation. Plos one, 16(3), e0248141.",
      link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0248141"
    },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Portfolio",
      description:
        "Check out the code for the personal portfolio you're looking at now. Utilizes Three.js and React to create various 3D effects, animations, and display models of 3D scenes and objects.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/RyanAshbaugh/portfolio",
    },
    {
      name: "Electromagnetic Stimulation Coils and Controller",
      description:
        "Designed and built a system to stimulate biological samples with magnetic fields using a variety of purpose built electromagnetic coils and a stimulation controller, along with a software interface to control the system.",
      tags: [
        {
          name: "matlab",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "arduino",
          color: "pink-text-gradient",
        },
      ],
      image: stim_controller,
      source_code_link: "https://github.com/RyanAshbaugh/stimulation-controller"
    },
    {
      name: "Automated Detection and Analysis of Wells in Multi-Well Plates",
      description:
        "Tool for automatically detecting the wells of a multi-well plate, specifically in an IVIS imaging system, and analyzing the fluorescence and luminescence data from the wells.",
      tags: [
        {
          name: "matlab",
          color: "blue-text-gradient",
        },
      ],
      image: welldetect,
      source_code_link: "https://github.com/RyanAshbaugh/IVIS-Fluorescence-Luminescence-Analysis"
    },
  ];
  
  export { services, technologies, tools, experiences, papers, projects };