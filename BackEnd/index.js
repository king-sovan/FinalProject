import express from "express"
import cors from "cors"
import { v4 as uuidv4 } from 'uuid';

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))


let blogs = [
    {
      id : uuidv4(),
      title: "The Rise of AI in Modern Technology",
      content: "Artificial Intelligence is transforming industries worldwide. From healthcare to automotive, AI applications are broadening the scope of innovation...",
      author: "John Doe",
    },
    {
      id : uuidv4(),
      title: "Top 10 JavaScript Libraries in 2024",
      content: "JavaScript libraries have accelerated web development with pre-written code for common tasks. In 2024, the most popular libraries are React, Vue, Angular...",
      author: "Jane Smith",
    },
    {
      id : uuidv4(),
      title: "Understanding Cloud Computing",
      content: "Cloud computing has reshaped the way businesses store, process, and access data. With services like AWS, Azure, and Google Cloud, companies can now leverage...",
      author: "Alice Johnson",
    },
    {
      id : uuidv4(),
      title: "Why Cybersecurity Matters",
      content: "In the age of digital transformation, cybersecurity is more crucial than ever. With data breaches on the rise, businesses and individuals need to be aware...",
      author: "David Lee",
    },
    {
      id : uuidv4(),
      title: "Getting Started with Machine Learning",
      content: "Machine Learning is a branch of AI that allows systems to learn from data and make decisions. Beginners can start by exploring Python libraries like scikit-learn...",
      author: "Emma Brown",
    }
];
  

app.get("/blogs", (req, res) => {
    res.json(blogs)
})

app.post("/newblog", (req, res) => {
  blogs.push({...req.body, id : uuidv4()})
  res.status(200).json({msg : "blog added"})
})

app.delete("/delete/:id", (req, res) => {
  console.log(req.params.id)

  const filteredBlogs = blogs.filter((item) => {
    return item.id != req.params.id
  })

  blogs = filteredBlogs

  res.status(200).json(filteredBlogs)
})


app.listen(8080, () => {
    console.log("Server running on 8080 PORT...")
})