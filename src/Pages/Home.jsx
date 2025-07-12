import React from 'react'

const Home = () => {
  return (
    <>
        <header className='flex'>
            {/* <nav className="px-40 flex justify-between items-center fixed top-0 left-0 right-0 z-50 rounded-b-lg bg-logo/50 backdrop-blur-md"> */}
            <nav className="px-40 flex justify-between items-center absolute top-0 left-0 right-0 z-50 ">
                <div class="py-5 font-bold text-3xl">
                    <a href="#home">
                        <img src="./src/assets/logo1.png" className=" " alt="" width="100" height="100" />
                        {/* <span class="text-white">Coffee Shop</span> */}
                    </a>
                </div>
                
                <div>
                    <ul className='flex items-center font-bold justify-center space-x-6 text-white'>
                        <li>
                            <a href="#home" class="hover:bg-logo/10 ease-in duration-200 px-4 py-2 rounded-md">Home</a>
                        </li>
                        <li>
                            <a href="#about" class="hover:bg-logo/10 ease-in duration-200 px-4 py-2 rounded-md">Coffee</a>
                        </li>
                        <li>
                            <a href="#contact" class="hover:bg-logo/10 ease-in duration-200 px-4 py-2 rounded-md">Bakery</a>
                        </li>
                        <li>
                            <a href="#contact" class="hover:bg-logo/10 ease-in duration-200 px-4 py-2 rounded-md">Shop</a>
                        </li>
                        <li>
                            <a href="#contact" class="hover:bg-logo/10 ease-in duration-200 px-4 py-2 rounded-md">About</a>
                        </li>
                        <li>
                            <a href="#contact" class="hover:bg-logo/10 ease-in duration-200 px-4 py-2 rounded-md">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        <section className='py-40 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('./src/assets/milk.webp')" }}>
            <div className=' py-2 px-40'>
                <h2 className='text-white'>Welcome</h2>
                <h1 className='text-white'>We serve the richest coffee in the city!</h1>
                <button className='bg-white text-footer rounded-full text-sm px-2'>Order Now</button>
            </div>
        </section>

        <section className='m-5 '>
            <div className=' flex flex-row justify-center items-center text-center space-x-20'>
                <div>
                    <img src="./src/assets/hot-coffee.png" className=" " alt="" width="50" height="50" />
                    <h4>Hot Coffe</h4>
                </div>
                <div>
                    <img src="./src/assets/cold-coffee.png" className=" " alt="" width="50" height="50" />
                    <h4>COld Coffe</h4>
                </div>
                <div>
                    <img src="./src/assets/cup-coffee.png" className=" " alt="" width="50" height="50" />
                    <h4>Cup Coffe</h4>
                </div>
                <div>
                    <img src="./src/assets/cake.png" className=" " alt="" width="50" height="50" />
                    <h4>Dessert</h4>
                </div>
            </div>
        </section>

        <section className='bg-white px-40'>
            <div>
                <h2 className='text-center text-2xl font-bold py-5'>OUR SPECIAL COFFEE</h2>
                <div className='flex space-x-5 p-2 mb-10 justify-center'>
                    <div className='bg-amber-100 p-2 rounded-lg'>
                        <img src="./src/assets/coffee1.jpg" className="bg-footer rounded-lg  " alt="" width="200" height="200" />
                        <div className='mb-2'>
                            <h2 className='font-bold'>Lungo Coffee</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className='flex gap-5'>
                            <h3 className='font-bold text-lg'>GH200.00</h3>
                            <button className='bg-footer text-white rounded-lg text-sm px-3'>Order Now</button>
                        </div>
                    </div>
                    <div className='bg-amber-100 p-2 rounded-lg'>
                        <img src="./src/assets/coffee2.jpg" className="bg-footer rounded-lg  " alt="" width="200" height="200" />
                        <div className='mb-2'>
                            <h2 className='font-bold'>Lungo Coffee</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className='flex gap-5'>
                            <h3 className='font-bold text-lg'>GH200.00</h3>
                            <button className='bg-footer text-white rounded-lg text-sm px-3'>Order Now</button>
                        </div>
                    </div>
                    <div className='bg-amber-100 p-2 rounded-lg'>
                        <img src="./src/assets/coffee3.jpg" className="bg-footer rounded-lg  " alt="" width="200" height="200" />
                        <div className='mb-2'>
                            <h2 className='font-bold'>Lungo Coffee</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className='flex gap-5'>
                            <h3 className='font-bold text-lg'>GH200.00</h3>
                            <button className='bg-footer text-white rounded-lg text-sm px-3'>Order Now</button>
                        </div>
                    </div>
                    <div className='bg-amber-100 p-2 rounded-lg'>
                        <img src="./src/assets/coffee1.jpg" className="bg-footer rounded-lg  " alt="" width="200" height="200" />
                        <div className='mb-2'>
                            <h2 className='font-bold'>Lungo Coffee</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className='flex gap-5'>
                            <h3 className='font-bold text-lg'>GH200.00</h3>
                            <button className='bg-footer text-white rounded-lg text-sm px-3'>Order Now</button>
                        </div>
                    </div>
                    <div className='bg-amber-100 p-2 rounded-lg'>
                        <img src="./src/assets/coffee1.jpg" className="bg-footer rounded-lg  " alt="" width="200" height="200" />
                        <div className='mb-2'>
                            <h2 className='font-bold'>Lungo Coffee</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className='flex gap-5'>
                            <h3 className='font-bold text-lg'>GH200.00</h3>
                            <button className='bg-footer text-white rounded-lg text-sm px-3'>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center text-2xl font-bold py-5'>OUR SPECIAL DESERT</h2>
                <div className='flex space-x-5 p-2 mb-10 justify-center'>
                    <div className='bg-amber-100 p-2 rounded-lg'>
                        <img src="./src/assets/dessert.jpg" className="bg-footer rounded-lg  " alt="" width="200" height="200" />
                        <div className='mb-2'>
                            <h2 className='font-bold'>Lungo Coffee</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className='flex gap-5'>
                            <h3 className='font-bold text-lg'>GH200.00</h3>
                            <button className='bg-footer text-white rounded-lg text-sm px-3'>Order Now</button>
                        </div>
                    </div>
                    <div className='bg-amber-100 p-2 rounded-lg'>
                        <img src="./src/assets/dessert.jpg" className="bg-footer rounded-lg  " alt="" width="200" height="200" />
                        <div className='mb-2'>
                            <h2 className='font-bold'>Lungo Coffee</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className='flex gap-5'>
                            <h3 className='font-bold text-lg'>GH200.00</h3>
                            <button className='bg-footer text-white rounded-lg text-sm px-3'>Order Now</button>
                        </div>
                    </div>
                    <div className='bg-amber-100 p-2 rounded-lg'>
                        <img src="./src/assets/dessert.jpg" className="bg-footer rounded-lg  " alt="" width="200" height="200" />
                        <div className='mb-2'>
                            <h2 className='font-bold'>Lungo Coffee</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className='flex gap-5'>
                            <h3 className='font-bold text-lg'>GH200.00</h3>
                            <button className='bg-footer text-white rounded-lg text-sm px-3'>Order Now</button>
                        </div>
                    </div>
                    <div className='bg-amber-100 p-2 rounded-lg'>
                        <img src="./src/assets/dessert.jpg" className="bg-footer rounded-lg  " alt="" width="200" height="200" />
                        <div className='mb-2'>
                            <h2 className='font-bold'>Lungo Coffee</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className='flex gap-5'>
                            <h3 className='font-bold text-lg'>GH200.00</h3>
                            <button className='bg-footer text-white rounded-lg text-sm px-3'>Order Now</button>
                        </div>
                    </div>
                    <div className='bg-amber-100 p-2 rounded-lg'>
                        <img src="./src/assets/dessert.jpg" className="bg-footer rounded-lg  " alt="" width="200" height="200" />
                        <div className='mb-2'>
                            <h2 className='font-bold'>Lungo Coffee</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className='flex gap-5'>
                            <h3 className='font-bold text-lg'>GH200.00</h3>
                            <button className='bg-footer text-white rounded-lg text-sm px-3'>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='mb-5'>
            <div className='flex space-x-5 items-center justify-between'>
                <div>
                    <img src="./src/assets/beans.png" className='-rotate-90' alt="" width="200" height="200" />
                </div>
                <div className='text-center'>
                    <h2 className='font-bold text-3xl'>Check out our best coffee beans</h2>
                    <button className='bg-footer rounded-full py-3 px-5 text-white font-bold'>Explore our products</button>
                </div>
                <div>
                    <img src="./src/assets/side.png" className="rotate-90" alt="" width="200" height="200" />
                </div>
            </div>
        </section>

        <section className='bg-white px-2 mb-10 py-5'>
            <div>
                <div className='text-center py-5'>
                    <h2 className=''>Come and Join</h2>
                    <h1 className='font-bold text-lg'>OUR HAPPY CUSTOMERS</h1>
                </div>
                <div>
                    <div className='flex space-x-2'>
                        <div className='bg-amber-200 rounded-lg p-2'>
                            <h2>kaeme</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odit at corporis sed doloribus blanditiis minus. Nihil voluptatibus eaque illum.</p>
                        </div>
                        <div className='bg-amber-200 rounded-lg p-2'>
                            <h2>kaeme</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odit at corporis sed doloribus blanditiis minus. Nihil voluptatibus eaque illum.</p>
                        </div>
                        <div className='bg-amber-200 rounded-lg p-2'>
                            <h2>kaeme</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odit at corporis sed doloribus blanditiis minus. Nihil voluptatibus eaque illum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='py-5'>
            <div className='flex space-x-5 items-center justify-between'>
                <div>
                    <img src="./src/assets/side.png" className='-rotate-90' alt="" width="200" height="200" />
                </div>
                <div className='items-center justify-between'>
                    <div className='text-center'>
                        <h1 className='font-bold text-xl'>Join in and get 15% off!</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, animi!</p>
                    </div>
                    <div className=' text-center'>
                        <h2>Check out our best coffee beans</h2>
                        <button className='bg-footer rounded-xl py-2 px-3 text-white font-bold'>Order Now</button>
                    </div>
                </div> 
                <div>
                    <img src="./src/assets/beans.png" className='rotate-180' alt="" width="200" height="200" />
                </div>
            </div>
        </section>


        <section className='bg-footer py-5'>
            <div className='flex space-x-5 items-center justify-between px-5 text-white'>
                <div>
                    <div className='font-bold text-2xl'>COFFEE</div>
                </div>
                <div>
                    <h2 className='font-bold text-lg'>PRIVACY</h2>
                    <h5>Terms of use</h5>
                    <h5>Privacy policy</h5>
                    <h5>Cookies</h5>
                </div>
                <div>
                    <h2 className='font-bold text-lg'>SERVICES</h2>
                    <h5>Terms of use</h5>
                    <h5>Privacy policy</h5>
                    <h5>Cookies</h5>
                </div>
                <div>
                    <h2 className='font-bold text-lg'>ABOUT US</h2>
                    <h5>Terms of use</h5>
                    <h5>Privacy policy</h5>
                    <h5>Cookies</h5>
                </div>
                <div>
                    <h2 className='font-bold text-lg'>INFORMATION</h2>
                    <h5>Terms of use</h5>
                    <h5>Privacy policy</h5>
                    <h5>Cookies</h5>
                </div>
                <div>
                    <h2 className='font-bold text-lg'>SOCIAL MEDIA</h2>
                    <h5>Terms of use</h5>
                    <h5>Privacy policy</h5>
                    <h5>Cookies</h5>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home
