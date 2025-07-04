import LargeGridBackground from "./backgrounds/large-grid-background";

export default function Content() {
  return (
    <LargeGridBackground
      className="bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                About us
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Better Coding
              </h1>
              <p className="mt-6 text-base leading-8 text-gray-700">
                The Dalhousie Computer Science Leaders Society provides an
                environment for students to explore and deepen their
                understanding of computer science fundamentals: problem-solving,
                data structures, algorithms, cloud computing, systems design,
                and real-world applications.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
            src="/assets/c-code.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
              No resources? No problem.
            </h2>
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                We conduct workshops, seminars, talks by industry experts, and
                weekly competitive programming contests to equip students with
                the most cutting-edge knowledge in computer science, ensuring
                their skills remain at the forefront of the latest developments
                in the field.
              </p>
            
              <p className="mt-8">
                Additionally, we provide students with practical experience by
                working on projects relevant to the field which helps them land
                opportunities for internships and co-op positions.
              </p>

              <p className="mt-6">
                The main goal of this society is to create leaders for the
                future. We give students the tools they need to succeed in the
                competitive field of computer science and become future leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LargeGridBackground>
  );
}
