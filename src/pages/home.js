import HumansAll from "../assets/humans_all.png";
import Peertopeer from "../assets/peertopeer.png";
import Realworld from "../assets/real_world.png";
import Invite from "../assets/invite.png";
import Volunteer from "../assets/volunteer.png";
import Card from "../components/card.js";

const Home = () => {
  return (
    <div className="md:container md:mx-auto">
      {/* header starts here */}
      <div class="flex flex-row justify-between p-4 mt-3">
        <h1 className="text-lg font-bold text-gray-600">Community</h1>
        <h1 className="text-sm font-normal text-gray-600">Join Now</h1>
      </div>
      {/* header ends here */}

      <div class="flex flex-col items-center w-full mt-16">
        <h1 className="font-sans text-4xl font-bold text-center text-gray-800 leading-tight w-11/12">
          A Learning Community For Mamo College
        </h1>
        <h1 className="font-sans text-xl font-normal text-center text-gray-500 leading-tight mt-3 w-11/12">
          Help you accelerate your learning, and bring you closer to like-minded
          individuals, who could all be a valuable asset in your journey
        </h1>
        <button className="mt-3 pl-7 pr-7 p-2 bg-yellow-400 rounded font-semibold">
          JOIN NOW
        </button>
        <img src={HumansAll} className="w-full h-auto mt-7" alt="im" />
      </div>

      {/* cards starts here */}
      <div
        class="flex flex-row items-center w-full mt-3 mb-6 overflow-scroll p-8"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <Card
          heading="Peer-to-peer mentorship"
          subHeading="Improve communication and interpersonal skills"
          image={Peertopeer}
        />
        <Card
          heading="Ideas into real world projects"
          subHeading="Hands on experience in real world projects"
          image={Realworld}
        />
        <Card
          heading="Peer-to-peer mentorship"
          subHeading="Improve communication and interpersonal skills"
          image={Peertopeer}
        />
        <Card
          heading="Peer-to-peer mentorship"
          subHeading="Improve communication and interpersonal skills"
          image={Peertopeer}
        />
      </div>
      {/* cards ends here */}

      {/* waves starts here */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f1edff"
          fill-opacity="1"
          d="M0,64L60,96C120,128,240,192,360,208C480,224,600,192,720,165.3C840,139,960,117,1080,128C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div
        className="w-full flex flex-col items-center "
        style={{
          background:
            "linear-gradient(360deg, rgba(255,255,255,1) 9%, rgba(241,237,255,1) 42%, rgba(241,237,255,1) 30%)",
          height: "auto",
        }}
      >
        <img src={Invite} className="w-full h-auto" alt="im" />
        <h1 className="font-sans text-2xl font-bold text-center text-gray-700 leading-tight w-11/12">
          Invite your friends to join the community
        </h1>
        <button className="mt-4 mb-3 pl-7 pr-7 p-2 bg-yellow-400 rounded font-semibold">
          INVITE NOW
        </button>
      </div>
      {/* waves ends here */}

      {/* rounded rectangle starts here */}
      <div
        className="flex flex-col items-center p-2 w-full mt-6 mb-6"
        style={{ borderRadius: "50px", background: "#FFF9E8" }}
      >
        <img src={Volunteer} className="w-full h-auto" alt="im" />
        <h1 className="font-sans text-2xl font-bold text-center text-gray-700 leading-tight w-11/12">
          Be a community volunteer
        </h1>
        <h1 className="font-sans text-sm font-normal text-center text-gray-500 leading-tight mt-1 w-11/12">
          There is so much that you can do to this community, Be a volunteer and
          let's make a change together
        </h1>
        <button className="mt-4 mb-3 pl-7 pr-7 p-2 bg-yellow-400 rounded font-semibold">
          APPLY NOW
        </button>
      </div>
      {/* rounded rectangle ends here */}
    </div>
  );
};

export default Home;
