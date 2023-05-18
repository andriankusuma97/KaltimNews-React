

function Product() {


  return (
  <form className=" w-screen " onSubmit={submitaddPost} > 
          <label>Title:</label> <br />
          <input className="input w-5/12 " type="text" name="title" value={addPost.title} onChange={handleChange} /> <br />

          <label>content:</label> <br />
          <textarea placeholder="Bio" className="textarea textarea-bordered textarea-md w-5/12" name="content" value={addPost.content} onChange={handleChange}  ></textarea>            
          <br /> 


          <label>Image Url:</label> <br />
          <input className="input w-5/12" type="text" name="imgUrl" value={addPost.imgUrl} onChange={handleChange}  /><br />


          <label>Category:</label> <br />
          <input className="input w-5/12" type="text" name="categoryId" value={addPost.categoryId} onChange={handleChange}  /><br />

          <label>Tags 1:</label> <br />
          <input className="input w-5/12" type="text" name="tags1" value={addPost.tags1} onChange={handleChange}  /><br />

          <label>Tags 2:</label> <br />
          <input className="input w-5/12" type="text" name="tags2" value={addPost.tags2} onChange={handleChange}  /><br /> <br />
          
          <button type="submit" className="btn btn-primary">
            Submit{" "}
          </button>
    </form>
  );
}

export default Product;
