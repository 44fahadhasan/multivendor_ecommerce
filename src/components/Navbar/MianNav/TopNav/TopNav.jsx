const TopNav = () => {
  return (
    <nav class="bg-[#004d66] min-h-[40px] px-4 py-2 sm:px-10 flex items-center max-sm:flex-col">
      <button type="button" class="text-white text-sm">
        Currency
      </button>
      <span class="border-l h-3 mx-6 max-sm:hidden"></span>
      <button
        type="button"
        class="text-white text-sm max-sm:my-2 flex items-center"
      >
        Lang
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div class="sm:ml-auto text-white">
        <a href="javscript:void(0)" class="text-white text-sm mr-1">
          Sign In
        </a>
        /
        <a href="javscript:void(0)" class="text-white text-sm ml-1">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default TopNav;
