import { PropTypes } from 'prop-types';

const announcements = [
  {
    id: '01',
    date: 'August 4',
    data: 'NYSL Fundraiser',
  },
  {
    id: '02',
    date: 'August 16',
    data: 'Season Kick-off: Meet the Teams',
  },
  {
    id: '03',
    date: 'September 1',
    data: 'First Game of the Season (Check Game Schedule for details)',
  },
];
function Announcement({ announcement }) {
  return (
    <div>
      <p className="mb-0">{announcement.date}</p>
      <p>{announcement.data}</p>
    </div>
  );
}
Announcement.propTypes = {
  announcement: PropTypes.shape({
    id: PropTypes.string,
    date: PropTypes.string,
    data: PropTypes.string,
  }).isRequired,
};
function AnnouncementList({ announcementList }) {
  return (
    <div>
      {Object.values(announcementList).map((announcement) => (
        <Announcement key={announcement.id} announcement={announcement} />
      ))}
    </div>
  );
}
AnnouncementList.propTypes = {
  announcementList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function Home() {
  return (
    <>
      <div>
        <p className="display-6">Upcomming Events</p>
        <AnnouncementList announcementList={announcements} />
      </div>
      <div>
        <p className="display-6">Contact Us</p>
        <p>
          Please email us at
          {' '}
          <a href="mailto:nysl@chisoccer.org">nysl@chisoccer.org</a>
        </p>
        <p>We will reply to your email as soon as we can.</p>
      </div>
    </>
  );
}

export default Home;
