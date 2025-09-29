import React, { memo } from 'react'

const LogoCenter = memo(function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/assets/vlogo.png"
        alt="VFiesta logo"
        
        className="h-100 w-auto select-none"
        loading="eager"
        draggable={false}
      />
    </div>
  )
})

export default LogoCenter