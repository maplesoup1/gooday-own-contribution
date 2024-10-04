import React from 'react'

const placeholder_animation = () => {
  return (
    <div>
        <div className="relative flex justify-center">
          <input
            className="w-80 h-14 text-base border-b pt-5 pl-2 
                    peer  focus:border-black"
            placeholder=""
            required
          />
          <span
            className="absolute text-base mt-7 mr-64
                        peer-focus:text-orange-400 peer-focus:-translate-y-7
                        peer-valid:text-orange-400 peer-valid:-translate-y-7
                        transition-transform duration-200 peer-focus:text-sm pointer-events-none
                    "
          >
            Placeholder
          </span>
        </div>
    </div>
  )
}

export default placeholder_animation
