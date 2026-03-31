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
  robotEventsToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiYjhkNzUyODIzY2EyOTFiNjMxMzgzMzEzYjk1MWNiYWQ1MzkxNWRmNzM4NWY0NGIwZjc1ZDI3ZTZkYzg3MjQwOGFlMjBmN2ZmOWQyNGNkN2MiLCJpYXQiOjE3NzQ5MzU1MDcuMTE4NjQzLCJuYmYiOjE3NzQ5MzU1MDcuMTE4NjQ1LCJleHAiOjI3MjE3MDY3MDcuMTExMzY1OCwic3ViIjoiMTIyMzc4Iiwic2NvcGVzIjpbXX0.KtJ3eJ4907en9aecX6n-UyrxJRieqx8H-xroEGdLv670yr2YtRN6fL4WEIIxI21zENVRjd_fKybDnnfmrpSY4dRGrbwIk8ASmQAAbf9Zjso3i4l7uCZJZv09V3ngH87hTHBPGzhs_oznL7Z3H5bkwpBM1JBUEAQFYDi3i3e5tGbbAk-z0-_7ttaxQ6EIlyVqOmStB7TuYHPyZ7-vcfuxDpL940HyMhUNngFOyOXsksqgNlxbdYBPsvJisR4ptituRdW9UuJAHS6EByN4N-Wne0WM16TCMVZQpv4uNox7OLWtUSpwi0hkQ0eVG_KYJPq3ev6wn03N__sYu21nPmmXYib6YwDEL0XEanNxmpeFuUA6ExqOVD-V9oTZKXps6HJhZfjij3D-fGMrBCtUlVZ0qqNPR4H5tdfvRNCOGHeZGiyMhcYSKLoqDB2hEvmJIcsftQqbdjxvJIb8_fldTxg0l7omS6QLTPQePrAcfGBlsqlbgl9WlKmTk8CXrJMb7AaOpJGfGbOYD5aB4frNudzYz9q3COstb27Nn0vKMJjjUdBGBiiPt5z9YJgZzhOPMJhY51YGA6BEOsZ1suM-_mZMY1RwznlQtvkCqbtiafJbPaXyt4ld2H0RxnxtVL1FTHoUzY9shQ8NXNSSml1STqNgIqDWkDuLAsLWFlyRk4VyL7Y",

  // Google OAuth Client ID — safe to be public (secured by registered origins)
  googleClientId: "937251908005-hvco8m4dpidqiuo09er1tec3p14426au.apps.googleusercontent.com",
};
