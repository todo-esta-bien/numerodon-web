// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Set, Route } from '@redwoodjs/router'
import HomeLayout from 'src/layouts/HomeLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={HomeLayout}>
        <Route path="/planner" page={PlannerPage} name="planner" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
