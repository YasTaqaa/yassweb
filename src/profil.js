/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Profile = () => {
  return (
    
    <div className="bg-blue-900 font-serif">
      <div className="container mx-auto p-40">
        <div className="bg-white rounded-lg shadow-md p-9">
          <div className="text-center">
            <img
              src="https://media.discordapp.net/attachments/1077839624099086366/1166915004088455232/11zon_cropped.png?ex=655573c9&is=6542fec9&hm=781960d0ee627ca7f7775d24d3b4a2ae37ce1bd0a8e79cacd42e4fe81f88face&=&width=662&height=662"
              alt="Profil Saya"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h1 className="text-2xl font-bold mt-8">Ilyas A'thaa Wat Taqaa</h1>
            <p className="text-gray-500 mt-2">NIM: 2203040112</p>
            <p className="text-gray-500 mt-2">UNIVERSITAS MUHAMMADIYAH PURWOKERTO</p>
          </div>

          <div className="mt-10 text-center">
            <h2 className="text-lg font-semibold">Informasi Kontak: </h2>
            <ul className="mt-2">
              <li className="text-center text-gray-600 mb-2">
                Alamat: Bumiharjo Rt 02 Rw 05, Kec. Klirong, Kab. Kebumen
              </li>
              <li className="text-center text-gray-600 mb-2">
                Email: ilyasawt@gmail.com
              </li>
              <li className="text-center text-gray-600">
                Telepon: 088215604585
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Profile;
