import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="relative bg-huly-background py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-title font-semibold mb-6 tracking-tight">
                Everything App for<br />your teams
              </h1>
              <p className="text-lg md:text-xl text-grey-60 mb-8 max-w-2xl mx-auto">
                Huly, an open-source platform, serves as an all-in-one replacement of Linear, Jira, Slack, and Notion.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href="/signup"
                  className="px-6 py-3 bg-white text-huly-dark rounded-full font-medium text-sm transition-transform hover:scale-105"
                >
                  Try it Free
                </Link>
              </div>
            </div>
          </div>

          {/* Background glow effect */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
            <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-huly-accent/20 filter blur-[120px] opacity-60" />
            <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] rounded-full bg-huly-orange/10 filter blur-[100px] opacity-50" />
          </div>
        </section>

        {/* Features Marquee */}
        <section className="bg-huly-dark py-6 border-y border-white/10">
          <div className="flex space-x-8 text-sm text-grey-60">
            <div className="flex space-x-8 animate-marquee">
              {[
                "Team Planner",
                "Project Management",
                "Virtual Office",
                "Chat",
                "Documents",
                "Inbox",
              ].map((item) => (
                <div key={item} className="whitespace-nowrap">{item}</div>
              ))}
            </div>
            <div className="flex space-x-8 animate-marquee">
              {[
                "Team Planner",
                "Project Management",
                "Virtual Office",
                "Chat",
                "Documents",
                "Inbox",
              ].map((item) => (
                <div key={item} className="whitespace-nowrap">{item}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Productivity Section */}
        <section className="py-20 bg-huly-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-title font-semibold mb-6 text-center">
              Unmatched productivity
            </h2>
            <p className="text-lg text-grey-60 mb-12 text-center max-w-3xl mx-auto">
              Huly is a process, project, time, and knowledge management platform that provides amazing collaboration opportunities for developers and product teams alike.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature Cards */}
              <div className="bg-huly-dark rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-semibold mb-3">Keyboard shortcuts</h3>
                <p className="text-grey-60">Work efficiently with instant access to common actions.</p>
              </div>
              <div className="bg-huly-dark rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-semibold mb-3">Team Planner</h3>
                <p className="text-grey-60">Keep track of the bigger picture by viewing all individual tasks in one centralized team calendar.</p>
              </div>
              <div className="bg-huly-dark rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-semibold mb-3">Notifications</h3>
                <p className="text-grey-60">Keep up to date with any changes by receiving instant notifications.</p>
              </div>
              <div className="bg-huly-dark rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-semibold mb-3">Time-blocking</h3>
                <p className="text-grey-60">Transform daily tasks into structured time blocks for focused productivity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Office Section */}
        <section className="py-20 bg-huly-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-title font-semibold mb-6">
              Work together.<br />Like in the office.
            </h2>
            <p className="text-lg text-grey-60 mb-12 max-w-3xl">
              Create customized virtual office spaces for any department or event with high quality audio and video conferencing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-huly-dark rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-semibold mb-3">Customize workspace</h3>
                <p className="text-grey-60">Create your own offices and meeting rooms to suit your team's needs.</p>
              </div>
              <div className="bg-huly-dark rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-semibold mb-3">Audio and video calls</h3>
                <p className="text-grey-60">Collaborate efficiently and seamlessly with high quality virtual conferencing.</p>
              </div>
              <div className="bg-huly-dark rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-semibold mb-3">Invite guests</h3>
                <p className="text-grey-60">Meet with guests without ever needing to leave your workspace.</p>
              </div>
            </div>
          </div>
        </section>

        {/* GitHub Integration Section */}
        <section className="py-20 bg-huly-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-title font-semibold mb-6 text-center">
              Sync with GitHub.<br />Both ways.
            </h2>
            <p className="text-lg text-grey-60 mb-12 text-center max-w-3xl mx-auto">
              Manage your tasks efficiently with Huly's bidirectional GitHub synchronization. Use
              Huly as an advanced front-end for GitHub Issues and GitHub Projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* GitHub Feature Cards */}
              <div className="bg-huly-background/30 rounded-2xl p-6 border border-white/5">
                <div className="w-10 h-10 bg-huly-accent/20 rounded-full flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 5.5L12 3L16.5 5.5M7.5 5.5V12.5L12 15M7.5 5.5L3 8V15L7.5 17.5M12 15L16.5 12.5V5.5M12 15V21M16.5 12.5L21 15L16.5 17.5"
                      stroke="#8ea9c5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Two-way synchronization</h3>
                <p className="text-grey-60">Integrate your task tracker with GitHub to sync changes instantly.</p>
              </div>
              <div className="bg-huly-background/30 rounded-2xl p-6 border border-white/5">
                <div className="w-10 h-10 bg-huly-accent/20 rounded-full flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14.5V16.5M7 10.5H17M7 7.5H17M8 19.5H16C17.1046 19.5 18 18.6046 18 17.5V6.5C18 5.39543 17.1046 4.5 16 4.5H8C6.89543 4.5 6 5.39543 6 6.5V17.5C6 18.6046 6.89543 19.5 8 19.5Z"
                      stroke="#8ea9c5" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Private tasks</h3>
                <p className="text-grey-60">Integration and management of multiple data repositories effectively.</p>
              </div>
              <div className="bg-huly-background/30 rounded-2xl p-6 border border-white/5">
                <div className="w-10 h-10 bg-huly-accent/20 rounded-full flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 8H9.2C8.0799 8 7.51984 8 7.09202 8.21799C6.71569 8.40973 6.40973 8.71569 6.21799 9.09202C6 9.51984 6 10.0799 6 11.2V16.8C6 17.9201 6 18.4802 6.21799 18.908C6.40973 19.2843 6.71569 19.5903 7.09202 19.782C7.51984 20 8.0799 20 9.2 20H14.8C15.9201 20 16.4802 20 16.908 19.782C17.2843 19.5903 17.5903 19.2843 17.782 18.908C18 18.4802 18 17.9201 18 16.8V15M18 11V4M18 4L15 7M18 4L21 7"
                      stroke="#8ea9c5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Multiple repositories</h3>
                <p className="text-grey-60">Organize multiple projects for more effective planning and collaboration.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Base Section */}
        <section className="py-20 bg-huly-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-title font-semibold mb-6 text-center">
              Knowledge at Your Fingertips
            </h2>
            <p className="text-lg text-grey-60 mb-12 text-center max-w-3xl mx-auto">
              Huly offers a wide range of features to create and manage your project documentation. Huly's suite of collaborative editing tools boosts team efficiency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-huly-dark rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-semibold mb-3">Collaborate</h3>
                <p className="text-grey-60">Enhance teamwork with powerful real-time collaboration features.</p>
              </div>
              <div className="bg-huly-dark rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-semibold mb-3">Version History</h3>
                <p className="text-grey-60">Track every edit effortlessly, and never lose a single change.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-huly-dark relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-title font-semibold mb-6">
                Join the Movement
              </h2>
              <p className="text-lg text-grey-60 mb-10">
                Unlock the future of productivity with Huly.<br />
                Remember, this journey is just getting started.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href="/signup"
                  className="px-8 py-3 bg-white text-huly-dark rounded-full font-medium text-sm w-full sm:w-auto text-center"
                >
                  Start now
                </Link>
                <a
                  href="https://huly.link/slack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-white/30 text-white rounded-full font-medium text-sm w-full sm:w-auto text-center"
                >
                  Join our Slack
                </a>
              </div>
            </div>
          </div>

          {/* Background design elements */}
          <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden">
            <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-huly-orange/10 filter blur-[100px] opacity-50" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
