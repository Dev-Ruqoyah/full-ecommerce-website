import React from "react";
const SectionService = () => {
    return ( 
    <>
    <div className="py-8">
        <div className="container mx-auto">
          <div className="flex md:flex-row  flex-col gap-6 md:gap-10 justify-evenly">
            <div className="fast flex-col items-center justify-center mx-auto">
              <div className="bg-gray-300 w-12 h-12 rounded-full p-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 p-1 bg-black rounded-full text-white flex items-center"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">FREE AND FAST DELIVERY</h3>
              <p>Free delivery for all order over $140</p>
            </div>
            <div className="fast flex-col items-center justify-center mx-auto">
              <div className="bg-gray-300 w-12 h-12 rounded-full p-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 p-1 bg-black rounded-full text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">24/7 CUSTOMER SERVICE</h3>
              <p>Friendly 24/7 customer service</p>
            </div>
            <div className="fast flex-col items-center justify-center mx-auto">
              <div className="bg-gray-300 w-12 h-12 rounded-full p-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 p-1 bg-black text-white rounded-full"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">MONEY BACK GUARANTEE</h3>
              <p>We return money in 30 days</p>
            </div>
          </div>
          <div className="top-down-button flex justify-end ">
            <button className="p-3 rounded-full bg-gray-300">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                  />
                </svg>
              </a>
            </button>
          </div>
        </div>
      </div>
    </> );
}
 
export default SectionService;