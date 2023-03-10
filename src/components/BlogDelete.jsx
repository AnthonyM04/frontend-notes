import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"

// blogDelete is a function that takes in 2 props(setBlogs and blogId)
export default function BlogDelete({ setBlogs, blogId }) {

  // handleDelete is a function that uses FETCH to send an HTTP 'DELETE' request to delete a certain blog
  const handleDelete = () => {
    fetch(`https://final-project-backend-am.web.app/blog/${blogId}`, {
      // the method used is DELETE which requests the removal of a blog
      method: "DELETE",
      // indicates the payload is in the JSON format.
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(setBlogs)
      .catch(console.error)
  }

  return (
    <>
      {/* onClick, will enact the function handleDelete on the post */}
      <Button onClick={handleDelete} variant="text">
        <Image
        // image itself for button
          src="https://64.media.tumblr.com/110f4e7453629571d4f6d9825031c1fc/6a99beecff145415-42/s540x810/16816e871b527ac2b0c49165dd8661f552b903b3.png"
          width="50px"
        />
      </Button>
     
    </>
  )
}