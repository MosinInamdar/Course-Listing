// sampleData.js
import webdevThumbnail from "../assets/webdev.jpg";
import python from "../assets/python.jpg";
import reactThumbnail from "../assets/reactcourse.png";
import dataScienceThumbnail from "../assets/datascience.webp";
import machineLearningThumbnail from "../assets/machinelearning.png";
import blockchainThumbnail from "../assets/blockchain.webp";

const courses = [
  {
    id: 1,
    name: "Introduction to Web Development",
    instructor: "John Smith",
    description:
      "Learn the basics of web development including HTML, CSS, and JavaScript.",
    enrollmentStatus: "Open",
    thumbnail: webdevThumbnail,
    duration: "6 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    dueDate: "12/5/24",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to HTML",
        content: "HTML basics and structure",
      },
      {
        week: 2,
        topic: "Styling with CSS",
        content: "CSS fundamentals and selectors",
      },
      {
        week: 3,
        topic: "JavaScript Fundamentals",
        content: "Introduction to JavaScript and variables",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
        progress: 10,
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
        progress: 20,
      },
      {
        id: 112,
        name: "Liam Brown",
        email: "liam@example.com",
        progress: 18,
      },
    ],
  },
  {
    id: 2,
    name: "Python Programming",
    instructor: "Alice Johnson",
    description: "Learn Python programming language from scratch.",
    enrollmentStatus: "Closed",
    thumbnail: python,
    duration: "8 weeks",
    dueDate: "25/9/24",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "In-person",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Python",
        content: "Python basics and syntax",
      },
      {
        week: 2,
        topic: "Data Structures",
        content: "Lists, tuples, dictionaries",
      },
      {
        week: 3,
        topic: "Functions",
        content: "Defining and calling functions",
      },
    ],
    students: [
      {
        id: 103,
        name: "Charlie Brown",
        email: "charlie@example.com",
        progress: 10,
      },
      {
        id: 104,
        name: "David Wilson",
        email: "david@example.com",
        progress: 10,
      },
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
        progress: 10,
      },
    ],
  },
  // Add manually added student data for the rest of the courses...
  {
    id: 3,
    name: "React Development",
    instructor: "Emily Brown",
    description: "Master React.js and build powerful web applications.",
    enrollmentStatus: "Open",
    thumbnail: reactThumbnail,
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    dueDate: "25/3/24",
    prerequisites: ["Intermediate JavaScript knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React",
        content: "React basics and component structure",
      },
      {
        week: 2,
        topic: "State Management",
        content: "Using useState and useEffect hooks",
      },
      {
        week: 3,
        topic: "Redux",
        content: "Managing application state with Redux",
      },
    ],
    students: [
      {
        id: 105,
        name: "Emma Davis",
        email: "emma@example.com",
        progress: 60,
      },
      {
        id: 106,
        name: "Frank Brown",
        email: "frank@example.com",
        progress: 16,
      },
      {
        id: 112,
        name: "Liam Brown",
        email: "liam@example.com",
        progress: 18,
      },
      {
        id: 109,
        name: "Isabella Taylor",
        email: "isabella@example.com",
        progress: 34,
      },
      {
        id: 111,
        name: "Kate Johnson",
        email: "kate@example.com",
        progress: 12,
      },
    ],
  },
  {
    id: 4,
    name: "Data Science Fundamentals",
    instructor: "Michael Clark",
    description:
      "Explore the fundamentals of data science including data analysis and visualization.",
    enrollmentStatus: "Open",
    thumbnail: dataScienceThumbnail,
    duration: "weeks",
    dueDate: "25/6/24",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic knowledge of Python"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Science",
        content: "Overview of data science and its applications",
      },
      {
        week: 2,
        topic: "Data Analysis with Pandas",
        content: "Data manipulation and analysis with Pandas library",
      },
      {
        week: 3,
        topic: "Data Visualization with Matplotlib",
        content: "Creating visualizations with Matplotlib",
      },
    ],
    students: [
      {
        id: 107,
        name: "Grace Wilson",
        email: "grace@example.com",
        progress: 14,
      },
      {
        id: 108,
        name: "Henry Adams",
        email: "henry@example.com",
        progress: 23,
      },
      {
        id: 104,
        name: "David Wilson",
        email: "david@example.com",
        progress: 10,
      },
      {
        id: 110,
        name: "Jack Martinez",
        email: "jack@example.com",
        progress: 55,
      },
    ],
  },
  {
    id: 5,
    name: "Machine Learning Basics",
    instructor: "Daniel White",
    description:
      "Learn the basics of machine learning and predictive modeling.",
    enrollmentStatus: "Open",
    thumbnail: machineLearningThumbnail,
    duration: "8 weeks",
    dueDate: "2/5/24",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: [
      "Basic knowledge of Python",
      "Understanding of basic statistics",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Machine Learning",
        content: "Overview of machine learning concepts",
      },
      {
        week: 2,
        topic: "Supervised Learning",
        content: "Regression and classification algorithms",
      },
      {
        week: 3,
        topic: "Unsupervised Learning",
        content: "Clustering and dimensionality reduction",
      },
    ],
    students: [
      {
        id: 109,
        name: "Isabella Taylor",
        email: "isabella@example.com",
        progress: 34,
      },
      {
        id: 110,
        name: "Jack Martinez",
        email: "jack@example.com",
        progress: 55,
      },
      {
        id: 106,
        name: "Frank Brown",
        email: "frank@example.com",
        progress: 16,
      },
      {
        id: 103,
        name: "Charlie Brown",
        email: "charlie@example.com",
        progress: 10,
      },
    ],
  },
  {
    id: 6,
    name: "Blockchain Fundamentals",
    instructor: "Sophia Martinez",
    description:
      "Explore the fundamentals of blockchain technology and cryptocurrencies.",
    enrollmentStatus: "Open",
    thumbnail: blockchainThumbnail,
    duration: "6 weeks",
    schedule: "Saturdays, 10:00 AM - 12:00 PM",
    location: "In-person",
    dueDate: "25/5/24",
    prerequisites: ["Basic understanding of computer networks"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Blockchain",
        content: "Overview of blockchain technology and its components",
      },
      {
        week: 2,
        topic: "Cryptocurrencies",
        content: "Understanding cryptocurrencies and wallets",
      },
      {
        week: 3,
        topic: "Smart Contracts",
        content: "Creating and deploying smart contracts",
      },
    ],
    students: [
      {
        id: 111,
        name: "Kate Johnson",
        email: "kate@example.com",
        progress: 12,
      },
      {
        id: 112,
        name: "Liam Brown",
        email: "liam@example.com",
        progress: 18,
      },
      {
        id: 105,
        name: "Emma Davis",
        email: "emma@example.com",
        progress: 60,
      },
      {
        id: 104,
        name: "David Wilson",
        email: "david@example.com",
        progress: 10,
      },
      {
        id: 106,
        name: "Frank Brown",
        email: "frank@example.com",
        progress: 16,
      },
    ],
  },
];

export default courses;
