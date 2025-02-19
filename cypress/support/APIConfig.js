export const obsQueryParams = {
  recent_weeks: 10,
  order_dir: "desc",
};

export const obsHeaders = {
  accept: "application/json",
};

export const incorrectParams = {
  ...obsQueryParams,
  end_date: "2025-01-01"
}