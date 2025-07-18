import GridBackground from "@/components/backgrounds/gird-background";

export default function CTA() {
  return (
    <GridBackground className="bg-white min-h-screen flex items-center justify-center">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full py-24 sm:py-32">
        <div className="relative isolate overflow-hidden bg-gray-900 pt-16 shadow-2xl md:pt-24 lg:flex lg:gap-x-16 lg:px-12 lg:pt-0 w-full min-h-[500px] items-center justify-center rounded-3xl">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 h-256 w-5xl -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="text-center lg:text-left lg:flex-auto lg:py-32 w-full lg:w-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Learn how to solve complex problems
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="https://www.linkedin.com/company/dalcsl/"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Linkedin
              </a>
              <a
                href="https://www.instagram.com/dalcsl/"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-96 sm:h-[28rem] lg:mt-8 flex-shrink-0 lg:w-[600px] lg:h-[400px] px-6 sm:px-8 lg:px-12">
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="/assets/leetcode.webp"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </GridBackground>
  );
}
