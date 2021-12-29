export const ChatTime = ({ time }) => {
  const now = Date.now();
  const formattedNow = new Date(now);
  const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
  const formattedYesterday = new Date(yesterday);
  const formattedTime = new Date(time);
  const dateNow = formattedNow.toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  });
  const dateYesterday = formattedYesterday.toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  });
  const dateMessage = formattedTime.toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  });
  if (dateMessage === dateNow) {
    return (
      formattedTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }) + " | Today"
    );
  } else if (dateMessage === dateYesterday) {
    return (
      formattedTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }) + " | Yesterday"
    );
  } else {
    return (
      formattedTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }) +
      " | " +
      formattedTime.toLocaleDateString("en-us", {
        month: "short",
        day: "numeric",
      })
    );
  }
};
