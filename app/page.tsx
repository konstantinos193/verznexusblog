"use client"

import Image from "next/image"
import Link from "next/link"
import MobileMenu from "@/components/mobile-menu"
import { useEffect, useState } from "react"

export default function BlogPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-white relative" style={{ background: "#0a0b12" }}>
      {/* Mobile Menu Drawer */}
      {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}

      {/* Navigation - Sticky Header */}
      { !menuOpen && (
        <div className="sticky top-2 z-50 w-full max-w-[1192px] mx-auto">
          <div className="backdrop-blur-md bg-[rgba(11,11,14,0.36)] w-full rounded-full px-5 py-3 flex items-center justify-between h-[76px] md:h-[76px] sm:h-[64px]">
            <div className="flex items-center">
              {/* Logo container */}
              <div className="flex items-center ml-1">
                <a href="https://www.verznexus.ai/newhomepage" className="flex items-center">
                  <div style={{ width: "126px", height: "26.4531px", overflow: "hidden", marginLeft: "-1px" }}>
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
              </div>

              {/* Desktop Navigation Links - hidden on mobile */}
              <div
                className="hidden md:flex items-center justify-center gap-2 ml-6"
                style={{
                  width: "383.016px",
                  height: "56px",
                }}
              >
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
                >
                  Get Early Access
                </a>
              </div>
            </div>

            {/* Right side items */}
            <div className="flex items-center gap-4">
              {/* Desktop "See How It Works" Button - hidden on mobile */}
              <div className="hidden md:block">
                <a
                  href="https://www.verznexus.ai/forms"
                  className="flex items-center border border-[rgba(255,255,255,0.36)] rounded-full"
                  style={{
                    padding: "12px 28px",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                  tabIndex={0}
                >
                  <span className="font-medium">See How It Works</span>
                  <div
                    className="ml-2 w-5 h-5 bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M%202.5%2010%20L%2017.5%2010%20M%2017.5%2010%20L%2010.417%2017.083%20M%2017.5%2010%20L%2010.417%202.917%22%20fill%3D%22transparent%22%20stroke%3D%22rgb(255%2C255%2C255)%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-dasharray%3D%22%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E")`,
                    }}
                  ></div>
                </a>
              </div>

              {/* Hamburger button in header */}
              <button
                className="md:hidden relative w-[44px] h-[44px] overflow-hidden cursor-pointer"
                onClick={() => setMenuOpen(true)}
                aria-label="Open mobile menu"
                tabIndex={0}
                data-highlight="true"
              >
                {/* Top line */}
                <div
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "15.5px",
                    width: "20px",
                    height: "2px",
                    backgroundColor: "rgb(153, 153, 153)",
                    borderRadius: "10px",
                    transform: "translateX(-50%)",
                    transition: "all 0.3s",
                  }}
                ></div>
                {/* Bottom line */}
                <div
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "27.5px",
                    width: "20px",
                    height: "2px",
                    backgroundColor: "rgb(153, 153, 153)",
                    borderRadius: "10px",
                    transform: "translateX(-50%)",
                    transition: "all 0.3s",
                  }}
                ></div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div
        className="w-full flex flex-col items-center"
        style={{
          padding: "44px 124px",
          gap: "44px",
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
        <div className="w-[616px] flex flex-col items-center gap-4" style={{padding: 0, margin: 0}}>
          <h1
            className="font-manrope text-[48px] font-medium leading-[110%] tracking-[-0.03em] text-white text-center"
            style={{
              color: "#fff",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              margin: 0,
              padding: 0,
            }}
          >
            Insights That Power<br />AI-Driven Business
          </h1>
          <p
            className="font-plus-jakarta text-[16px] leading-[150%] text-center"
            style={{
              color: "rgb(211, 207, 224)",
              fontWeight: 400,
              margin: 0,
              padding: 0,
            }}
          >
            Stay ahead with actionable articles, industry analysis, and hands-on strategies for AI adoption, curated for SMEs, operators, and innovators building the future.
          </p>
        </div>

        {/* Gradient Glow Behind Cards */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "180px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "1200px",
            height: "900px",
            zIndex: 0,
            pointerEvents: "none",
            background: "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(69,106,255,0.12) 0%, rgba(10,11,18,0.0) 80%)",
          }}
        />

        {/* Blog Posts Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Blog Post 1 */}
          <Link href="/blog/workflow-automation" className="block w-full">
            <div
              className="flex flex-col w-full"
              style={{
                width: "380px",
                maxWidth: "100%",
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
                borderRadius: "24px",
                border: "1px solid rgba(128, 100, 232, 0.12)",
                background: "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(69,106,255,0.04) 0%, #18181b 100%)"
              }}
            >
              {/* Image Container */}
              <div
                className="w-full overflow-hidden"
                style={{
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                  borderLeft: "1px solid rgba(128, 100, 232, 0.24)",
                  borderRight: "1px solid rgba(128, 100, 232, 0.24)",
                  borderTop: "1px solid rgba(128, 100, 232, 0.24)",
                }}
              >
                <div className="relative w-full" style={{ height: "220px" }}>
                  <Image
                    src="/workflow-automation.png"
                    alt="Workflow Automation"
                    fill
                    className="object-cover object-center-top"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div
                className="w-full p-6 flex flex-col"
                style={{
                  background:
                    "radial-gradient(110% 162% at 149.6% -46.2%, rgba(69, 106, 255, 0.64) 0%, rgba(11, 11, 14, 0.64) 100%)",
                  borderBottomLeftRadius: "24px",
                  borderBottomRightRadius: "24px",
                  borderLeft: "1px solid rgba(128, 100, 232, 0.24)",
                  borderRight: "1px solid rgba(128, 100, 232, 0.24)",
                  borderBottom: "1px solid rgba(128, 100, 232, 0.24)",
                }}
              >
                <h3 className="text-xl font-bold mb-6 font-plus-jakarta">
                  Top 5 Workflow Automation Tools for Small Businesses
                </h3>
                <div className="mt-auto">
                  <div
                    className="inline-flex items-center justify-center border border-[rgba(255,255,255,0.36)] rounded-full px-5 py-2 font-plus-jakarta"
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "150%",
                    }}
                  >
                    Read more
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Blog Post 2 */}
          <Link href="/blog/ai-automation-costs" className="block w-full">
            <div
              className="flex flex-col w-full"
              style={{
                width: "380px",
                maxWidth: "100%",
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
                borderRadius: "24px",
                border: "1px solid rgba(128, 100, 232, 0.12)",
                background: "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(69,106,255,0.04) 0%, #18181b 100%)"
              }}
            >
              {/* Image Container */}
              <div
                className="w-full overflow-hidden"
                style={{
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                  borderLeft: "1px solid rgba(128, 100, 232, 0.24)",
                  borderRight: "1px solid rgba(128, 100, 232, 0.24)",
                  borderTop: "1px solid rgba(128, 100, 232, 0.24)",
                }}
              >
                <div className="relative w-full" style={{ height: "220px" }}>
                  <Image
                    src="/placeholder.svg?key=kkt1l"
                    alt="AI Automation"
                    fill
                    className="object-cover object-center-top"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div
                className="w-full p-6 flex flex-col"
                style={{
                  background:
                    "radial-gradient(110% 162% at 149.6% -46.2%, rgba(69, 106, 255, 0.64) 0%, rgba(11, 11, 14, 0.64) 100%)",
                  borderBottomLeftRadius: "24px",
                  borderBottomRightRadius: "24px",
                  borderLeft: "1px solid rgba(128, 100, 232, 0.24)",
                  borderRight: "1px solid rgba(128, 100, 232, 0.24)",
                  borderBottom: "1px solid rgba(128, 100, 232, 0.24)",
                }}
              >
                <h3 className="text-xl font-bold mb-6 font-plus-jakarta">
                  5 Ways AI Automation Reduces Operating Costs
                </h3>
                <div className="mt-auto">
                  <div
                    className="inline-flex items-center justify-center border border-[rgba(255,255,255,0.36)] rounded-full px-5 py-2 font-plus-jakarta"
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "150%",
                    }}
                  >
                    Read more
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Blog Post 3 */}
          <Link href="/blog/ai-integration-strategies" className="block w-full">
            <div
              className="flex flex-col w-full"
              style={{
                width: "380px",
                maxWidth: "100%",
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
                borderRadius: "24px",
                border: "1px solid rgba(128, 100, 232, 0.12)",
                background: "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(69,106,255,0.04) 0%, #18181b 100%)"
              }}
            >
              {/* Image Container */}
              <div
                className="w-full overflow-hidden"
                style={{
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                  borderLeft: "1px solid rgba(128, 100, 232, 0.24)",
                  borderRight: "1px solid rgba(128, 100, 232, 0.24)",
                  borderTop: "1px solid rgba(128, 100, 232, 0.24)",
                }}
              >
                <div className="relative w-full" style={{ height: "220px" }}>
                  <Image
                    src="/placeholder.svg?key=l20l5"
                    alt="AI Integration"
                    fill
                    className="object-cover object-center-top"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div
                className="w-full p-6 flex flex-col"
                style={{
                  background:
                    "radial-gradient(110% 162% at 149.6% -46.2%, rgba(69, 106, 255, 0.64) 0%, rgba(11, 11, 14, 0.64) 100%)",
                  borderBottomLeftRadius: "24px",
                  borderBottomRightRadius: "24px",
                  borderLeft: "1px solid rgba(128, 100, 232, 0.24)",
                  borderRight: "1px solid rgba(128, 100, 232, 0.24)",
                  borderBottom: "1px solid rgba(128, 100, 232, 0.24)",
                }}
              >
                <h3 className="text-xl font-bold mb-6 font-plus-jakarta">
                  7 AI Integration Strategies for Small Business Growth
                </h3>
                <div className="mt-auto">
                  <div
                    className="inline-flex items-center justify-center border border-[rgba(255,255,255,0.36)] rounded-full px-5 py-2 font-plus-jakarta"
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "150%",
                    }}
                  >
                    Read more
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Blog Post 4 */}
          <Link href="/blog/no-code-platform" className="block w-full">
            <div
              className="flex flex-col w-full"
              style={{
                width: "380px",
                maxWidth: "100%",
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
                borderRadius: "24px",
                border: "1px solid rgba(128, 100, 232, 0.12)",
                background: "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(69,106,255,0.04) 0%, #18181b 100%)"
              }}
            >
              {/* Image Container */}
              <div
                className="w-full overflow-hidden"
                style={{
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                  borderLeft: "1px solid rgba(128, 100, 232, 0.24)",
                  borderRight: "1px solid rgba(128, 100, 232, 0.24)",
                  borderTop: "1px solid rgba(128, 100, 232, 0.24)",
                }}
              >
                <div className="relative w-full" style={{ height: "220px" }}>
                  <Image
                    src="/placeholder.svg?key=c22q5"
                    alt="No-Code Platform"
                    fill
                    className="object-cover object-center-top"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div
                className="w-full p-6 flex flex-col"
                style={{
                  background:
                    "radial-gradient(110% 162% at 149.6% -46.2%, rgba(69, 106, 255, 0.64) 0%, rgba(11, 11, 14, 0.64) 100%)",
                  borderBottomLeftRadius: "24px",
                  borderBottomRightRadius: "24px",
                  borderLeft: "1px solid rgba(128, 100, 232, 0.24)",
                  borderRight: "1px solid rgba(128, 100, 232, 0.24)",
                  borderBottom: "1px solid rgba(128, 100, 232, 0.24)",
                }}
              >
                <h3 className="text-xl font-bold mb-6 font-plus-jakarta">
                  No-Code Platform Selection: 8-Point Checklist for SMBs
                </h3>
                <div className="mt-auto">
                  <div
                    className="inline-flex items-center justify-center border border-[rgba(255,255,255,0.36)] rounded-full px-5 py-2 font-plus-jakarta"
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "150%",
                    }}
                  >
                    Read more
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Blog Post 5 */}
          <Link href="/blog/ai-vs-manual" className="block w-full">
            <div
              className="flex flex-col w-full"
              style={{
                width: "380px",
                maxWidth: "100%",
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
                borderRadius: "24px",
                border: "1px solid rgba(128, 100, 232, 0.12)",
                background: "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(69,106,255,0.04) 0%, #18181b 100%)"
              }}
            >
              {/* Image Container */}
              <div
                className="w-full overflow-hidden"
                style={{
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                  borderLeft: "1px solid rgba(128, 100, 232, 0.24)",
                  borderRight: "1px solid rgba(128, 100, 232, 0.24)",
                  borderTop: "1px solid rgba(128, 100, 232, 0.24)",
                }}
              >
                <div className="relative w-full" style={{ height: "220px" }}>
                  <Image
                    src="/placeholder.svg?key=kkr8o"
                    alt="AI vs Manual Processes"
                    fill
                    className="object-cover object-center-top"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div
                className="w-full p-6 flex flex-col"
                style={{
                  background:
                    "radial-gradient(110% 162% at 149.6% -46.2%, rgba(69, 106, 255, 0.64) 0%, rgba(11, 11, 14, 0.64) 100%)",
                  borderBottomLeftRadius: "24px",
                  borderBottomRightRadius: "24px",
                  borderLeft: "1px solid rgba(128, 100, 232, 0.24)",
                  borderRight: "1px solid rgba(128, 100, 232, 0.24)",
                  borderBottom: "1px solid rgba(128, 100, 232, 0.24)",
                }}
              >
                <h3 className="text-xl font-bold mb-6 font-plus-jakarta">
                  AI vs Manual Processes: Real Business Impact Analysis
                </h3>
                <div className="mt-auto">
                  <div
                    className="inline-flex items-center justify-center border border-[rgba(255,255,255,0.36)] rounded-full px-5 py-2 font-plus-jakarta"
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "150%",
                    }}
                  >
                    Read more
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Blog Post 6 */}
          <Link href="/blog/blockchain-business" className="block w-full">
            <div
              className="flex flex-col w-full"
              style={{
                width: "380px",
                maxWidth: "100%",
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
                borderRadius: "24px",
                border: "1px solid rgba(128, 100, 232, 0.12)",
                background: "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(69,106,255,0.04) 0%, #18181b 100%)"
              }}
            >
              {/* Image Container */}
              <div
                className="w-full overflow-hidden"
                style={{
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                  borderLeft: "1px solid rgba(128, 100, 232, 0.24)",
                  borderRight: "1px solid rgba(128, 100, 232, 0.24)",
                  borderTop: "1px solid rgba(128, 100, 232, 0.24)",
                }}
              >
                <div className="relative w-full" style={{ height: "220px" }}>
                  <Image
                    src="/placeholder.svg?key=52ee1"
                    alt="Blockchain for Business"
                    fill
                    className="object-cover object-center-top"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div
                className="w-full p-6 flex flex-col"
                style={{
                  background:
                    "radial-gradient(110% 162% at 149.6% -46.2%, rgba(69, 106, 255, 0.64) 0%, rgba(11, 11, 14, 0.64) 100%)",
                  borderBottomLeftRadius: "24px",
                  borderBottomRightRadius: "24px",
                  borderLeft: "1px solid rgba(128, 100, 232, 0.24)",
                  borderRight: "1px solid rgba(128, 100, 232, 0.24)",
                  borderBottom: "1px solid rgba(128, 100, 232, 0.24)",
                }}
              >
                <h3 className="text-xl font-bold mb-6 font-plus-jakarta">
                  Blockchain for Business: Common Questions Answered
                </h3>
                <div className="mt-auto">
                  <div
                    className="inline-flex items-center justify-center border border-[rgba(255,255,255,0.36)] rounded-full px-5 py-2 font-plus-jakarta"
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "150%",
                    }}
                  >
                    Read more
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
