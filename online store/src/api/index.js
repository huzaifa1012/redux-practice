import Chance from "chance";
const chance = Chance();

export const fake_user_data = () => {
  return chance.name();
};
