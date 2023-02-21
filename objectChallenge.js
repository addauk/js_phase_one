// file: objectChallenge.js

const cohort = {
  name: "May2022",
  id: 1234,
  students: ["Adam", "Jane", "Louie", "Sarah"],
};

const printCohort = (cohortObject) => {
  console.log(`${cohortObject.id} - ${cohortObject.name} - ${cohortObject.students.length} students in this cohort`)
};

printCohort(cohort);