export default function AboutPage() {
  return (
    <div className=" px-5 lg:px-15 mt-10 ">
      <h1 className=" lg:text-4xl  font-bold text-primary mb-10 text-blue-900">
        About
      </h1>
      <section className="space-y-6 lg:w-2/3 ">
        <div>
          <h2 className="font-semibold  mb-3">
            What is US News Insider?
          </h2>
          <p className="text-gray-700 text-xl eading-relaxed whitespace-pre-line">
            Welcome to US News Insider, your trusted source for the latest news, in-depth analysis, and expert insights on current events, politics,
             business, technology, and more. Our mission is to provide accurate, 
             unbiased, and up-to-date information to keep you informed about the
              topics that matter most. Whether you're looking for breaking news,
               investigative reports, or expert opinions, US News Insider delivers
                the knowledge you need in a fast-paced world.
          </p>
        </div>

        <div>
          <h2 className="font-semibold mb-3">
            Our Coverage Areas
          </h2>

          <ul className=" text-xl list-disc list-inside text-gray-700 space-y-2">
            <li><b>Politics:</b> In-depth political analysis and elections</li>
            <li><b>Business & Economy:</b> Market trends and finance</li>
            <li><b>Technology:</b> AI, innovations, and tech trends</li>
            <li><b>World News:</b> Global affairs and diplomacy</li>
            <li><b>Health & Science:</b> Medical and scientific updates</li>
            <li><b>Entertainment:</b> Movies, TV, and pop culture</li>
            <li><b>Sports:</b> Matches, highlights, and updates</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold  mb-2">
            Our Commitment to Journalism
          </h2>
          <p className="text-gray-700 lg:text-xl leading-relaxed">
            We believe in ethical journalism and fact-based reporting. Our team
            works tirelessly to deliver reliable, well-researched, and objective
            news coverage.
          </p>
        </div>

        <div>
          <h2 className="font-semibold  mb-2">
            Stay Connected
          </h2>
          <p className="text-gray-700 lg:text-xl leading-relaxed">
            Follow us on social media and subscribe to our newsletter to get the
            latest updates directly in your inbox.
          </p>
        </div>

        <div>
          <h2 className="font-semibold 
           mb-2">
            Join the Conversation
          </h2>
          <p className="text-gray-700 lg:text-xl leading-relaxed">
            Share your thoughts, opinions, and feedback. We encourage healthy
            discussions and diverse perspectives.
          </p>
        </div>
      </section>

    </div>
  );
}
