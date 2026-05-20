import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Socials from "../components/Socials";
import authorPic from "../assets/author-pic.jpeg";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="mt-24 relative py-32 bg-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-25 left-15 w-24 h-24 bg-secondary/10 rounded-full"></div>
          <div className="absolute top-45 right-20 w-32 h-32 bg-secondary/5 rounded-full"></div>
          <div className="absolute bottom-25 left-1/4 w-28 h-28 bg-secondary/8 rounded-full"></div>
        </div>
        <div className="relative w-full text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-900 leading-tight mb-6">
            About <span className="text-secondary">Michael</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Author & Podcaster
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Author Profile Section */}
        <div className="grid lg:grid-cols-5 gap-12 items-center mb-20">
          {/* Bio Content */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Journey Continues
              </h2>
              <div className="prose prose-lg max-w-none text-left text-gray-700 leading-relaxed text-lg space-y-4">
                <p className="">
                  <strong>Michael Vadney</strong> was born in the Florida Keys,
                  raised in the woods of Pennsylvania, and currently resides
                  somewhere between the real world and the fantastic realms in
                  his head.
                </p>
                <p className="">
                  In his early-thirties, he rekindled his childhood dream of
                  becoming an author. Balancing a full-time career in software
                  with an unshakable need to write, Michael dedicated nights,
                  weekends, and an unreasonable number of pre-dawn hours to
                  storytelling. The result was <strong>Crownfall</strong>, his
                  debut novel and proof that sleep is, in fact, optional.
                </p>
                <p className="">
                  His writing lives in the nobledark corner of fantasy, where
                  grim, morally complex worlds meet heroic virtues. He believes
                  every story worth telling explores the space between who we
                  are and who we could become.
                </p>
                <p>
                  When he's not writing, podcasting, or reading... well, no,
                  actually, it's almost always one of those three.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-secondary"
                    />
                  </div>
                  <div className="text-left">
                    <span className="font-semibold text-gray-900 block">
                      Location
                    </span>
                    <span className="text-gray-600">Fort Worth, Texas</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faStar} className="text-secondary" />
                  </div>
                  <div className="text-left">
                    <span className="font-semibold text-gray-900 block">
                      Focus
                    </span>
                    <span className="text-gray-600">Nobledark Fantasy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-2">
            <div className="relative group">
              <img
                src={authorPic}
                alt="Michael Vadney"
                className="w-full h-full object-cover p-3 rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-20">
          <Socials />
        </div>

        {/* Writing Philosophy */}
        <div className="bg-gray-50 border border-gray-200 text-gray-900 p-12 lg:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          </div>
          <div className="relative text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Writing <span className="text-secondary">Philosophy</span>
            </h2>
            <blockquote className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed italic">
              "Every story worth telling explores the space between who we are
              and who we could become. In writing, we get to ask the biggest
              questions about power, justice, and survival, and maybe find some
              answers along the way."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
