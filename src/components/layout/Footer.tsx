export function Footer() {
  return (
    <footer className="pt-32 pb-20 px-6 border-t border-neutral-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 transition-colors hover:text-brand-blue cursor-default text-brand-dark">
              Let's build the <br />future system.
            </h2>
            <p className="text-xl text-brand-gray mb-10 max-w-md font-sans">
              Currently open for leadership roles in UI Engineering and Design Systems.
            </p>
            <div className="flex flex-col gap-6 font-sans">
              <a
                href="mailto:akshithamekala04@gmail.com"
                className="text-2xl md:text-3xl font-bold hover:text-brand-blue transition-colors underline decoration-brand-blue/20 text-brand-dark"
              >
                akshithamekala04@gmail.com
              </a>
              <div className="flex flex-wrap gap-x-8 gap-y-4 mt-4">
                <a href="https://www.linkedin.com/in/m-akshitha-36b69124b/" className="font-bold text-brand-gray hover:text-white text-sm">
                  LINKEDIN
                </a>
                <a href=" https://github.com/akshitha07" className="font-bold text-brand-gray hover:text-white text-sm">
                  GITHUB
                </a>
<a
  href="/resume/Akshitha_Mekala_Resume.pdf"
  download
  className="font-bold text-brand-gray hover:text-white text-sm transition"
>
  RESUME
</a>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 p-12 rounded-[3rem] border border-neutral-200">
            <h4 className="text-2xl font-bold mb-8 text-brand-dark">Send a Quick Brief</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-gray">NAME</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b-2 border-neutral-200 py-3 focus:border-brand-blue focus:outline-none transition-colors text-brand-dark"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-gray">EMAIL</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b-2 border-neutral-200 py-3 focus:border-brand-blue focus:outline-none transition-colors text-brand-dark"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-gray">MESSAGE</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-neutral-200 py-3 focus:border-brand-blue focus:outline-none transition-colors text-brand-dark"
                />
              </div>
              <button className="w-full py-4 bg-brand-blue text-white rounded-xl font-bold shadow-lg shadow-brand-blue/20 hover:opacity-90 transition-all cursor-pointer">
                Submit Request
              </button>
            </form>
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-gray font-medium">
          <p>&copy; 2026 Akshitha. Built with React 19, TypeScript & AI.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white text-nowrap">
              Accessibility Statement
            </a>
            <a href="#" className="hover:text-white text-nowrap">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
