
const getRandEvent = () => {
  const events = ['Marathon', 'Triathlon', 'Pentathlon', 'Ultra Marathon'];
  const randomIndex = Math.floor(Math.random() * events.length);
  return events[randomIndex];
};
const getTrainingDays = event => {
  let days;
  switch (event) {
    case 'Marathon':
      days = 50;
      break;
    case 'Triathlon':
      days = 100;
      break;
    case 'Pentathlon':
      days = 200;
      break;
    case 'Ultra Marathon':
      days = 150;
      break;
    default:
      console.log('Invalid event');
  }
  return days;
};

const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const name = 'Nadia';
const event = getRandEvent();
const days = getTrainingDays(event);

logEvent(name, event);
logTime(name, days);
