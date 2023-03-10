import { useState } from "react";
import Form from "react-bootstrap/Form";
import SideMenu from "../components/SideMenu.jsx";


export default function NewPost({ setBlogs }) {
/*use state is a react hook that returns an array of 2 elements, the first element [title] and then the current state value [setTitle] the first element of the array represents the current value of the state, while the second element, set[element] is used to update the state.*/
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState()
  const [review, setReview] = useState("")
  const [author, setAuthor] = useState("")

  function convertFile(files) {
    if (files) {
//  chooses the first file submitted
      const fileRef = files[0] || ""
//  declares 'FileType' as the type of file (.png, .jpg, .webp)
      const fileType = fileRef.type || ""
//  pulls in the class (fileReader) and sets 'reader' as a new variation of 'reader'
      const reader = new FileReader()
//  reads file[0] as binary to reader
      reader.readAsBinaryString(fileRef)
      reader.onload = (ev) => {
/*  convert it to base64 and sends */
        setImage(`data:${fileType};base64,${window.btoa(ev.target.result)}`)
      }
    }
  }

/*this defines handleSumbit which is the fucntion that handles the HTTP POST method the post method is used to create data and send it to my server*/
  const handleSubmit = (e) => {
//  e.preventDefault() method stops the default action of an automatic page refresh
    e.preventDefault()
  /*  sends a HTTP POST request to my backend for the creation of a Blog which contains
    a Title, Description, Image, Review, and Author*/
    fetch("https://final-project-backend-am.web.app/blog", {
//  method: "", specifies where it is a GET, POST, PATCH, DELETE, etc.
      method: "POST",
/*  The headers option in the fetch() method specifies the
    content type of the request body, which is JSON in this case.  */
      headers: {
        'Content-Type': 'application/json'
      },
/*  the body property specifies the data will be sent in a request body,
    and the JSON.stringify() is used to convert the object into a JSON string*/
      body: JSON.stringify({ title, description, image, review, author })
    })
//  handles the server response and returns the response as a JSON object
      .then(res => res.json())
//  updates the state variables
      .then(setBlogs, setTitle(""), setDescription(""), setImage(""), setReview(""), setAuthor(""))
// catch is used to handle any errors that could occur and logs them on the console for debugging.
      .catch(console.error)

    // setTitle("")
    // setDescription("")
    // setImage("")
    // setReview("")
    // setAuthor("")
  }
  // returns this as the results of where <NewPost/> is 
  return (
    <>
      {/* this is the nav bar */}
      <SideMenu/>
      {/* the header */}
      <h2>Submit your blog here!</h2>
      {/* form for title, using Form from react-bootstrap.*/}
      <Form className="form-container">
        <Form.Group>
          {/* Creates the label for the title input field. */}
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title" // specifies the attribute for anything submitted in this field 
            type="text" //  the type of input field (text,file,etc.)
            required={true} // specifies wether the input must be filled
            placeholder="Name of your blog" // placeholder text when empty
            value={title} // actual value of what is stored when submitted
            className="p-2" // padding of 2
        /*  handles the changes in the input field, whenever the user types into the input element associated with this event listener.
            without it the input field would be unnaccesible 
            each input besides a mouse click is considered an event.
            e = event*/
            onChange={e => setTitle(e.target.value)}/>
        </Form.Group>

        <Form.Group>
          {/* Creates the label for the description input field. */}
          <Form.Label>Description</Form.Label> 
          <Form.Control
            name="Description" // specifies the attribute for anything submitted in this field 
            type="text" // the type of input field
            required={true} // check whether this input is required to be filled in order to be submitted
            placeholder="Your brief thoughts here" // before any text is inputted from the user, it gives a placeholder
            value={description} // actual value of what the input is
            className="p-2" //padding of 2 using react bootstrap
        /*  when the user inputs or removes characters, an event occurs where the description will change value.
            these inputs would update the value of the state variable named description.*/
            onChange={e => setDescription(e.target.value)}/>
          </Form.Group>

        <Form.Group>
          <Form.Label>Image</Form.Label>
          <Form.Control
            name="Image"
            type="file" // this input field only accepts files, as it is an image field. the field box changes in react to reflect the type of input.
            required={true}
            placeholder="Image that relates most to your discussion"
            className="p-2"
            // the function convertFile is called (go to line 17 for more details) which takes the file and converts it to base64
            onChange={e => convertFile(e.target.files)}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Review</Form.Label>
          <Form.Control
            name="review"
            type="text"
            required={true}
            placeholder="What are your full thoughts on this?"
            value={review}
            className="p-2"
            onChange={e => setReview(e.target.value)}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            name="author"
            type="text"
            required={true}
            placeholder="Credit yourself!"
            value={author}
            className="p-2"
            onChange={e => setAuthor(e.target.value)}/>
        </Form.Group>

        <button className="p-2 m-auto mt-2"
          onClick={handleSubmit}> {/* when clicked, this button will submit this to the server, and should appear back on the homepage.*/}
          Submit</button>
      </Form>
    </>
  )
}
