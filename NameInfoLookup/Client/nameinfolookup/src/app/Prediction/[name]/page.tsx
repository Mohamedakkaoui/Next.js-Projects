import React from "react";
const GetPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};
const GetPredictedGender = async (Gender: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${Gender}`);
  return res.json();
};
const GetPredictedCountry = async (Country: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${Country}`);
  return res.json();
};
interface Params {
  params: { name: string };
}
async function page({ params }: Params) {
  const ageData = GetPredictedAge(params.name);
  const genderData = GetPredictedGender(params.name);
  const countryData = GetPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-red-500 font-bold text-xl">Personal Info :</div>
        <div>Age : {age?.age}</div>
        <div>Gender : {gender?.gender}</div>
        <div>Country : {country?.country[0]?.country_id}</div>
      </div>
    </>
  );
}

export default page;
