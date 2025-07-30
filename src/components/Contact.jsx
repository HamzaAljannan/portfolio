
import Reveal from "./Reveal"

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      
        <Reveal>
        <h2 className='text-3xl font-bold text-gray-200 mb-8 text-center'>Contact</h2>
        <div className=" place-items-center">
            <div>
            </div>

            <form
                action=""
                method="POST"
                className=" max-w-6xl p-5 md:p-12"
                id="form"
            >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
                type="text"
                id="name"
                placeholder="Your Name ..."
                name="name"
                className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 bg-white bg-opacity-90 text-gray-900"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 bg-white bg-opacity-90 text-gray-900"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 bg-white bg-opacity-90 text-gray-900"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color hover:bg-purple-700 hover:tracking-wider duration-500"
            >
              Send Message
            </button>
            
          </form>
        </div>
        
        </Reveal>
    </div>
  )
}

export default Contact