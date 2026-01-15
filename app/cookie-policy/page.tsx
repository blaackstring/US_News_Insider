export default function CookiePolicyPage() {
  return (
    <div className="px-5 lg:px-16">
      <section className="space-y-6 lg:w-2/3">

        <div>
          <h1 className="font-semibold text-3xl text-blue-900 mb-3">
            Cookie Policy
          </h1>
          <p className="text-gray-700 text-xl leading-relaxed">
            At US News Insider, we use cookies and similar tracking technologies to enhance your browsing experience, personalize content, analyze website traffic, and improve our services. This Cookie Policy explains how we use cookies, the types of cookies we utilize, and how you can manage your preferences.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-3">
            What Are Cookies?
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed">
            Cookies are small text files stored on your device when you visit a website. They help us recognize your device, remember your preferences, and improve website functionality, allowing us to deliver a seamless and personalized user experience.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-3">
            Types of Cookies We Use
          </h2>
          <ul className="list-disc list-inside text-xl text-gray-700 space-y-3">
            <li>
              <strong>Essential Cookies:</strong> Required for core website functionality such as security, authentication, and page navigation.
            </li>
            <li>
              <strong>Performance Cookies:</strong> Collect anonymous data about website usage, including page visits and loading times, to improve performance.
            </li>
            <li>
              <strong>Functional Cookies:</strong> Remember user preferences such as language settings, font size, and region.
            </li>
            <li>
              <strong>Advertising & Targeting Cookies:</strong> Used to deliver relevant advertisements based on browsing behavior and interests.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Track website traffic and user behavior using tools such as Google Analytics.
            </li>
            <li>
              <strong>Third-Party Cookies:</strong> Set by third-party services including social media platforms, embedded content, and advertising networks.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-3">
            How We Use Cookies
          </h2>
          <ul className="list-disc list-inside text-xl text-gray-700 space-y-2">
            <li>Improve website functionality and security.</li>
            <li>Analyze visitor behavior to enhance user experience.</li>
            <li>Provide personalized content and recommendations.</li>
            <li>Deliver targeted advertisements.</li>
            <li>Ensure seamless integration with social media platforms.</li>
            <li>Monitor website performance and identify technical issues.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-3">
            Third-Party Cookies & Tracking
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed">
            Some cookies on our website are placed by third-party services such as analytics providers, advertisers, and social media platforms. These services may collect information about your online activities across different websites.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-3">
            Managing Your Cookie Preferences
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed mb-3">
            You can manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect website functionality.
          </p>

          <ul className="list-disc list-inside text-xl text-gray-700 space-y-2">
            <li>
              <strong>Google Chrome:</strong>{" "}
              <a
                href="https://support.google.com/chrome/answer/95647?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                Manage Cookies
              </a>
            </li>
            <li>
              <strong>Mozilla Firefox:</strong>{" "}
              <a
                href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                Manage Cookies
              </a>
            </li>
            <li>
              <strong>Microsoft Edge:</strong>{" "}
              <a
                href="https://support.microsoft.com/en-us/microsoft-edge/view-cookies-in-microsoft-edge-63947406-40ac-c3b4-7d80-1637143a6c3a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                Manage Cookies
              </a>
            </li>
            <li>
              <strong>Safari:</strong>{" "}
              <a
                href="https://support.apple.com/en-us/HT201265"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                Manage Cookies
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-3">
            Do Not Track (DNT) Signals
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed">
            Some browsers allow users to send a “Do Not Track” signal. At this time, our website does not respond to DNT signals due to inconsistencies in browser implementations.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-3">
            Changes to This Cookie Policy
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed">
            We may update this Cookie Policy periodically. Any changes will be posted on this page, and we encourage users to review it regularly.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-3">
            Contact Us
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed">
            If you have any questions about this Cookie Policy, please contact us at:
          </p>
          <p className="text-gray-700 text-xl mt-2">
            📧 Email: <span className="text-blue-700">contact@usnewsinsider.com</span>
          </p>
          <p className="text-gray-700 text-xl">
            📍 Address: US News Insider, 1234 News Street, New York, NY 10001, USA
          </p>
          <p className="text-gray-700 text-xl">
            📞 Phone: +1 (555) 123-4567
          </p>
        </div>

      </section>
    </div>
  );
}
