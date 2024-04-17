"use client";

import Link from "@/node_modules/next/link";

const DoForFunDetails: React.FC = () => {
  return (
    <div className="space-y-3 mt-3">
      <p className="text-left">
        Believe it or not, I actually do like to code for fun! I enjoy the
        thrill of building new features and seeing them actually be used by
        others. I&apos;ve had a lot of crazy ideas in the past, but if I do see
        an issue that can be solved using software, I will try my best to get
        involved! I have some projects that I am working on at the moment that I
        will love to productionize as soon as possible, so stayed tuned for that
        &#128579;. I also have recently started getting involved in the open
        source community to try and give back to the community that has helped
        me so much throughout my career. If you want to collaborate on a project
        please let me know!
      </p>
      <p className="text-left">
        <div>Here are some fun tech websites that I like to learn from</div>
        <div>
          <a
            className="underline"
            target="_blank"
            href="https://devclass.com/"
            rel="noopener noreferrer"
          >
            DevClass
          </a>
        </div>
        <div>
          <a
            className="underline"
            target="_blank"
            href="https://dev.to/"
            rel="noopener noreferrer"
          >
            Dev Community
          </a>
        </div>
        <div>
          <a
            className="underline"
            target="_blank"
            href="https://www.infoq.com/"
            rel="noopener noreferrer"
          >
            InfoQ
          </a>
        </div>
      </p>
      <p className="text-left">
        In addition to coding, I also enjoy playing video games on my
        Playstation and computer. I find running and exercising very peaceful
        and relaxing but as I get older and my body starts to break down, I have
        started becoming more of a couch potato and watching more movies and tv
        shows.
      </p>
      <p className="text-left">
        <b>Fun Fact</b> : I do love collecting all types of different things
        like autographs, action figures, etc. I believe I have over 500 of the
        funko pop figures, but whos counting &#128541;. I haven&apos;t been
        collecting as much recently as I have run out of space in my house, but
        that just inspires me to work harder so I can buy a bigger house hehe.
      </p>
    </div>
  );
};

export default DoForFunDetails;
