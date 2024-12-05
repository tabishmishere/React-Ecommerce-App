import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta laborum odio incidunt aspernatur facilis fugit vel, temporibus magni ducimus est.</p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Deliver</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="lex flex-col gap-1 text-gray-600">
            <li>+923020457538</li>
            <li>tabishm484@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ forever.com - All Rights Reserverd</p>
      </div>
    </div>
  )
}

export default Footer