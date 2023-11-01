/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/iframe-has-title */


import Navbar from './Navbar';



export default function Example() {
    return (
     
      <div className='overflow hidden' class='bg-cover bg-center bg-blue-100'>
        <Navbar />
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 lg:px-8">Music Random :</h2>
        <div className="mt-2 grid grid-cols-2 gap-x-12 gap-y-10 lg:px-8">
        <div class='video-container'>
            <div class='video'>
                 <iframe width="510" height="315" src="https://www.youtube.com/embed/qpi9YXaChHI?si=478rXTe9tzItFk-W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" Allow="fullscreen"></iframe>
            </div>
            <div class='video mt-2'>
                 <iframe width="510" height="315" src="https://www.youtube.com/embed/UWlihMf1lpo?si=vMLAi0aHrQFHGtBp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" Allow="fullscreen"></iframe>
            </div>
        </div>
        <div class='video-container'>
            <div class='video'>
                <iframe width="510" height="315" src="https://www.youtube.com/embed/9iFDPYubUbE?si=oGdQMICYzql5rwn6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" Allow="fullscreen"></iframe>
            </div>
            <div class='video mt-2'>
                <iframe width="510" height="315" src="https://www.youtube.com/embed/-tKVN2mAKRI?si=lYmJMqGZVs947AKI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" Allow="fullscreen"></iframe>
            </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
  