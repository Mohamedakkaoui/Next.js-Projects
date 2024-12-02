"use client";
import CountUp from "react-countup";

const stats = [
  { num: 1, text: "Years of experience" },
  { num: 5, text: "Project completed" },
  { num: 18, text: "Technologies mastered" },
  { num: 100000, text: "code commits" },
];
function Stats() {
  return (
    <>
      <section className="pb-12 xl:pb-0 xl:pt-0 pt-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((state, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                >
                  <span className="text-3xl">
                    {state.text === "code commits" ? "+" : ""}
                  </span>
                  <CountUp
                    end={state.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold"
                  />
                  <p
                    className={`${
                      state.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                    } leading-snug text-white/80`}
                  >
                    {state.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Stats;
