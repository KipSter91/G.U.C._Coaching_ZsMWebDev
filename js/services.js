export const servicesModal = [
  "lifestyle",
  "onlineCoaching",
  "workouts",
  "mealPlans",
  "nutritions",
  "recipes",
].reduce((acc, key) => {
  acc[key] = {
    key, // this is used to build both title and description keys
    image: `/Images/${key}.jpg`, // optional dynamic image based on key
  };
  return acc;
}, {});