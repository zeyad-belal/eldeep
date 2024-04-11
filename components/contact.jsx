// pages/contact.js or a similar file

export default function Contact() {
  return (
    <>
      <div className=" overflow-hidden min-h-[450px] justify-center mx-auto  px-3 md:px-6 lg:px-12 lg:mx-6 mt-6">
        <h2 className="text-xl mb-8 px-8"> CONTACT ME: </h2>
        <div className="flex flex-wrap justify-center text-start px-9">
                <div className="w-full flex flex-col justify-start mb-6 text-gray-500">
                  <h2 className="text-2xl font-semibold">Available 24/7</h2>
                  <p className="text-md leading-relaxed ">Get In Touch</p>
                </div>
              </div>
        <div className="flex md:flex-nowrap flex-wrap justify-center">
          
          <div className="w-full px-4 flex justify-center">
            
            <form className="flex flex-col gap-4 items-start w-full max-w-lg">
              <div className="flex flex-wrap w-full -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 text-right">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="w-full">
            <div className="flex flex-col text-left">

              <div className="flex flex-col gap-8">

              <p>
                <strong className="text-gray-400">Location:</strong> Dubai, United Emirates
              </p>
              <p>
                <strong className="text-gray-400">Phone Number:</strong> +971581202186
              </p>
              <p>
                <strong className="text-gray-400">Email Address:</strong> ziadeldeeb33@gmail.com
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
