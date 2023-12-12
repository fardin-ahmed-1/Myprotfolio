/* eslint-disable react/prop-types */
import { PulseLoader } from 'react-spinners'

const Loader = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <PulseLoader
        color="#FD346E"
        margin={4}
        size={16}
      />
    </div>
  )
}

export default Loader
