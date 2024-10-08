import "./assignment-style.css";
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container p-4">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" className="form-control" value="A1" />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea id="wd-description" className="form-control" rows={5}>
          The assignment is available online. Submit a link to the landing page.
        </textarea>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input id="wd-points" value={100} className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
          <select id="wd-group" className="form-select">
            <option value="ASSIGNMENTS">Assignments</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As</label>
          <select id="wd-display-grade-as" className="form-select">
            <option value="PERCENTAGE">Percentage</option>
            <option value="DECIMAL">Decimal</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
          <select id="wd-submission-type" className="form-select">
            <option value="ONLINE">Online</option>
            <option value="IN-PERSON">In-Person</option>
          </select>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Online Entry Options</label><br />
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="wd-text-entry" />
          <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="wd-website-url" />
          <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
          <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="wd-student-annotations" />
          <label className="form-check-label" htmlFor="wd-student-annotations">Student Annotations</label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="wd-file-upload" />
          <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-assign-to" className="form-label">Assign To:</label>
          <input className="form-control" value="Everyone" />
        </div>
        <div className="col-md-3">
          <label htmlFor="wd-due-date" className="form-label">Due</label>
          <input type="date" id="wd-due-date" className="form-control" value="2024-05-13" />
        </div>
        <div className="col-md-3">
          <label htmlFor="wd-available-from" className="form-label">Available From</label>
          <input type="date" id="wd-available-from" className="form-control" value="2024-05-06" />
        </div>
      </div>

      <div className="mb-3 row">
        <div className="col-md-3">
          <label htmlFor="wd-available-until" className="form-label">Until</label>
          <input type="date" id="wd-available-until" className="form-control" value="2024-05-20" />
        </div>
      </div>

      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-success">Save</button>
      </div>
    </div>

  );
}
