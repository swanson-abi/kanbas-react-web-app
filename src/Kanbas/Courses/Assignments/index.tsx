import "./assignment-style.css";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import LessonControlButtons from "../LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment"
        placeholder="Search for Assignments" />
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group</button>
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>

      <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />
          ASSIGNMENTS
          <div className="float-end">
            <span className="wd-rounded-corners-all-around 
     wd-border-thin wd-border-grey wd-border-solid ">40% of Total </span>
            <FaPlus />
            <IoEllipsisVertical className="fs-4" />
          </div>
        </div>
        <ul className="wd-lessons list-group rounded-0">
          <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="wd-assignment-link" />
            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
              <MdAssignment className="me-2 fs-3" />
              A1 - ENV + HTML
            </a>
            <br />
            Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 6 at 11:59PM | 100pts
            <LessonControlButtons />
          </li>

          <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="wd-assignment-link" />
            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
              <MdAssignment className="me-2 fs-3" />
              A2 - CSS + Bootstrap
            </a>
            <br />
            Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 13 at 11:59PM | 100pts
            <LessonControlButtons />
          </li>
          <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="wd-assignment-link" />
            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
              <MdAssignment className="me-2 fs-3" />
              A3 - JavaScript + React
            </a>
            <br />
            Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 202 at 11:59PM | 100pts
            <LessonControlButtons />
          </li>
        </ul>
      </li>
    </div>
  );
}  