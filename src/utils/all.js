/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("pt-br", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";
