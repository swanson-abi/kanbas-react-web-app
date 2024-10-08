import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import "./course-nav.css";

export default function Courses() {
  return (
    <div>
      <h2>Course 1234</h2>
      <hr />
      <div className="d-flex"> {/* Flex container for layout */}
        <div className="course-nav ms-auto"> {/* ms-auto pushes the nav to the right */}
          <CoursesNavigation />
        </div>
        <div className="course-tabs"> {/* Course content */}
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Grades" element={<h1>Grades</h1>} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
