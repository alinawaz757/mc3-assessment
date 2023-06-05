export function formatDate(dateString) {
  try {
    const date = new Date(dateString);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }).format(date);

    return formattedDate;
  } catch (e) {
    return dateString;
  }
}
