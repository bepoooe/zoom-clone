import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-8 text-white">
      <div className="h-[303px] w-full rounded-3xl bg-gradient-to-br from-brand-black-800 via-brand-black-700 to-brand-black-900 border border-brand-orange-500/30 shadow-2xl overflow-hidden relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange-500/10 to-transparent"></div>
        <div className="absolute top-4 right-4 w-32 h-32 bg-brand-orange-500/15 rounded-full blur-3xl"></div>
        
        <div className="flex h-full flex-col justify-center max-md:px-6 max-md:py-8 lg:p-11 relative z-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold lg:text-7xl bg-gradient-to-r from-white via-brand-orange-200 to-brand-orange-300 bg-clip-text text-transparent drop-shadow-lg animate-fadeInUp">
              {time}
            </h1>
            <p className="text-lg font-medium text-brand-orange-200 lg:text-2xl opacity-90 animate-slideInRight">
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
