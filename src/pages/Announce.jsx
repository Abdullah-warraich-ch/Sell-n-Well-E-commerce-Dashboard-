import React from 'react';
import CreateAnnounceForm from '@/features/announce/components/CreateAnnounceForm';
import ActiveAnnouncementsList from '@/features/announce/components/ActiveAnnouncementsList';

function Announce() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-6 sm:gap-8 min-h-full animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary-text">
            Store Announcements
          </h1>
          <p className="text-sm font-medium text-secondary-text mt-1.5 opacity-90">
            Publish top-banner alerts to communicate directly with all store visitors.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-6 xl:gap-8 items-start">
        <div className="flex flex-col gap-6">
          <CreateAnnounceForm />
        </div>
        <div className="flex flex-col gap-6">
          <ActiveAnnouncementsList />
        </div>
      </div>
    </div>
  );
}

export default Announce;