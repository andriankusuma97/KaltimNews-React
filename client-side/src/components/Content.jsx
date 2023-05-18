import { Link } from 'react-router-dom'

function Product({data}) {
  return (
    <Link to={`/detail/${data.id}`}>
    <div className="container mx-auto my-4 border-2  border-b-black">
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-3 ">
              <img src={data?.imgUrl} className="w-full h-full"  alt="" />
            </div>
            <div className="row-span-3 col-span-2 ">
              <h3 className=" font-semibold hover:font-bold font-serif underline decoration-1 ">{data?.title}</h3>
              <p className="text-justify indent-8">{data?.content}</p>
            </div>
          </div>
        </div>
    </Link>
  
    
  );
}

export default Product;
