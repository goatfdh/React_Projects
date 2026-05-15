import React from 'react'
import Card from './components/card'

const App = () => {
  const arr = [
  {
    brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_hNqJRu1uNrEfhHH5FCtN3ltoP5MBpjkWg&s",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$50",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.dezeen.com/uploads/2021/11/meta-facebook-rebranding-name-news_dezeen_2364_col_sq-300x300.jpg",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80",
    location: "Remote"
  },
  {
    brandLogo: "https://image.pngaaa.com/16/4996016-middle.png",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/484/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70",
    location: "Pune, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/073/495/096/non_2x/adobe-inc-logo-circular-glossy-icon-with-transparent-background-free-png.png",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay:"$40",
    location: "Noida, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/13/59/fd/1359fdd23060111974f7b05813b29264.jpg",
    companyName: "Oracle",
    datePosted: "2 days ago",
    post: "Database Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://ciberspring.com/_astro/06238f8955e49480293f6f5dbd31f85c6932dcbb-1208x1096_qXigq.webp",
    companyName: "Salesforce",
    datePosted: "1 week ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay:"$58",
    location: "Gurgaon, India"
  }
];

  

  return (

    <div className='parent'>

      {arr.map(function(elem,idx){
   return <div key = {idx}>
    <Card brandLogo={elem.brandLogo} companyName = {elem.companyName} datePosted={elem.datePosted} post = {elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location = {elem.location}/>
   </div>
})}

    </div>
  )
}

export default App
