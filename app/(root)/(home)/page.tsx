import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-8 text-white">
      <div className="relative h-[303px] w-full overflow-hidden rounded-3xl border border-brand-orange-500/30 bg-gradient-to-br from-brand-black-800 via-brand-black-700 to-brand-black-900 shadow-2xl">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange-500/10 to-transparent"></div>
        <div className="absolute top-4 right-4 size-32 rounded-full bg-brand-orange-500/15 blur-3xl"></div>
        
        <div className="relative z-10 flex h-full flex-col justify-center max-md:px-6 max-md:py-8 lg:p-11">
          <div className="flex flex-col gap-3">
            <h1 className="animate-fadeInUp bg-gradient-to-r from-white via-brand-orange-200 to-brand-orange-300 bg-clip-text text-4xl font-bold text-transparent drop-shadow-lg lg:text-7xl">
              {time}
            </h1>
            <p className="animate-slideInRight text-lg font-medium text-brand-orange-200 opacity-90 lg:text-2xl">
              {date}
            </p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
