import React from 'react'

const ContactUs = () => {
  return (
      
      <section className="bg-[#C2394C]/60 w-full mt-19 md:bg-[#C2394C]/60 min-h-screen p-20 font-libre flex flex-col  space-y-2 ">
          <div className="text-white  text-center">
              <h1 className="text-6xl font-bold">Get in Touch</h1>
              <div className="text-xl ">
                  <h5 >Fill up the form and our Team will get back </h5>
                  <h5>to you soon</h5>
              </div>
          </div>

          <div className="container  h-150  bg-white  rounded-4xl flex p-12 md:w-300 m-auto">
              <div className="relative w-1/2 flex flex-col  md:pl-10 space-y-8 ">
                  <h1 className="text-black text-3xl font-bold ">Let's Work Together </h1>
            <div className=" mt-5 flex space-x-5">
               <div className=" h-10 w-10 bg-[#C2394C]/20 flex  item-center justify-center rounded-full">   
                  <img src="/Images/contactus/call.png" className="mt-2 h-5 w-5" alt="call icon" />
                </div>
                <p className="text-lg">(+971)-1234-5678</p>   
                  </div>
                  
             <div className="  flex space-x-5">
               <div className=" h-10 w-10 bg-[#C2394C]/20 flex  item-center justify-center rounded-full">   
                  <img src="/Images/contactus/mail.png" className="mt-2 h-5 w-5" alt="email icon" />
                </div>
                <p className="text-lg z-10">sasya_plants@gmail.com</p>   
                  </div>
                  
             <div className="  flex space-x-5">
               <div className=" h-10 w-10 bg-[#C2394C]/20 flex  item-center justify-center rounded-full">   
                  <img src="/Images/contactus/location.png" className="mt-2 h-5 w-5" alt="location icon" />
                </div>
                       <div className="text-lg font-libre leading-relaxed z-10">
                            <p>Love Dale Street,</p>
                            <p>New Delhi,</p>
                            <p>Pin: 012456</p>
                         </div>
                  </div>
                  <img src="/Images/phone_contactus.jpg" className="absolute h-90 w-90  bottom-3 right-0 " alt="contact image"/>
                  
              </div>




              <div className="w-1/2 flex flex-col space-y-8">
                  <div className=" flex flex-row space-x-6">
                  <input
                          className="border  h-10 w-65 rounded-full shadow-xl placeholder:text-gray-400 placeholder:font-libre focus:placeholder-transparent placeholder:pl-2"
                           placeholder="First Name"
                           type="text"
                           name="firstName"
                      />
                  <input
                          className="border  h-10 w-65 rounded-full shadow-xl placeholder:text-gray-400 placeholder:font-libre focus:placeholder-transparent placeholder:pl-2"
                           placeholder="Last Name"
                           type="text"
                           name="lastName"
                      />
                  </div>
                  <input
                          className="border  h-10 w-135 rounded-full shadow-xl placeholder:text-gray-400 placeholder:font-libre focus:placeholder-transparent placeholder:pl-2"
                           placeholder="Email"
                           type="text"
                           name="email"
                  />
                  <input
                          className="border  h-10 w-135 rounded-full shadow-xl placeholder:text-gray-400 placeholder:font-libre focus:placeholder-transparent placeholder:pl-2"
                           placeholder="Subject"
                           type="text"
                           name="subject"
                  />
                  <textarea
                          className="border   w-135 rounded-lg shadow-xl placeholder:text-gray-400 placeholder:font-libre focus:placeholder-transparent placeholder:pl-2"
                           placeholder="Message"
                           rows={7}
                           name="message"
                  />
                  
                      <button
                            type="submit"
                            className="bg-[#C2394C]/60 text-white px-6 py-2 rounded-md w-fit text-bold"
                    >
                            Submit
                        </button>
              </div>
          </div>
          
          
            
          </section>
      
  )
}

export default ContactUs