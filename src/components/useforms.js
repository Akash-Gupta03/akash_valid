import { useForm } from "react-hook-form"
import game from '../assests/game development.png'
// import '../styles/extra.css'


const Useforms_page=()=> {
  const { register, getValues } = useForm()

//   var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onClick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// span.onClick = function() { 
//   modal.style.display = "none";
// }

const onSubmit=()=>{

}

  return (
    <>
    {/* <form onSubmit={onSubmit}>
      <input type="number " {...register("test")} />
      <input {...register("test1"
    
    , {
        required: "Enter the field"
      })} />


      <button
        type="submit"
        onClick={() => {
      // { test: "test-input", test1: "test1-input" }
      const values = getValues("test") 
          const singleValue = getValues("test") // "test-input"
          console.log(values)
          const multipleValues = getValues(["test", "test1"])
        //   console.log(multipleValues)
          // ["test-input", "test1-input"]
        }}
      >
        Get Values
      </button>
    </form> */}
    <div className="c">
<div className='  d-flex justify-content-center align-items-center' >
    <img data-lightbox="image-1" data-title="My caption" src={game}  className="img-fluid card "  style={{ borderRadius: "20px" ,width:"300px",height:"300px"}}  />
</div>
</div>

{/* <div className='col-sm-3 col-md-3 mt-3 card d-flex justify-content-center align-items-center'>
    <img src={game} className="img-fluid" style={{ borderRadius: "20px", display: "block", margin: "auto" }}/>
</div> */}

    </>

  )
}
export default Useforms_page;