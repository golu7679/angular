interface Date {
  addDays(value: number): Date;
  addSeconds(value: number): Date;
  addMinutes(value: number): Date;
  addHours(value: number): Date;
  addMonths(value: number): Date;
}

const getDate = () => {
  return new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  // format => YYYY/MM/DD
};
// gmt 5:30
const getDate2 = () => {
  return new Date().toLocaleDateString();
};

const addDayInDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 10);
  return date.toJSON().slice(0, 10).replace(/-/g, "/");
};

Date.prototype.addDays = function (value: number) {
  let new_date = this.valueOf();
  new_date += 86400000 * value;
  return new Date(new_date);
};

Date.prototype.addSeconds = function (value: number) {
  let data = this.valueOf();
  data += 1000 * value;
  return new Date(data);
};

Date.prototype.addMinutes = function (value: number) {
  let data = this.valueOf();
  data += 60000 * value;
  return new Date(data);
};

Date.prototype.addHours = function (value: number) {
  let data = this.valueOf();
  data += 3600000 * value;
  return new Date(data);
};

Date.prototype.addMonths = function (value: number) {
  let val = new Date(this.valueOf());

  let m = this.getMonth();
  let y = this.getFullYear();

  m = (m + value) % 12;

  if (0 > m) {
    y += (this.getMonth() + value - m - 12) / 12;
    m += 12;
  } else y += (this.getMonth() + value - m) / 12;

  val.setMonth(m);
  val.setFullYear(y);
  return val;
};
