import Chance from "chance";
const chance = Chance();

export const fake_user_data = () => {
//   console.log(chance.name({ middle: true }));
return chance.name({ middle: true });
};

