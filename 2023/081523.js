//Job Matching #1 - 8kyu
// create a function match (job_matching in Python) which takes a candidate and a job, which will return a Boolean indicating whether the job is a valid match for the candidate.

function match(candidate, job) {
  console.log(candidate)
  if (!candidate.minSalary) {
    throw new Error("Minimum Salary required");
  }
  if (!job.maxSalary) {
    throw new Error("Maximum Salary required")
  }
  return candidate.minSalary<=job.maxSalary || candidate.minSalary*0.9 <= job.maxSalary;
}
