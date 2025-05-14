"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function MobileMenu({ setMenuOpen }: { setMenuOpen: (open: boolean) => void }) {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed left-1/2 top-0 z-50 mt-4 -translate-x-1/2 w-full max-w-[1192px] rounded-3xl bg-[rgba(11,11,14,0.36)] backdrop-blur-md text-white shadow-2xl transition-all duration-300 overflow-y-auto max-h-[calc(100vh-2rem)]">
      <div className="p-5 max-w-[1192px] mx-auto">
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="https://www.verznexus.ai/newhomepage" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <div style={{ width: "126px", height: "26.4531px", overflow: "hidden" }}>
              <svg
                width="126"
                height="26.4531"
                viewBox="0 0 200 42"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M65.9764 10.5068L60.9196 25.026L55.71 10.5068H50.7891L58.8487 31.0452H63.0518L70.8439 10.5068H65.9764Z"
                  fill="white"
                />
                <path
                  d="M74.2932 21.3974C74.7924 19.5223 76.1508 18.41 78.0638 18.41C79.9924 18.41 81.3879 19.4603 81.9952 21.3974H74.2932ZM78.0641 14.7531C73.3469 14.7531 69.8203 18.3514 69.8203 23.1231C69.8203 27.8711 73.3712 31.4933 78.0641 31.4933C81.754 31.4933 84.7961 29.2926 85.952 25.8382H81.4356C80.7825 26.9722 79.5571 27.6762 78.0638 27.6762C75.9794 27.6762 74.5534 26.4856 74.1799 24.3232H86.2088C86.2625 23.9045 86.2918 23.4858 86.2918 23.0673H86.2924C86.2924 18.5032 82.9449 14.7531 78.0641 14.7531Z"
                  fill="white"
                />
                <path
                  d="M92.2812 17.1424L91.5174 15.2013H88.7617V31.0452H93.0589V22.8141C93.0589 20.2236 94.0165 19.1541 96.4383 19.1541H98.3033V15.1132H96.8906C94.849 15.1132 93.4129 15.7414 92.2812 17.1424Z"
                  fill="white"
                />
                <path
                  d="M131.494 10.5068L128.859 23.6203L122.241 10.5068H118.427L115.724 23.9813C115.36 25.7979 113.759 27.1056 111.901 27.1056H105.735L112.428 15.7854V15.2013H99.9483V19.0877H106.07L99.293 30.5679V31.0452H112.162C115.881 31.0452 119.082 28.4277 119.809 24.7926L121.248 17.6017L128.091 31.0452H131.624L135.744 10.5068H131.494Z"
                  fill="white"
                />
                <path
                  d="M144.407 18.2708L144.407 18.2711C146.455 18.2711 147.704 19.389 147.901 21.4348H139.739C140.608 19.6137 142.252 18.2708 144.407 18.2708ZM146.486 25.8821C145.594 27.0865 144.15 27.8333 142.534 27.8333C140.312 27.8333 139.049 26.6751 139.049 24.511C139.049 24.4423 139.051 24.3736 139.053 24.3052L151.382 24.3046C151.608 23.5001 151.777 22.7031 151.756 21.7649C151.756 17.8875 148.901 14.7655 144.713 14.7655C139.151 14.7655 135.16 19.1671 135.16 24.4564C135.16 28.4173 137.956 31.4808 142.047 31.4808C145.877 31.4808 149.043 29.419 150.881 25.8821H146.486Z"
                  fill="white"
                />
                <path
                  d="M169.109 15.2013H164.35L160.436 19.9829L158.407 15.2013H153.992L157.518 22.7318L150.447 31.0452H155.379L159.651 25.9049L161.916 31.0452H166.267L162.453 22.9067L169.109 15.2013Z"
                  fill="white"
                />
                <path
                  d="M179.803 23.69C179.34 25.9974 177.762 27.645 175.675 27.645C173.932 27.645 172.952 26.8225 172.952 25.1734C172.952 24.4061 173.141 23.7238 174.844 15.2012H170.753C169.007 23.719 168.793 24.4737 168.793 25.6764C168.81 29.113 171.261 31.481 175.166 31.481C179.64 31.481 182.852 28.8821 183.705 24.6066L185.589 15.2012H181.498L179.803 23.69Z"
                  fill="white"
                />
                <path
                  d="M199.913 20.0166C199.971 19.715 200.001 19.4216 200.001 19.149C200.001 16.6425 197.844 14.7653 194.43 14.7653C190.374 14.7653 187.187 16.9029 187.187 20.6871C187.187 23.5411 189.819 24.0567 192.018 24.4675C193.579 24.7486 194.921 25.0254 194.921 26.0701C194.921 27.375 193.516 28.0762 192.096 28.0762C190.73 28.0762 189.69 27.4716 189.69 26.2788C189.69 26.1512 189.706 26.0101 189.73 25.8654H185.781C185.723 26.1881 185.693 26.5108 185.693 26.8335C185.693 29.6703 188.119 31.4807 191.466 31.4807C195.717 31.4807 199.042 29.2552 199.042 25.274C199.042 22.3986 196.347 21.8706 194.139 21.4679C192.565 21.1748 191.227 20.9146 191.227 19.8955C191.227 18.7959 192.356 18.0406 193.901 18.0406C195.299 18.0406 196.108 18.6066 196.108 19.6336C196.108 19.7522 196.093 19.8828 196.073 20.0166H199.913Z"
                  fill="white"
                />
                <path
                  d="M42.0931 20.2748C42.5109 32.6392 32.1982 42.7154 19.7247 41.9601C9.22242 41.3243 0.721265 32.8977 0.0209805 22.4324C0.0150482 22.3463 0.00996354 22.2604 0.00516126 22.1742C-0.178173 18.8376 4.57721 17.9905 5.57693 21.1802L9.21282 32.7803H15.4272L20.9719 12.0632V32.7803H25.94V22.1666L30.6711 32.7803H35.8733V10.5H30.9053V21.1137L26.1742 10.5H16.2496L12.1885 25.6781C11.2029 22.5338 10.2173 19.3892 9.23202 16.2446C6.48343 7.47424 11.7736 0.0206223 20.9911 6.48499e-05C21.2165 -0.000499725 21.4428 0.00259781 21.6699 0.00907516C32.7089 0.330658 41.7214 9.27196 42.0931 20.2748Z"
                  fill="white"
                />
              </svg>
            </div>
          </a>

          {/* Close Button */}
          <button
            className="w-[44px] h-[44px] text-3xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            ×
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center mt-6">
          <a
            href="/"
            className="flex items-center justify-center text-white hover:text-[rgb(69,106,255)] transition-colors rounded-full w-min h-min"
            style={{
              padding: "16px 24px",
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "150%",
            }}
            data-highlight="true"
            tabIndex={0}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </a>
          <a
            href="https://www.verznexus.ai/reports"
            className="flex items-center justify-center text-white/70 hover:text-[rgb(69,106,255)] transition-colors rounded-full w-min h-min"
            style={{
              padding: "16px 24px",
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "150%",
            }}
            tabIndex={0}
            onClick={() => setMenuOpen(false)}
          >
            Reports
          </a>
          <a
            href="https://www.verznexus.ai/forms"
            className="flex items-center justify-center text-white/70 hover:text-[rgb(69,106,255)] transition-colors whitespace-nowrap rounded-full w-min h-min"
            style={{
              padding: "16px 24px",
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "150%",
            }}
            tabIndex={0}
            onClick={() => setMenuOpen(false)}
          >
            Get Early Access
          </a>
        </div>

        {/* See How It Works Button */}
        <div className="flex justify-center mt-6 mb-4">
          <Link
            href="/how-it-works"
            className="flex items-center border border-[rgba(255,255,255,0.36)] rounded-full"
            style={{
              padding: "12px 28px",
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "150%",
            }}
            tabIndex={0}
            onClick={() => setMenuOpen(false)}
          >
            <span className="font-medium">See How It Works</span>
            <div
              className="ml-2 w-5 h-5 bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M%202.5%2010%20L%2017.5%2010%20M%2017.5%2010%20L%2010.417%2017.083%20M%2017.5%2010%20L%2010.417%202.917%22%20fill%3D%22transparent%22%20stroke%3D%22rgb(255%2C255%2C255)%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-dasharray%3D%22%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E")`,
              }}
            ></div>
          </Link>
        </div>
      </div>
    </div>
  )
}
