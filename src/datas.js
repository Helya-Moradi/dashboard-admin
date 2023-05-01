let XAxis = [
  { name: "JAN", sale: 122_000 },
  { name: "FEB", sale: 64_550 },
  { name: "MAR", sale: 70_000 },
  { name: "APR", sale: 32_000 },
  { name: "MAY", sale: 125_000 },
  { name: "JUN", sale: 50_000 },
  { name: "JUL", sale: 10_000 },
  { name: "AUG", sale: 112_000 },
  { name: "SEP", sale: 189_000 },
  { name: "OCT", sale: 120_000 },
  { name: "NOV", sale: 198_000 },
  { name: "DEC", sale: 210_000 },
];

let XAxisProduct = [
  { name: "MAY", sale: 4000 },
  { name: "JUN", sale: 3000 },
  { name: "JUL", sale: 5000 },
];

let newUsers = [
  { title: "Saeed Bahaee", job: "Weblog", img: "./images/profile.jfif" },
  { title: "Javad Rezaee", job: "Web Developer", img: "./images/amir.jpg" },
  { title: "Mohammad Amini", job: "Baclend", img: "./images/amin.jpg" },
  { title: "Ahmad Alimi", job: "Frontend", img: "./images/mmd.jpg" },
  { title: "Ahmad Alimi", job: "Hacker", img: "./images/sasan.jpg" },
];

let transactions = [
  {
    customer: "Gadir Bahari",
    date: "2 Jan 2022",
    amout: 13.99,
    status: "Approved",
    img: "./images/mmd.jpg",
  },
  {
    customer: "Samir Rad",
    date: "14 May 2022",
    amout: 121.99,
    status: "Pending",
    img: "./images/qadir.jpg",
  },
  {
    customer: "Behnam Javadi",
    date: "12 Aug 2023",
    amout: 166.5,
    status: "Declined",
    img: "./images/profile.jfif",
  },
  {
    customer: "Sasan Mohammadi",
    date: "5 Dec 2022",
    amout: 11.99,
    status: "Approved",
    img: "./images/hamze.jpg",
  },
];

let userLists = [
  {
    id: 1,
    username: "Ahamad Ahmadi",
    state: "active",
    avatar: "./images/profile.jfif",
    transaction: 155.99,
    email: "abc@gmail.com",
  },
  {
    id: 2,
    username: "Saeed Ramezani",
    state: "non-active",
    avatar: "./images/amin.jpg",
    transaction: 125.99,
    email: "abc@gmail.com",
  },
  {
    id: 3,
    username: "Reza Ahmadi",
    state: "active",
    avatar: "./images/amir.jpg",
    transaction: 15.99,
    email: "abc@gmail.com",
  },
  {
    id: 4,
    username: "Bahman Saeedi",
    state: "active",
    avatar: "./images/hamze.jpg",
    transaction: 16.99,
    email: "abc@gmail.com",
  },
  {
    id: 5,
    username: "Majid Ramezani",
    state: "non-active",
    avatar: "./images/mmd.jpg",
    transaction: 195.99,
    email: "abc@gmail.com",
  },
];

export { XAxis, XAxisProduct, newUsers, transactions, userLists };
