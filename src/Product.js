
import Navbar from './Navbar';

const products = [
    {
      id: 1,
      name: 'Santai',
      href: 'https://media.discordapp.net/attachments/1077839624099086366/1167261368328658994/FB_IMG_1698042411162.jpg?ex=654d7bdc&is=653b06dc&hm=ef8f1f3a09d31ec59b6918c79b4bda520bf808e372eb68387db1c9ded6e4b42d&=&width=657&height=662',
      imageSrc: 'https://media.discordapp.net/attachments/1077839624099086366/1167261368328658994/FB_IMG_1698042411162.jpg?ex=654d7bdc&is=653b06dc&hm=ef8f1f3a09d31ec59b6918c79b4bda520bf808e372eb68387db1c9ded6e4b42d&=&width=657&height=662',
    },

    {
      id: 1,
      name: 'Anime',
      href: 'https://media.discordapp.net/attachments/935856252494417982/1168550886214225920/49357bbea71791096d399a572fda3eb6.png?ex=65522cd1&is=653fb7d1&hm=3eee80f95a3d7d03436d0acec4c095ff8810c6f3f1fe40187ca13e9a6ec556b2&=&width=337&height=662',
      imageSrc: 'https://media.discordapp.net/attachments/935856252494417982/1168550886214225920/49357bbea71791096d399a572fda3eb6.png?ex=65522cd1&is=653fb7d1&hm=3eee80f95a3d7d03436d0acec4c095ff8810c6f3f1fe40187ca13e9a6ec556b2&=&width=337&height=662',
    },

    {
      id: 1,
      name: 'Topi Polos',
      href: 'https://s2.bukalapak.com/img/2130450542/w-1000/Topi_hitam_polos.jpg',
      imageSrc: 'https://s2.bukalapak.com/img/2130450542/w-1000/Topi_hitam_polos.jpg',
    },

    {
      id: 1,
      name: 'Bangun Kepagian',
      href: 'https://media.discordapp.net/attachments/935856252494417982/1168550892891553832/FB_IMG_1696560070641.jpg?ex=65522cd3&is=653fb7d3&hm=f60d787402b6095a9924b12e5e7648ec528557a70839c7720618c88b5024297a&=&width=807&height=593',
      imageSrc: 'https://media.discordapp.net/attachments/935856252494417982/1168550892891553832/FB_IMG_1696560070641.jpg?ex=65522cd3&is=653fb7d3&hm=f60d787402b6095a9924b12e5e7648ec528557a70839c7720618c88b5024297a&=&width=807&height=593',
    },

    {
      id: 1,
      name: 'Wallpaper Jujur Kasian',
      href: 'https://media.discordapp.net/attachments/935856252494417982/1168550892266606713/4cd4d5c0ebd8186ac28a040420c512af.png?ex=65522cd3&is=653fb7d3&hm=b72ff770d57b54913a967e11bec2ee31661b14f87bbb145d26cc4c9cb15082d7&=&width=372&height=662',
      imageSrc: 'https://media.discordapp.net/attachments/935856252494417982/1168550892266606713/4cd4d5c0ebd8186ac28a040420c512af.png?ex=65522cd3&is=653fb7d3&hm=b72ff770d57b54913a967e11bec2ee31661b14f87bbb145d26cc4c9cb15082d7&=&width=372&height=662',
    },

    {
      id: 1,
      name: 'Anime',
      href: 'https://media.discordapp.net/attachments/935856252494417982/1168550889024409620/7fea2ae3b6732c686100aa2b73a87e19.png?ex=65522cd2&is=653fb7d2&hm=418338cdafb627be4e9ec80f2d37ace263ccfc4ef50554de45bc48db7c5605c2&=&width=337&height=662',
      imageSrc: 'https://media.discordapp.net/attachments/935856252494417982/1168550889024409620/7fea2ae3b6732c686100aa2b73a87e19.png?ex=65522cd2&is=653fb7d2&hm=418338cdafb627be4e9ec80f2d37ace263ccfc4ef50554de45bc48db7c5605c2&=&width=337&height=662', 
    },

    {
      id: 1,
      name: 'Wilson',
      href: 'https://cdn.discordapp.com/attachments/935856252494417982/1168553597043216404/FB_IMG_1698278885140.jpg?ex=65522f58&is=653fba58&hm=55cf854d740453d808411eb35ad76e5ab9c535c46189b68216f9059b5e3ca3c5&',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1168553597043216404/FB_IMG_1698278885140.jpg?ex=65522f58&is=653fba58&hm=55cf854d740453d808411eb35ad76e5ab9c535c46189b68216f9059b5e3ca3c5&',
    },

    {
      id: 1,
      name: 'Ikan Bawa Minum',
      href: 'https://cdn.discordapp.com/attachments/935856252494417982/1168554195822051479/FB_IMG_1695620998218.jpg?ex=65522fe6&is=653fbae6&hm=3d225b21f2220559c85394e733feed5893cfd00c8b7a13fd40d97b5783843808&',
      imageSrc: 'https://cdn.discordapp.com/attachments/935856252494417982/1168554195822051479/FB_IMG_1695620998218.jpg?ex=65522fe6&is=653fbae6&hm=3d225b21f2220559c85394e733feed5893cfd00c8b7a13fd40d97b5783843808&',
    },
    
  ]
  
  export default function Example() {
    return (
      <div className="bg-blue-100">

        <Navbar />
        
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 font-serif">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Random Pictures :</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  