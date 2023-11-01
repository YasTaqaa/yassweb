

import Navbar from './Navbar';


export default function Example() {
  return (
    <div className="overflow-hidden bg-blue-100">

        <Navbar />
        
      <div className="mx-auto  px-6 lg:px-8 py-7">
          <div className="lg:pr-8 lg:pt-4">
              <p className="mt-1 font-bold tracking-tight text-gray-900 sm:text-4xl">Video AMV Random :</p>
               <div className="mt-9 grid sm:grid-cols-2 xl:gap-x-9">
                
                <video controls >
                  < source type='video/mp4' src='https://cdn.discordapp.com/attachments/935856252494417982/1168184047822970921/Snaptik.app_6978640332305009925.mp4?ex=6550d72c&is=653e622c&hm=8ef6c8e9dff08d5731b3a9c2249dd611850e776779226af642e358ce544712a6&'/>
                </video>
                
                <video controls>
                  < source type='video/mp4'  src='https://cdn.discordapp.com/attachments/935856252494417982/1168195652522623088/Snaptik.app_7279646797285362962.mp4?ex=6550e1fb&is=653e6cfb&hm=b963469a31b565b2846d46f70609853d9aced17374d4f2fe8347af282458bd8b&'/>
                </video>
              
               </div>

               <div className="mt-9 grid place-content-center">
                <video controls class='flex items-center'>
                  < source type='video/mp4'  src='https://cdn.discordapp.com/attachments/935856252494417982/1168188480623497266/Snaptik.app_7255158663487425838.mp4?ex=6550db4d&is=653e664d&hm=3d9f9e39e38751192ca36ce06fcdac02544a14e36b6be154709101edd1bf583b&'/>
                </video>
               </div>

               <div className="mt-9 grid sm:grid-cols-4 xl:gap-x-9">
                <video controls >
                  < source type='video/mp4' src='https://cdn.discordapp.com/attachments/935856252494417982/1168556630665875496/Snaptik.app_6939824768162057473.mp4?ex=6552322b&is=653fbd2b&hm=d140811f513e00e443b4086e643add00e6c6a97859845fe0a2108aece0f0227e&'/>
                </video>
                
                <video controls>
                  < source type='video/mp4'  src='https://cdn.discordapp.com/attachments/935856252494417982/1167723173060550686/Snaptik.app_6891625874525785345.mp4?ex=654f29f3&is=653cb4f3&hm=2bba6b343935d137d5bf89828c06f65c76da59ab35761e01750dc38164582a2b&'/>
                </video> 

                <video controls>
                  < source type='video/mp4'  src='https://cdn.discordapp.com/attachments/935856252494417982/1168557647373533295/Snaptik.app_7288627589025959170.mp4?ex=6552331d&is=653fbe1d&hm=805355fe767285bfea8120fab95d7cd6c8ccd1798dd05aa2db523de7783e0ca7&'/>
                </video> 

                <video controls>
                  < source type='video/mp4'  src='https://cdn.discordapp.com/attachments/935856252494417982/1168560015620186112/Snaptik.app_7170020536876027138.mp4?ex=65523552&is=653fc052&hm=c69a04b0b0865ab3a063b7e51d62205bbd84b1a46166b8ea093b0cd12ed6f21a&'/>
                </video>
               </div>

            </div> 
      </div>
    </div>
  )
}
