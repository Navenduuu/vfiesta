import React from 'react'
import ImageWithFallback from './ImageWithFallback'

export default function Gallery() {
  const images = [
    '/assets/img/event1.jpeg',
    '/assets/img/event2.jpeg',
    '/assets/img/event3.jpeg',
    '/assets/img/event4.jpeg',
    '/assets/img/event5.jpeg',
  ];
  return (
    <div id="gallery" className="py-6">
      <div className="grid grid-cols-5 gap-2">
        {images.map((src, i) => (
          <ImageWithFallback
            key={i}
            src={src}
            alt={`gallery-${i}`}
            className="w-full h-32 object-cover rounded"
            width={300}
            height={200}
            text={`Missing ${src}`}
          />
        ))}
      </div>
    </div>
  )
}
