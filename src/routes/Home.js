const announcements = [
  {
    "id": "00001",
    date: "August 4",
    data: "NYSL Fundraiser",
  },
  {
    id: "00002",
    date: "August 16",
    data: "Season Kick-off: Meet the Teams",
  },
  {
    id: "00003",
    date: "September 1",
    data: "First Game of the Season (Check Game Schedule for details)",
  },
];
const Announcement = ({ announcement }) => (
  <div key={announcement.id}>
    <p>{announcement.date}</p>
    <p>{announcement.data}</p>
  </div>
);
const AnnouncementList = ({ announcements }) => (
  <div>
    {Object.values(announcements).map((announcement) => (
      <Announcement announcement={announcement} />
    ))}
  </div>
);

export const Home = () => (
  <>
    <h3 className="display-3">Upcomming Events</h3>
    <div>
      <AnnouncementList announcements={announcements} />
    </div>
    <h3 className="display-3">Contact Us</h3>
    <div>
      <p>
        Please email us at{" "}
        <a href="mailto:nysl@chisoccer.org">nysl@chisoccer.org</a>
      </p>
      <p>We will reply to your email as soon as we can.</p>
    </div>
  </>
);
