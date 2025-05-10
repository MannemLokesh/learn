export default function Header() {
  return (
    <div className="bg-[#010d3c] grid md:grid-cols-2 gap-2 md:gap-4 sm:grid-cols-4 grid-cols-4">
      <div className="grid grid-cols-1 col-span-1 md:grid-cols-2 sm:grid-cols-1 sm:col-span-1">
        <div>
          <a href="/">
            <img
              className="w-60 size-16 hidden md:block"
              src="/logo2.png"
              alt="Application Logo"
            />
            <img
              className="w-14 size-12 block md:hidden"
              src="/mobile_screen_logo.png"
              alt="Application Logo"
            />
          </a>
        </div>
        <div className="hidden md:flex">
          <button className="flex items-center space-x-2 px-4 py-2 text-white bg-[#010d3c] rounded">
            {/* Grid Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-grid"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
            </svg>

            {/* Text + Dropdown Icon */}
            <span className="flex items-center space-x-1">
              <span>Category</span>
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224 374.6l11.3-11.3 160-160L406.6 192 384 169.4l-11.3 11.3L224 329.4 75.3 180.7 64 169.4 41.4 192l11.3 11.3 160 160L224 374.6z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center sm:grid-cols-1 sm:col-span-3  col-span-3 md:col-span-1">
        <div className="relative w-full max-w px-2 mx-auto">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border text-xs md:text-base text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search your favourite tutorials ..."
            id="search-strings"
            name="key"
            aria-label="Search"
            autoComplete="off"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
