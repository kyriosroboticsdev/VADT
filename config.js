// VADT Configuration
// ─────────────────────────────────────────────────────────────────────────────
// This file contains API credentials for VADT.
// It is listed in .gitignore so it is NEVER committed to GitHub.
// Each person running VADT locally needs their own copy of this file.
//
// For the GitHub Pages deployment, this file is uploaded MANUALLY via the
// GitHub web interface (not committed via git) so it stays out of git history.
// ─────────────────────────────────────────────────────────────────────────────

const VADT_CONFIG = {
  // RobotEvents API token — get one at robotevents.com/api/v2
  robotEventsToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZWIzZGI5OGRmNTBiMWFmNDc3ZTU5M2RiOGRlNzg4ODdmM2FlY2MwNTI3MmFkMGU5MGJkN2E2ZmMxYWQzNzU4YjhlM2NkNThlYzYwMzBlZmIiLCJpYXQiOjE3NzQ4OTMzNzEuODQyMjI3OSwibmJmIjoxNzc0ODkzMzcxLjg0MjIyODksImV4cCI6MjcyMTY2NDU3MS44MzcwMTk5LCJzdWIiOiIxMjIzNzgiLCJzY29wZXMiOltdfQ.K3aXfO1srFoZmuYcD5bsd0s3Tz55BJj5srGHxF2sKTFnHQV73XU7vjGB1EylKKr9zHgnNlM7ver2swluJQuyMeILBy-VQwJvEEpRZlS5Asful4Q9nN85v4z8Jt1D_ZBWZGFVyqgIArPPKXGtB1rTJ_4GcNgcjw3VV3hKI2HrIZBgFUIcBWpziWR_YDrdgYvGxP01FGivK6KPssvb9vHhJZwnz7kL2604NdGCtJcW5zWDkPh46SDaQyv9auhbGopFKQEt4Nx9uBFgh3zw-o85lOM2fHZSipBgxGNgQDgIWtX0gz6TUKizUJ3H5r-mxAdwgGMXamfa1161G3LJTN1Y54Coiaq4dR_oNLmtwwfWpFo0BrH1Qf6dICFUhoS8o2G-FJDJF9Fz8cvk6gNe1t3NqJFXyb46QzSISVaAu4sLG7UmcpcU5UD3l-htrQoLq29xVCA1J74io2O9NPZ53O9XWPTey81pwX10NeeApvdNQc0S8Uzd8LLiRzCodbhKXCnkN9E3IMIzn5pFTEKKh-Se9ZbfkeFIopv5GfR2ivwsP8Xbm99ozgpTEoeeLfUfEW8aYtyckYxJkls8XHTb2ZOV_brPqgDIvhsc-TzFA89au-V4zAGrxbjNP8KCF3t-dka6mirSjK6nOdU05xGMNFnuQtg_eUPyCOqU87N_gFSWo9Q",

  // Google OAuth Client ID — safe to be public (secured by registered origins)
  googleClientId: "937251908005-hvco8m4dpidqiuo09er1tec3p14426au.apps.googleusercontent.com",
};
