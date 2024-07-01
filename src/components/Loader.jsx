import { Html} from '@react-three/drei'
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const Loader = () => {
  return (
    <Html>
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center '>
            <div className='w-[10vw] h-[10vh] rounded-full flex items-center'>
                
                <div className='flex items-center'>Loading<AiOutlineLoading3Quarters className='animate-spin' /> </div>
            </div>
        </div>
    </Html>
  )
}

export default Loader