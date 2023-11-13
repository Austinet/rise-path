import mentor from "../assets/images/mentor.png";

const mentorVideos = [
  {
    id: 1,
    title: "The power of entrepreneural mindset",
    video: mentor,
    author: "Bil Richie",
  },
  {
    id: 2,
    title: "The power of entrepreneural mindset",
    video: mentor,
    author: "Bil Richie",
  },
  {
    id: 3,
    title: "The power of entrepreneural mindset",
    video: mentor,
    author: "Bil Richie",
  },
  {
    id: 4,
    title: "The power of entrepreneural mindset",
    video: mentor,
    author: "Bil Richie",
  },
  {
    id: 5,
    title: "The power of entrepreneural mindset",
    video: mentor,
    author: "Bil Richie",
  },
  {
    id: 6,
    title: "The power of entrepreneural mindset",
    video: mentor,
    author: "Bil Richie",
  },
  {
    id: 7,
    title: "The power of entrepreneural mindset",
    video: mentor,
    author: "Bil Richie",
  },
  {
    id: 8,
    title: "The power of entrepreneural mindset",
    video: mentor,
    author: "Bil Richie",
  },
  {
    id: 9,
    title: "The power of entrepreneural mindset",
    video: mentor,
    author: "Bil Richie",
  },
];

const Mentorship = () => {
  return (
    <section className="max-h-[50rem] overflow-auto  custom-scroll-2">
      {/* Mentorship videos */}
      <div className="bg-white  p-2">
        <h2 className="text-[0.75rem] font-medium leading-normal mb-5">
          Videos from Mentors
        </h2>
        <div className="flex gap-5 pb-3 overflow-auto max-w-[80rem] w-full custom-scroll">
          {mentorVideos.map((video) => (
            <div
              key={video.id}
              className="rounded-lg bg-[#F8F8F8] min-w-[300px]"
            >
              <img src={video.video} alt="" className="rounded-lg w-full" />
              <div className="flex items-center p-2 justify-between">
                <div>
                  <h3>{video.title}</h3>
                  <p>- {video.author}</p>
                </div>
                <button>fl</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career stories from Mentors */}
      <div className="bg-white  p-2">
        <h2 className="text-[0.75rem] font-medium leading-normal mb-5">
          Career stories from Mentors
        </h2>
        <div className="flex gap-5 pb-3 overflow-auto max-w-[80rem] w-full custom-scroll">
          {mentorVideos.map((video) => (
            <div
              key={video.id}
              className="rounded-lg bg-[#F8F8F8] min-w-[300px]"
            >
              <img src={video.video} alt="" className="rounded-lg w-full" />
              <div className="flex items-center p-2 justify-between">
                <div>
                  <h3>{video.title}</h3>
                  <p>- {video.author}</p>
                </div>
                <button>fl</button>
              </div>
            </div>
          ))}
        </div>
      </div>

         {/* Mentorship videos */}
         <div className="bg-white  p-2">
        <h2 className="text-[0.75rem] font-medium leading-normal mb-5">
          Videos from Mentors
        </h2>
        <div className="flex gap-5 pb-3 overflow-auto max-w-[80rem] w-full custom-scroll">
          {mentorVideos.map((video) => (
            <div
              key={video.id}
              className="rounded-lg bg-[#F8F8F8] min-w-[300px]"
            >
              <img src={video.video} alt="" className="rounded-lg w-full" />
              <div className="flex items-center p-2 justify-between">
                <div>
                  <h3>{video.title}</h3>
                  <p>- {video.author}</p>
                </div>
                <button>fl</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
