import React from "react";
import { GiTomato } from "react-icons/gi";

const Information = () => {
  return (
    <section className="flex flex-col gap-y-2 bg-white">
      <h1 className=" mt-3 text-2xl font-bold">
        An online Pomodoro Timer to boost your productivity
      </h1>
      <article>
        <h2 className=" text-xl font-semibold mb-2 flex items-center gap-2">
          <GiTomato className=" text-2xl text-red-500" />
          What is Pomodoro Timer?
        </h2>
        <p className=" text-lg font-normal tracking-tighter ">
          Pomodoro Timer is a customizable timer to use Pomodoro Technique
          easily within a browser and boost your productivity. You can use
          Pomodoro Technique on any task such as studying, working and coding.
          This timer will help you using pomodoro Technique more easily and fun.
        </p>
      </article>
      <article>
        <h2 className=" text-xl font-semibold mb-2 flex items-center gap-2">
          <GiTomato className=" text-2xl text-red-500" />
          What is Pomodoro Technique?
        </h2>
        <p className=" text-lg font-normal tracking-tighter ">
          The Pomodoro Technique is a time management method developed by
          Francesco Cirillo in the late 1980s. It uses a timer to break work
          into intervals, typically 25 minutes in length, separated by short
          breaks. Each interval is known as a pomodoro, from the Italian word
          for tomato, after the tomato-shaped kitchen timer Cirillo used as a
          university student -
          <a
            href="https://www.techtarget.com/whatis/definition/pomodoro-technique#:~:text=The%20Pomodoro%20Technique%20is%20a,tomato%20(plural%3A%20pomodori)."
            target="_blank"
            className="text-[#ba4949] font-bold"
          >
            further reading.
          </a>
        </p>
      </article>
      <article>
        <h2 className=" text-xl font-semibold mb-2 flex items-center gap-2">
          <GiTomato className=" text-2xl text-red-500" />
          How to use Pomodoro technique?
        </h2>
        <ol className="list-decimal text-lg font-normal tracking-tighter list-inside   ">
          <li>
            <span className="text-[#ba4949] font-semibold ">Decide a task</span>{" "}
            to be done.
          </li>
          <li>
            <span className="text-[#ba4949] font-semibold ">Set the time</span>{" "}
            for pomodoro (normally 25 minutes but my fav is 30 minutes).
          </li>
          <li>
            <span className="text-[#ba4949] font-semibold ">
              Start the timer
            </span>{" "}
            and focus on task until timer sounds.
          </li>

          <li>
            <span className="text-[#ba4949] font-semibold ">
              Take a short break
            </span>{" "}
            (2 to 5 minutes).
          </li>
          <li>
            <span className="text-[#ba4949] font-semibold ">
              Repeat four times
            </span>{" "}
            from step 2 to 4.
          </li>
          <li>
            <span className="text-[#ba4949] font-semibold ">
              Take a long break
            </span>{" "}
            after finishing the four pomodoro slices.
          </li>
        </ol>
      </article>
      <article>
        <h2 className=" text-xl font-semibold mb-2 flex items-center gap-2">
          <GiTomato className=" text-2xl text-red-500" />
          Why you should use ?
        </h2>
        <p className=" text-lg font-normal tracking-tighter ">
          If you find it difficult to focus for long periods of time, or if you
          often lose motivation after a few hours of studying or working, the
          Pomodoro Technique can help. And The Pomodoro Technique is a proven
          time management method that can help you to focus more effectively and
          get more done in less time.
        </p>
      </article>
    </section>
  );
};

export default Information;
